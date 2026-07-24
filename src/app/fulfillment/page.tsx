import type { Metadata } from "next";
import Link from "next/link";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import FulfillmentFlow from "@/components/FulfillmentFlow";
import PackageGrid, { type ServicePackage } from "@/components/PackageGrid";
import { BoxIcon, WhatsAppIcon } from "@/components/icons";

const TITLE = "Fulfillment";
const DESCRIPTION =
  "Fulfillment services by AllSourced: warehousing, pick and pack, and shipping handled end to end, so orders reach customers on time.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fulfillment",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/fulfillment",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const PACKAGES: ServicePackage[] = [];

export default function FulfillmentPage() {
  return (
    <>
      <Topbar />
      <main className="flex-1">
        <ServiceHero
          icon={<BoxIcon className="h-8 w-8 text-brand" />}
          title={TITLE}
          description="Warehousing, pick and pack, and shipping handled end to end, so orders reach customers on time. We run your fulfillment like an in-house team, without the overhead."
        />

        <FulfillmentFlow />

        <section className="border-t border-zinc-100 bg-white py-16 sm:py-24">
          <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Work with us!
            </h2>
            <p className="mt-4 text-lg text-zinc-500">
              You need a minimum daily order quantity of 5.
            </p>
            <Link
              href={`https://wa.me/31647415437?text=${encodeURIComponent(
                "Hi, I'd like to work with you on Fulfillment.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#a374ff] to-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_8px_20px_-4px_rgba(146,86,255,0.55)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </Link>
          </div>
        </section>

        <PackageGrid packages={PACKAGES} />
      </main>
      <Footer />
    </>
  );
}
