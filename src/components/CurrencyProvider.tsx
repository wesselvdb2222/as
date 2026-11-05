"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { type CurrencyCode, isCurrencyCode } from "@/lib/currency";

const STORAGE_KEY = "allsourced-currency";

const CurrencyContext = createContext<{ currency: CurrencyCode; setCurrency: (c: CurrencyCode) => void }>({
  currency: "EUR",
  setCurrency: () => {},
});

/** Remembers the visitor's display currency (EUR by default) in localStorage. */
export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("EUR");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage after hydration
      if (isCurrencyCode(saved)) setCurrencyState(saved);
    } catch {
      // Storage blocked (private mode): stay on EUR.
    }
  }, []);

  const setCurrency = (next: CurrencyCode) => {
    setCurrencyState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore: the choice still applies for this visit.
    }
  };

  return <CurrencyContext.Provider value={{ currency, setCurrency }}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
