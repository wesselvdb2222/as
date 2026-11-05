import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { type Partner, partners, WHATSAPP_URL } from "@/lib/site";

const hasPlaceholders = partners.some((p) => p.placeholder);

// Kept out of search engines while example partners are still listed (see `placeholder`).
export const metadata: Metadata = pageMetadata({
  title: "Exclusive Partner Deals",
  description: "Exclusive deals from the platforms AllSourced works with, like Shopify for $1 per month. Tools to run and grow your online business.",
  path: "/partners",
  noindex: hasPlaceholders,
});

function PartnerLogo({ partner, size }: { partner: Partner; size: "sm" | "md" }) {
  if (partner.logo) {
    return (
      <Image
        src={partner.logo}
        alt={partner.name}
        width={160}
        height={48}
        className={`${size === "md" ? "h-10" : "h-8"} w-auto object-contain`}
      />
    );
  }
  return (
    <span
      className={`flex items-center justify-center rounded-md border border-white/10 bg-white/5 font-semibold text-white ${
        size === "md" ? "h-12 w-12 text-lg" : "h-10 w-10"
      }`}
    >
      {partner.name.charAt(0)}
    </span>
  );
}

function VisitLink({ partner }: { partner: Partner }) {
  if (!partner.url) return null;
  return (
    <a
      href={partner.url}
      target="_blank"
      rel={partner.affiliate ? "sponsored noopener noreferrer" : "noopener noreferrer"}
      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-light transition-colors hover:text-white"
    >
      {partner.perk && partner.affiliate ? "Claim the deal" : "Visit website"} <span aria-hidden>↗</span>
    </a>
  );
}

export default function PartnersPage() {
  const featured = partners.filter((p) => p.featured);
  const categories = [...new Set(partners.filter((p) => !p.featured).map((p) => p.category))];

  return (
    <main className="flex flex-1 flex-col bg-gradient-to-b from-black to-[#0b0716]">
      {/* Header */}
      <section className="px-5 pb-12 pt-44 sm:px-8 sm:pt-52">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-brand-light">Partners</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Exclusive Partner Deals</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Deals from the platforms we work with every day, available through AllSourced.
          </p>
        </div>

        {/* Logo strip */}
        <ul className="mx-auto mt-14 flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-6 border-y border-white/10 py-8">
          {partners.map((p, i) => (
            <li key={`${p.name}-${i}`} className="opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" title={p.name}>
              <PartnerLogo partner={p} size="sm" />
            </li>
          ))}
        </ul>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="px-5 pb-16 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Featured</h2>
            <ul className="mt-5 grid gap-4 md:grid-cols-2">
              {featured.map((p, i) => (
                <li key={`${p.name}-${i}`} className="flex flex-col rounded-xl border border-brand/30 bg-gradient-to-br from-brand/15 via-white/[0.03] to-transparent p-7">
                  <div className="flex items-start justify-between gap-4">
                    <PartnerLogo partner={p} size="md" />
                    <span className="text-xs font-medium uppercase tracking-wider text-brand-light">{p.category}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{p.description}</p>
                  {p.perk && (
                    <p className="mt-5 inline-flex items-center gap-2 self-start rounded-md border border-brand/30 bg-brand/10 px-3 py-1.5 text-sm font-medium text-white">
                      <span className="text-brand-light" aria-hidden>
                        ★
                      </span>
                      {p.perk}
                    </p>
                  )}
                  <VisitLink partner={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* All partners by category */}
      {categories.length > 0 && (
        <section className="px-5 pb-20 sm:px-8">
          <div className="mx-auto max-w-6xl space-y-12">
            {categories.map((category) => (
              <div key={category}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">{category}</h2>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {partners
                    .filter((p) => !p.featured && p.category === category)
                    .map((p, i) => (
                      <li key={`${p.name}-${i}`} className="flex flex-col rounded-lg border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.06]">
                        <PartnerLogo partner={p} size="sm" />
                        <h3 className="mt-5 text-lg font-semibold text-white">{p.name}</h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{p.description}</p>
                        {p.perk && <p className="mt-4 text-sm font-medium text-brand-light">★ {p.perk}</p>}
                        <VisitLink partner={p} />
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Become a partner */}
      <section className="px-5 pb-28 sm:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl border border-brand/30 bg-gradient-to-r from-brand/25 via-brand/10 to-transparent">
          <div aria-hidden className="pointer-events-none absolute -left-20 top-1/2 h-40 w-72 -translate-y-1/2 rounded-full bg-brand/30 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">Become a partner</h2>
              <p className="mt-2 max-w-xl text-sm text-white/60 sm:text-base">
                Offer a product or service our clients need? Let&apos;s talk about working together.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
