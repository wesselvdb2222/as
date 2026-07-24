import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "E-commerce Agency: Meta, Google & Email Marketing Services",
  description:
    "AllSourced handles your e-commerce backend: Meta ad structures, email marketing, Google services, and fulfillment. Rated 4.8/5 on Trustpilot.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Topbar />
      <main className="flex-1">
        <Hero />
        <LogoSlider />
        <Services />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
