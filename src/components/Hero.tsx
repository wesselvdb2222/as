import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "./icons";
import WorldMapBackground from "./WorldMapBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <WorldMapBackground />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_60%_60%_at_50%_42%,var(--background)_0%,var(--background)_35%,transparent_75%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-16 text-center sm:pt-36 sm:pb-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Trusted by 850+ Global eCommerce Brands
        </span>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          We handle your{" "}
          <span className="bg-gradient-to-r from-brand to-fuchsia-400 bg-clip-text text-transparent">
            backend
          </span>
          .
        </h1>

        <p className="mt-6 max-w-3xl text-balance text-lg text-muted">
          We deliver ready-to-use e-commerce services, including Facebook ad
          structures, email marketing, and Google services, so you can focus
          on your brand, not your stack.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="https://wa.me/31647415437"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#a374ff] to-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_8px_20px_-4px_rgba(146,86,255,0.55)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-lg bg-white/[0.06] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.1]"
          >
            View Services
          </Link>
        </div>

        <a
          href="https://www.trustpilot.com/review/allsourced.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <Image
            src="/trustpilot-stars-5.svg"
            alt="5 stars"
            width={96}
            height={18}
          />
          <span className="inline-flex items-center gap-1">
            <strong className="font-semibold text-foreground">4.8</strong>
            <span>on Trustpilot &middot; 51 reviews</span>
          </span>
        </a>
      </div>
    </section>
  );
}
