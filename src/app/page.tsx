import { Hero } from "@/components/Hero";
import { MetaSection } from "@/components/MetaSection";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col">
      <Hero />
      <MetaSection />
      <WhyUs />
    </main>
  );
}
