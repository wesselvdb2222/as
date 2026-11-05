"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 26, prefix: "$", suffix: "M+", label: "Ad spend managed" },
  { value: 1223, prefix: "", suffix: "", label: "Clients served" },
];

const DURATION_MS = 1600;
const formatter = new Intl.NumberFormat("en-US");

/** Counts up from 0 once it scrolls into view. The server renders the final numbers, so they're
 * there without JavaScript and for search engines; motion is skipped for reduced-motion users. */
function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION_MS, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setShown(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatter.format(shown)}
      {suffix}
    </span>
  );
}

/** Headline numbers above the availability banner. */
export function StatsCounter() {
  return (
    <div className="bg-[#0b0716] px-5 pt-10 sm:px-8">
      <dl className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
        {STATS.map((stat) => (
          <div key={stat.label} className="relative bg-[#0b0716] px-6 py-7 text-center sm:py-9">
            <dd className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </dd>
            <dt className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-white/50">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
