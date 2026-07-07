import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
