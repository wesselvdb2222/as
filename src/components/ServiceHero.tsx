"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServiceHero({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]"
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div
          variants={item}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg"
        >
          {icon}
        </motion.div>
        <motion.h1
          variants={item}
          className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-lg text-muted"
        >
          {description}
        </motion.p>
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 text-white"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-12 w-full sm:h-16"
        >
          <path
            d="M0,40 C240,90 480,0 720,20 C960,40 1200,90 1440,40 L1440,80 L0,80 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
