"use client";

import { CURRENCIES, type CurrencyCode } from "@/lib/currency";
import { useCurrency } from "./CurrencyProvider";

/** EUR / USD / GBP picker for the indicative prices, in the navbar; sized to match the
 * "Contact us" button beside it. */
export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();
  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">Currency</span>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
        className="h-9 cursor-pointer appearance-none rounded-md border border-white/15 bg-white/5 pl-3 pr-8 text-sm font-semibold leading-none text-white transition-colors hover:border-white/20 hover:text-white focus:border-brand focus:outline-none"
      >
        {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
          <option key={code} value={code} className="bg-black text-white">
            {CURRENCIES[code].symbol} {CURRENCIES[code].label}
          </option>
        ))}
      </select>
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-white/60" aria-hidden>
        <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </label>
  );
}
