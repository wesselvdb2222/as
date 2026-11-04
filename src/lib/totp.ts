/**
 * Time-based one-time passwords (RFC 6238), the same 6-digit codes authenticator apps show.
 * Runs entirely in the browser via Web Crypto, so the secret never leaves the visitor's device.
 */

export const TOTP_PERIOD_SECONDS = 30;
const DIGITS = 6;
const BASE32_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

/** Decodes a base32 secret as authenticator setup screens show it: spaces, dashes, lowercase and
 * "=" padding are all tolerated. Returns null if it contains characters outside the alphabet. */
export function decodeBase32(secret: string): Uint8Array<ArrayBuffer> | null {
  const clean = secret.replace(/[\s-]/g, "").replace(/=+$/, "").toUpperCase();
  if (!clean) return null;

  const bytes: number[] = [];
  let buffer = 0;
  let bits = 0;
  for (const char of clean) {
    const value = BASE32_ALPHABET.indexOf(char);
    if (value === -1) return null;
    buffer = (buffer << 5) | value;
    bits += 5;
    if (bits >= 8) {
      bits -= 8;
      bytes.push((buffer >> bits) & 0xff);
    }
  }
  return bytes.length > 0 ? new Uint8Array(bytes) : null;
}

export async function generateTotp(key: Uint8Array<ArrayBuffer>, timeMs = Date.now()): Promise<string> {
  const counter = Math.floor(timeMs / 1000 / TOTP_PERIOD_SECONDS);
  const message = new ArrayBuffer(8);
  new DataView(message).setBigUint64(0, BigInt(counter));

  const hmacKey = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-1" }, false, ["sign"]);
  const hmac = new Uint8Array(await crypto.subtle.sign("HMAC", hmacKey, message));

  // Dynamic truncation (RFC 4226 §5.3).
  const offset = hmac[hmac.length - 1] & 0x0f;
  const binary =
    ((hmac[offset] & 0x7f) << 24) | (hmac[offset + 1] << 16) | (hmac[offset + 2] << 8) | hmac[offset + 3];
  return String(binary % 10 ** DIGITS).padStart(DIGITS, "0");
}

export function secondsRemaining(timeMs = Date.now()) {
  return TOTP_PERIOD_SECONDS - (Math.floor(timeMs / 1000) % TOTP_PERIOD_SECONDS);
}
