"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, type Variants } from "framer-motion";
import { GridIcon, StarIcon, UsersIcon, WhatsAppIcon } from "./icons";

const STATS = [
  {
    icon: UsersIcon,
    target: 850,
    decimals: 0,
    suffix: "+",
    label: "Global eCommerce brands",
  },
  {
    icon: StarIcon,
    target: 4.8,
    decimals: 1,
    suffix: "/5",
    label: "Rating on Trustpilot",
  },
  {
    icon: GridIcon,
    target: 4,
    decimals: 0,
    suffix: "",
    label: "Core services, one team",
  },
  {
    icon: WhatsAppIcon,
    target: 24,
    decimals: 0,
    suffix: "/7",
    label: "Support via WhatsApp",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function CountUpNumber({
  target,
  decimals,
  suffix,
}: {
  target: number;
  decimals: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: setValue,
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              whileHover={{ y: -4 }}
              className="relative flex flex-col items-center overflow-hidden rounded-lg border border-zinc-200 bg-white px-6 py-8 text-center shadow-sm transition-shadow hover:shadow-md sm:items-start sm:text-left"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand/10 blur-2xl"
              />

              <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <stat.icon className="h-5 w-5" />
              </div>

              <span className="relative mt-4 bg-gradient-to-r from-brand to-fuchsia-400 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
                <CountUpNumber
                  target={stat.target}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </span>
              <span className="relative mt-1 text-sm text-zinc-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
