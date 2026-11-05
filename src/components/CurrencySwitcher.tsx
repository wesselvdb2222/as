"use client";

import { CURRENCIES, type CurrencyCode } from "@/lib/currency";
import { useCurrency } from "./CurrencyProvider";

/** EUR / USD / GBP picker for the indicative prices, in the navbar. */
export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();
  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">Currency</span>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
        className="cursor-pointer appearance-none rounded-md border border-white/10 bg-transparent py-1.5 pl-2.5 pr-7 text-sm font-medium text-white/80 transition-colors hover:border-white/20 hover:text-white focus:border-brand focus:outline-none"
      >
        {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
          <option key={code} value={code} className="bg-black text-white">
            {CURRENCIES[code].symbol} {CURRENCIES[code].label}
          </option>
        ))}
      </select>
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} className="pointer-events-none absolute right-2 h-3.5 w-3.5 text-white/50" aria-hidden>
        <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </label>
  );
}
