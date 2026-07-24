"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { WhatsAppIcon } from "./icons";
import WorldMapBackground from "./WorldMapBackground";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-16 pb-28 text-center sm:pt-24 sm:pb-32"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Trusted by 850+ Global eCommerce Brands
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
        >
          Your e-commerce backend,
          <br className="hidden sm:block" />{" "}
          <span className="bg-gradient-to-r from-brand to-fuchsia-400 bg-clip-text text-transparent">
            fully handled.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-3xl text-balance text-lg text-muted"
        >
          We deliver ready-to-use e-commerce services, including Facebook ad
          structures, email marketing, and Google services, so you can focus
          on your brand, not your stack.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-row flex-wrap justify-center gap-3"
        >
          <Link
            href="https://wa.me/31647415437"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#a374ff] to-brand px-4 py-3 text-sm font-semibold text-brand-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_8px_20px_-4px_rgba(146,86,255,0.55)] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:px-6"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-lg bg-white/[0.06] px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.1] sm:px-6"
          >
            View Services
          </Link>
        </motion.div>

        <motion.a
          variants={item}
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
        </motion.a>
      </motion.div>
    </section>
  );
}
