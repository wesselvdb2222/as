/**
 * Display currencies for indicative prices. Prices are kept in EUR; other currencies are shown
 * with these fixed rates and rounded to whole units. They're indications, not quotes, so fixed
 * rates are fine: update them now and then.
 */
export const CURRENCIES = {
  EUR: { label: "EUR", symbol: "€", ratePerEur: 1 },
  USD: { label: "USD", symbol: "$", ratePerEur: 1.08 },
  GBP: { label: "GBP", symbol: "£", ratePerEur: 0.85 },
} as const;

export type CurrencyCode = keyof typeof CURRENCIES;

export function isCurrencyCode(value: string | null): value is CurrencyCode {
  return value !== null && value in CURRENCIES;
}

export function formatPrice(eur: number, currency: CurrencyCode) {
  return new Intl.NumberFormat("en-IE", { style: "currency", currency, maximumFractionDigits: 0 }).format(
    Math.round(eur * CURRENCIES[currency].ratePerEur)
  );
}
