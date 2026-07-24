import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import PackageGrid, { type ServicePackage } from "@/components/PackageGrid";
import { MailIcon } from "@/components/icons";

const TITLE = "Email Marketing";
const DESCRIPTION =
  "Email marketing services by AllSourced: flows, campaigns, and lifecycle automation that turn one time buyers into repeat customers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/email-marketing",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/email-marketing",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const PACKAGES: ServicePackage[] = [
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
      <main className="flex-1">
        <ServiceHero
          icon={<MailIcon className="h-8 w-8 text-brand" />}
          title={TITLE}
          description="Automated flows and campaigns that turn one time buyers into repeat customers. We run your email channel like an in-house team, without the overhead."
        />
        <PackageGrid packages={PACKAGES} />
      </main>
      <Footer />
    </>
  );
}
