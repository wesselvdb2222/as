import type { Metadata } from "next";
import Link from "next/link";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { CheckIcon, MetaLogo, WhatsAppIcon } from "@/components/icons";

const TITLE = "Meta Services";
const DESCRIPTION =
  "Meta advertising services by AllSourced: campaign structures, creative testing, audience strategy, and tracking for Facebook and Instagram.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/meta-services",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/meta-services",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const PACKAGES = [
  {
    name: "Facebook Structure",
    price: "€395",
    tag: "4-8 hours delivery time",
    includes: [
      "2x Business Manager",
      "5x Reinstated Profile",
      "30-day free replacement",
    ],
  },
  {
    name: "Business Manager",
    price: "€125",
    tag: "Aged & Fresh",
    includes: [
      "Reduced risk of ad account bans",
      "Access to Facebook support",
      "30-day free replacement",
    ],
  },
  {
    name: "Reinstated Profile",
    price: "€69",
    tag: "Instant Delivery",
    includes: [
      "Bypasses previous restrictions or bans",
      "Can be linked to Business Managers",
      "30-day warranty",
    ],
  },
  {
    name: "Aged Profile",
    price: "€59",
    tag: "Instant Delivery",
    includes: ["Established account history", "Lower risk of restrictions"],
  },
  {
    name: "Facebook Page",
    price: "€49",
    tag: "Instant Delivery",
    includes: [
      "Bypasses restrictions",
      "Reduced risk of immediate re-suspension",
    ],
  },
  {
    name: "Agency Ad Account",
    price: "€249",
    tag: "Setup fee",
    includes: ["USA Based", "No monthly costs"],
  },
];

export default function MetaServicesPage() {
  return (
    <>
      <Topbar />
      <main className="flex-1 bg-background">
        <section className="relative overflow-hidden pt-16 pb-10 sm:pt-20 sm:pb-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[-10rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]"
          />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg">
              <MetaLogo className="h-8 w-8" />
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Meta Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Proven account structures built for scale, from campaign
              architecture to creative testing frameworks. We run your Meta
              ads like an in-house team, without the overhead.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Packages
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.name}
                  className="flex flex-col rounded-lg border border-white/10 bg-surface p-8"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="mt-4 text-3xl font-semibold text-foreground">
                    {pkg.price}
                  </p>
                  <p className="mt-1 text-sm text-muted">{pkg.tag}</p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.includes.map((line) => (
                      <li
                        key={line}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <CheckIcon className="h-4 w-4 shrink-0 text-brand" />
                        {line}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`https://wa.me/31647415437?text=${encodeURIComponent(
                      `Hi, I'm interested in the ${pkg.name} package.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#a374ff] to-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_8px_20px_-4px_rgba(146,86,255,0.55)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Order on WhatsApp
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
