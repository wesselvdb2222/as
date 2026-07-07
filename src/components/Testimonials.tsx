"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "AllSourced took over our entire ad account structure and cleaned up years of technical debt in weeks. Our ROAS improved almost immediately.",
    name: "Sanne de Vries",
    company: "Founder, Loome",
  },
  {
    quote:
      "Finally an agency that treats email marketing as a real revenue channel instead of an afterthought. Our flows run on autopilot now.",
    name: "Tom Bakker",
    company: "E-commerce Manager, Northlane",
  },
  {
    quote:
      "Fulfillment used to be our biggest bottleneck. AllSourced plugged straight into our stack and orders just ship now.",
    name: "Priya Patel",
    company: "Operations Lead, Verdant",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <Image
            src="/trustpilot-stars-5.svg"
            alt="5 stars"
            width={112}
            height={21}
          />
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            What customers say about us
          </h2>
          <p className="mt-4 text-lg text-muted">
            Rated 4.8 out of 5 based on 51 reviews on Trustpilot.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {TESTIMONIALS.map(({ quote, name, company }) => (
            <motion.div
              key={name}
              variants={item}
              className="flex flex-col rounded-lg border border-white/10 bg-white/[0.03] p-8"
            >
              <Image
                src="/trustpilot-stars-5.svg"
                alt="5 stars"
                width={80}
                height={15}
              />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">
                  {name}
                </p>
                <p className="text-sm text-muted">{company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="https://www.trustpilot.com/review/allsourced.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand transition-colors hover:text-fuchsia-400"
          >
            Read all reviews on Trustpilot &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
