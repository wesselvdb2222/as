import type { Metadata } from "next";
import Link from "next/link";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { CheckIcon, MailIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Email Marketing | AllSourced",
  description:
    "Email marketing services by AllSourced: flows, campaigns, and lifecycle automation that turn one time buyers into repeat customers.",
};

const PACKAGES: {
  name: string;
  price: string;
  tag?: string;
  includes: string[];
}[] = [
  {
    name: "Branded Flows",
    price: "€249",
    tag: "One-time",
    includes: [
      "Designed for your brand",
      "3x ParcelPanel or 123Track",
      "2x Klaviyo Abandoned Checkout",
      "Increase returning customers",
      "Installation included",
    ],
  },
  {
    name: "Premium Flows",
    price: "€495",
    tag: "One-time",
    includes: [
      "Designed for your brand",
      "3x ParcelPanel or 123Track",
      "5x Klaviyo Flows",
      "Increase returning customers",
      "Installation included",
    ],
  },
];

export default function EmailMarketingPage() {
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
              <MailIcon className="h-8 w-8 text-brand" />
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Email Marketing
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Automated flows and campaigns that turn one time buyers into
              repeat customers. We run your email channel like an in-house
              team, without the overhead.
            </p>
          </div>
        </section>

        {PACKAGES.length > 0 && (
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
        )}
      </main>
      <Footer />
    </>
  );
}
