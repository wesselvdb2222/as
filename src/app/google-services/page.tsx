import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import PackageGrid, { type ServicePackage } from "@/components/PackageGrid";
import { GoogleLogo } from "@/components/icons";

const TITLE = "Google Services";
const DESCRIPTION =
  "Google advertising services by AllSourced: Merchant Center approval, Search, Shopping, and Performance Max campaigns.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/google-services",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/google-services",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const PACKAGES: ServicePackage[] = [
  {
    name: "GMC Approval",
    subtitle: "Merchant Center Approval",
    price: "€750",
    tag: "One-time",
    includes: [
      "Pay after approval",
      "98% Approval Rate",
      "Google Merchant Center",
      "Dedicated Support",
    ],
  },
  {
    name: "Media Buyer",
    price: "€1500",
    tag: "Per month",
    includes: [
      "Google Ads Management",
      "Scalable Solutions",
      "Dedicated Media Buyer",
      "Performance Optimization",
    ],
  },
];

export default function GoogleServicesPage() {
  return (
    <>
      <Topbar />
      <main className="flex-1">
        <ServiceHero
          icon={<GoogleLogo className="h-8 w-8" />}
          title={TITLE}
          description="Search, Shopping, and Performance Max campaigns engineered for profitable growth. We run your Google account like an in-house team, without the overhead."
        />
        <PackageGrid packages={PACKAGES} />
      </main>
      <Footer />
    </>
  );
}
