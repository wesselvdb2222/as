"use client";

import { useState } from "react";
import { checkUids, parseUids, type UidStatus } from "@/lib/uid-check";

type Results = Record<UidStatus, string[]>;
const EMPTY: Results = { live: [], die: [], error: [] };

function ResultBox({ title, tone, uids }: { title: string; tone: string; uids: string[] }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    await navigator.clipboard.writeText(uids.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col rounded-lg border border-white/10 bg-black/30">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <p className="text-sm font-semibold text-white">
          <span className={`mr-2 inline-block h-2 w-2 rounded-full ${tone}`} aria-hidden />
          {title} <span className="ml-1 font-normal text-white/50">{uids.length}</span>
        </p>
        <button
          type="button"
          onClick={onCopy}
          disabled={uids.length === 0}
          data-track={`Copy ${title.toLowerCase()} UIDs`}
          className="rounded-md border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-white/10 disabled:opacity-40"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <textarea
        readOnly
        value={uids.join("\n")}
        aria-label={`${title} UIDs`}
        className="h-56 resize-none bg-transparent px-4 py-3 font-mono text-xs text-white/80 focus:outline-none"
      />
    </div>
  );
}

export function UidChecker() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<Results>(EMPTY);
  const [total, setTotal] = useState(0);
  const [running, setRunning] = useState(false);

  const done = results.live.length + results.die.length + results.error.length;

  async function onCheck(event: React.FormEvent) {
    event.preventDefault();
    const uids = parseUids(input);
    if (uids.length === 0 || running) return;

    setRunning(true);
    setTotal(uids.length);
    setResults(EMPTY);
    await checkUids(uids, (uid, status) =>
      setResults((prev) => ({ ...prev, [status]: [...prev[status], uid] }))
    );
    setRunning(false);
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onCheck} className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <label htmlFor="uids" className="text-sm font-medium text-white">
          Facebook UIDs <span className="font-normal text-white/50">— one per line</span>
        </label>
        <textarea
          id="uids"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={"100012345678901\n100098765432109"}
          spellCheck={false}
          className="mt-2 h-48 w-full resize-y rounded-md border border-white/15 bg-black/40 px-4 py-3 font-mono text-sm text-white placeholder:text-white/30 focus:border-brand-light focus:outline-none"
        />
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={running}
            data-track="Check UIDs"
            className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-brand-light disabled:opacity-60"
          >
            {running ? "Checking…" : "Check"}
          </button>
          {total > 0 && (
            <div className="flex min-w-48 flex-1 items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-brand-light transition-[width] duration-200"
                  style={{ width: `${(done / total) * 100}%` }}
                />
              </div>
              <span className="text-xs tabular-nums text-white/60">
                {done}/{total}
              </span>
            </div>
          )}
        </div>
      </form>

      {total > 0 && (
        <div className={`grid gap-4 ${results.error.length > 0 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          <ResultBox title="Live" tone="bg-emerald-400" uids={results.live} />
          <ResultBox title="Die" tone="bg-red-400" uids={results.die} />
          {results.error.length > 0 && (
            <ResultBox title="Couldn't check" tone="bg-amber-400" uids={results.error} />
          )}
        </div>
      )}
    </div>
  );
}
