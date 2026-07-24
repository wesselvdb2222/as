"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { CheckIcon, WhatsAppIcon } from "./icons";

export type ServicePackage = {
  name: string;
  subtitle?: string;
  price: string;
  tag?: string;
  includes: string[];
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function PackageGrid({
  packages,
}: {
  packages: ServicePackage[];
}) {
  if (packages.length === 0) return null;

  return (
    <section className="border-t border-zinc-100 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
        >
          Packages
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={item}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-lg border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                {pkg.name}
              </h3>
              {pkg.subtitle && (
                <p className="mt-1 text-sm text-zinc-500">{pkg.subtitle}</p>
              )}
              <p className="mt-4 text-3xl font-semibold text-zinc-900">
                {pkg.price}
              </p>
              {pkg.tag && (
                <span className="mt-2 inline-flex w-fit items-center rounded-full bg-gradient-to-b from-[#3d2266] to-[#1a0f30] px-3 py-1 text-xs font-semibold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_4px_10px_-2px_rgba(146,86,255,0.4)]">
                  {pkg.tag}
                </span>
              )}

              <ul className="mt-6 flex-1 space-y-3">
                {pkg.includes.map((line) => (
                  <li
                    key={line}
                    className="flex items-center gap-2 text-sm text-zinc-900"
                  >
                    <CheckIcon className="h-4 w-4 shrink-0 text-brand" />
                    {line}
                  </li>
                ))}
              </ul>

              <Link
                href={`https://wa.me/31647415437?text=${encodeURIComponent(
                  `Hi, I'm interested in the ${pkg.name} package.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#a374ff] to-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_8px_20px_-4px_rgba(146,86,255,0.55)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Order on WhatsApp
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
