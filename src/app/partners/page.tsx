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

function DealCard({ partner }: { partner: Partner }) {
  return (
    <li className="flex flex-col gap-6 rounded-xl border border-brand/30 bg-gradient-to-br from-brand/15 via-white/[0.03] to-transparent p-6 sm:flex-row sm:items-center sm:p-8">
      {partner.logo ? (
        <Image src={partner.logo} alt={partner.name} width={89} height={101} className="h-14 w-auto shrink-0 object-contain" />
      ) : (
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-xl font-semibold text-white">
          {partner.name.charAt(0)}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <h2 className="text-xl font-semibold text-white">{partner.name}</h2>
        {partner.perk && <p className="mt-1 text-lg font-medium text-brand-light">{partner.perk}</p>}
        <p className="mt-2 text-sm leading-relaxed text-white/60">{partner.description}</p>
      </div>
      {partner.url && (
        <a
          href={partner.url}
          target="_blank"
          // Paid/affiliate links are marked sponsored, as Google asks.
          rel={partner.affiliate ? "sponsored noopener noreferrer" : "noopener noreferrer"}
          className="inline-flex shrink-0 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
        >
          {partner.perk && partner.affiliate ? "Claim the deal" : "Visit website"}
        </a>
      )}
    </li>
  );
}

export default function PartnersPage() {
  return (
    <main className="flex flex-1 flex-col bg-gradient-to-b from-black to-[#0b0716]">
      <section className="px-5 pb-24 pt-36 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Exclusive Partner Deals</h1>
          <p className="mt-3 text-base text-white/60">Deals from the platforms we work with every day, available through AllSourced.</p>

          <ul className="mt-10 space-y-4">
            {partners.map((p) => (
              <DealCard key={p.name} partner={p} />
            ))}
          </ul>

          <p className="mt-10 text-sm text-white/50">
            Offer a product our clients need?{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
              Become a partner
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
