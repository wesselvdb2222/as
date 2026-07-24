"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "./icons";

export default function CTA() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-background py-20 sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[130px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto flex max-w-2xl flex-col items-center px-6 text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Ready to hand off your{" "}
              <span className="bg-gradient-to-r from-brand to-fuchsia-400 bg-clip-text text-transparent">
                backend
              </span>
              ?
            </h2>
            <p className="mt-4 max-w-lg text-lg text-muted">
              Message us on WhatsApp and we will get you set up, no long
              onboarding required.
            </p>
            <Link
              href="https://wa.me/31647415437"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#a374ff] to-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_8px_20px_-4px_rgba(146,86,255,0.55)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
