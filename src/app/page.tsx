import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HomeFaq } from "@/components/HomeFaq";
import { HomeReviews } from "@/components/HomeReviews";
import { HowItWorks } from "@/components/HowItWorks";
import { MetaSection } from "@/components/MetaSection";
import { SeoContent } from "@/components/SeoContent";
import { WhyUs } from "@/components/WhyUs";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col">
      <Hero />
      <MetaSection />
      <HowItWorks />
      <WhyUs />
      <SeoContent />
      <HomeReviews />
      <HomeFaq />
    </main>
  );
}
