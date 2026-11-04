/**
 * Facebook UID live/die check against the public Graph picture endpoint, called straight from the
 * visitor's browser (it sends `access-control-allow-origin: *`), so lists never touch our server.
 *
 * Without an access token Facebook no longer returns real profile photos, but the response still
 * differs: an existing account gets a sized image (`data.height` set, served from scontent), while a
 * deleted, disabled or never-existing one gets the static silhouette with no size, or an error.
 */

export type UidStatus = "live" | "die" | "error";

/** Pulls one UID per line, tolerating extra columns such as "1000123456789|password|..." by taking
 * the first run of digits. Duplicates are dropped, first occurrence kept. */
export function parseUids(input: string): string[] {
  const uids = input
    .split(/\r?\n/)
    .map((line) => line.match(/\d{1,20}/)?.[0])
    .filter((uid): uid is string => Boolean(uid));
  return [...new Set(uids)];
}

export async function checkUid(uid: string): Promise<UidStatus> {
  try {
    const response = await fetch(`https://graph.facebook.com/${uid}/picture?redirect=false`);
    const body = await response.json();
    if (body?.error) return "die";
    return typeof body?.data?.height === "number" ? "live" : "die";
  } catch {
    return "error";
  }
}

/** Checks UIDs with a bounded number in flight, reporting each result as it lands. */
export async function checkUids(
  uids: string[],
  onResult: (uid: string, status: UidStatus) => void,
  concurrency = 20
) {
  let next = 0;
  async function worker() {
    while (next < uids.length) {
      const uid = uids[next++];
      onResult(uid, await checkUid(uid));
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, uids.length) }, worker));
}
