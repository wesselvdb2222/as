"use client";

import { useEffect, useState } from "react";
import { decodeBase32, generateTotp, secondsRemaining, TOTP_PERIOD_SECONDS } from "@/lib/totp";

export function TwoFactorGenerator() {
  const [secret, setSecret] = useState("");
  const [key, setKey] = useState<Uint8Array<ArrayBuffer> | null>(null);
  const [code, setCode] = useState<string | null>(null);
  const [remaining, setRemaining] = useState(TOTP_PERIOD_SECONDS);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Once a code is showing, keep it current: tick the countdown and roll to the next code
  // when the 30-second window ends, so a visitor who's slow to paste never submits a stale one.
  useEffect(() => {
    if (!key) return;
    let cancelled = false;
    const tick = async () => {
      const left = secondsRemaining();
      setRemaining(left);
      if (left === TOTP_PERIOD_SECONDS) {
        const next = await generateTotp(key);
        if (!cancelled) setCode(next);
      }
    };
    const interval = setInterval(tick, 1000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [key]);

  async function onGenerate(event: React.FormEvent) {
    event.preventDefault();
    setCopied(false);
    const decoded = decodeBase32(secret);
    if (!decoded) {
      setKey(null);
      setCode(null);
      setError("That doesn't look like a valid 2FA key. It should only contain letters A–Z and numbers 2–7.");
      return;
    }
    setError(null);
    setKey(decoded);
    setRemaining(secondsRemaining());
    setCode(await generateTotp(decoded));
  }

  async function onCopy() {
    if (!code) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <form onSubmit={onGenerate}>
        <label htmlFor="secret" className="text-sm font-medium text-white">
          2FA key
        </label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <input
            id="secret"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="e.g. JBSW Y3DP EHPK 3PXP"
            autoComplete="off"
            autoCapitalize="characters"
            spellCheck={false}
            className="min-w-0 flex-1 rounded-md border border-white/15 bg-black/40 px-4 py-3 font-mono text-sm text-white placeholder:text-white/30 focus:border-brand-light focus:outline-none"
          />
          <button
            type="submit"
            data-track="Generate 2FA code"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-brand-light"
          >
            Generate
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </form>

      {code && (
        <div className="mt-8 flex flex-col items-center border-t border-white/10 pt-8 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-white/50">Your code</p>
          <p className="mt-2 font-mono text-5xl font-semibold tracking-[0.2em] text-white tabular-nums">
            {code}
          </p>
          <div className="mt-5 h-1 w-48 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-brand-light transition-[width] duration-1000 ease-linear"
              style={{ width: `${(remaining / TOTP_PERIOD_SECONDS) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-white/50">New code in {remaining}s</p>
          <button
            type="button"
            onClick={onCopy}
            data-track="Copy 2FA code"
            className="mt-5 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {copied ? "Copied!" : "Copy code"}
          </button>
        </div>
      )}
    </div>
  );
}
