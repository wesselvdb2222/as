import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { MetaSection } from "@/components/MetaSection";
import { TalkToTeam } from "@/components/TalkToTeam";
import { WhyUs } from "@/components/WhyUs";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col">
      <Hero />
      <MetaSection />
      <TalkToTeam />
      <WhyUs />
    </main>
  );
}
