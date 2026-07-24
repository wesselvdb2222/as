import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import PackageGrid, { type ServicePackage } from "@/components/PackageGrid";
import { MetaLogo } from "@/components/icons";

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

const PACKAGES: ServicePackage[] = [
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
      <main className="flex-1">
        <ServiceHero
          icon={<MetaLogo className="h-8 w-8" />}
          title={TITLE}
          description="Proven account structures built for scale, from campaign architecture to creative testing frameworks. We run your Meta ads like an in-house team, without the overhead."
        />
        <PackageGrid packages={PACKAGES} />
      </main>
      <Footer />
    </>
  );
}
