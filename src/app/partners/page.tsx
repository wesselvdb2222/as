import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { partners, WHATSAPP_URL } from "@/lib/site";

// noindex while the partner list is still placeholder content; drop it once real partners are in.
export const metadata: Metadata = pageMetadata({
  title: "Partners",
  description: "The platforms and companies AllSourced works with to keep your business running.",
  path: "/partners",
  noindex: true,
});

export default function PartnersPage() {
  return (
    <main className="flex flex-1 flex-col bg-gradient-to-b from-black to-[#0b0716]">
      {/* Header */}
      <section className="px-5 pb-16 pt-44 sm:px-8 sm:pt-52">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-brand-light">Partners</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            The partners behind our work
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            We work with trusted platforms and companies to keep your advertising running and your
            business growing.
          </p>
        </div>
      </section>

      {/* Partner grid */}
      <section className="px-5 pb-24 sm:px-8">
        <ul className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p, i) => {
            const card = (
              <>
                <div className="flex h-12 items-center">
                  {p.logo ? (
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={160}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                  ) : (
                    <span className="flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/5 text-lg font-semibold text-white">
                      {p.name.charAt(0)}
                    </span>
                  )}
                </div>
                <p className="mt-6 text-xs font-medium uppercase tracking-wider text-brand-light">
                  {p.category}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-white">{p.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{p.description}</p>
              </>
            );
            const cardClass =
              "block h-full rounded-lg border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.06]";

            return (
              <li key={`${p.name}-${i}`}>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className={cardClass}>
                    {card}
                  </a>
                ) : (
                  <div className={cardClass}>{card}</div>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* CTA */}
      <section className="px-5 pb-28 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-lg border border-white/10 bg-white/[0.03] p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">Want to partner with us?</h2>
            <p className="mt-2 text-sm text-white/60 sm:text-base">
              Let&apos;s talk about how we can work together.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-brand-light"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
