"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { WHATSAPP_URL } from "@/lib/site";
import { formatPrice } from "@/lib/currency";
import { useCurrency } from "./CurrencyProvider";
import { ServiceIcon } from "./ServiceIcon";
import { ArrowButton } from "./ArrowButton";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-[18px] w-[18px]",
  "aria-hidden": true,
};

type MetaProduct = {
  title: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
  /** Indicative price in EUR (converted to the visitor's currency), shown as a badge top-right;
   * `text` instead for prices that aren't an amount, e.g. "4% fee". */
  price?: { eur?: number; text?: string; unit?: string; prefix?: string };
  features?: string[];
};

const products: MetaProduct[] = [
  {
    title: "Agency Ad Accounts",
    price: { text: "4% fee" },
    description: "Stable, scalable spend. A single restriction never stops your campaigns.",
    featured: true,
    features: ["Different types available", "Live within 24 hours", "24/7 top-ups"],
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3 10h18M7 15h4" />
      </svg>
    ),
  },
  {
    title: "Facebook Structures",
    price: { eur: 375 },
    description: "Complete setups with profiles, Business Manager, pages and ad accounts connected.",
    icon: (
      <svg {...iconProps}>
        <rect x="9" y="3" width="6" height="5" rx="1" />
        <rect x="3" y="16" width="6" height="5" rx="1" />
        <rect x="15" y="16" width="6" height="5" rx="1" />
        <path d="M12 8v4M6 16v-2h12v2" />
      </svg>
    ),
  },
  {
    title: "Facebook Profiles",
    price: { eur: 59 },
    description: "Established profiles to securely manage and run your advertising assets.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    title: "Facebook Pages",
    price: { eur: 50, unit: "/ page" },
    description: "Pages ready to advertise from, so you can launch campaigns right away.",
    icon: (
      <svg {...iconProps}>
        <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
      </svg>
    ),
  },
  {
    title: "Business Managers",
    price: { eur: 125, prefix: "Aged from" },
    description: "Organise your ad accounts, pages and pixels in one place.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="7" width="18" height="13" rx="2.5" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
      </svg>
    ),
  },
];

function whatsappLink(product: string) {
  const text = `Hi AllSourced, I'm interested in ${product}.`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0 text-brand-light" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function MetaSection() {
  const { currency } = useCurrency();
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.clientWidth + 16), behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#160c33] via-[#0b0716] to-black px-5 py-14 sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-brand/30 bg-brand/10 text-brand-light">
                <ServiceIcon icon="meta" />
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Meta</h2>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
              Everything you need to keep advertising on Facebook and Instagram, even when your own
              assets get restricted.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <ArrowButton direction="left" disabled={!canPrev} onClick={() => scrollByCard(-1)} />
            <ArrowButton direction="right" disabled={!canNext} onClick={() => scrollByCard(1)} />
          </div>
        </div>

        {/* Slider */}
        <ul
          ref={trackRef}
          onScroll={update}
          className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 sm:mx-0 sm:scroll-px-0 sm:px-0"
        >
          {products.map((p) => (
            <li key={p.title} className="w-[270px] shrink-0 snap-start sm:w-[280px]">
              <a
                href={whatsappLink(p.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col rounded-xl border p-5 transition-colors ${
                  p.featured
                    ? "border-brand/50 bg-brand/[0.12] hover:border-brand"
                    : "border-white/10 bg-white/[0.03] hover:border-brand/40 hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-md ${
                      p.featured
                        ? "bg-brand text-white"
                        : "border border-white/10 bg-white/5 text-brand-light transition-colors group-hover:border-brand/40 group-hover:bg-brand/15"
                    }`}
                  >
                    {p.icon}
                  </span>
                  {/* Indicative price, top-right */}
                  {p.price && (
                    <span
                      className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
                        p.featured ? "border-brand/50 bg-brand/20 text-white" : "border-white/10 bg-white/5 text-white/80"
                      }`}
                    >
                      {p.price.text ? (
                        <span className="font-semibold text-white">{p.price.text}</span>
                      ) : (
                        <>
                          {p.price.prefix ?? "From"}{" "}
                          <span className="font-semibold text-white">{formatPrice(p.price.eur ?? 0, currency)}</span>
                        </>
                      )}
                      {p.price.unit && <span className="text-white/50"> {p.price.unit}</span>}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">{p.description}</p>

                {p.features && (
                  <ul className="mt-4 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-white/80">
                        <Check />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-5">
                  {p.featured ? (
                    <span className="flex w-full items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-brand-light">
                      Get started
                    </span>
                  ) : (
                    <span className="flex items-center justify-between border-t border-white/10 pt-4 text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                      Ask about this
                      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light transition-colors hover:text-white"
        >
          Not sure what you need? Ask us <span aria-hidden>→</span>
        </a>

        {/* Legal disclaimer */}
        <div className="mt-10 flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 sm:p-5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 h-5 w-5 shrink-0 text-brand-light"
            aria-hidden
          >
            <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <p className="text-sm leading-relaxed text-white/60">
            <strong className="font-semibold text-white">Legal disclaimer:</strong> We do not sell
            hacked or stolen accounts. We only sell aged accounts that we have created ourselves,
            which also ensures their stability.
          </p>
        </div>
      </div>
    </section>
  );
}
