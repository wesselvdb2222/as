"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRightIcon,
  BoxIcon,
  GoogleLogo,
  MailIcon,
  MetaLogo,
  SparkleIcon,
} from "./icons";

const SERVICES = [
  {
    icon: MetaLogo,
    iconClassName: "h-9 w-9",
    title: "Meta Services",
    href: "/meta-services",
    description:
      "Proven account structures built for scale, from campaign architecture to creative testing frameworks.",
  },
  {
    icon: MailIcon,
    iconClassName: "h-7 w-7 text-brand",
    title: "Email Marketing",
    href: "/email-marketing",
    description:
      "Automated flows and campaigns that turn one time buyers into repeat customers.",
  },
  {
    icon: GoogleLogo,
    iconClassName: "h-7 w-7",
    title: "Google Services",
    href: "/google-services",
    description:
      "Search, Shopping, and Performance Max campaigns engineered for profitable growth.",
  },
  {
    icon: BoxIcon,
    iconClassName: "h-7 w-7 text-brand",
    title: "Fulfillment",
    href: "/fulfillment",
    description:
      "Warehousing, pick and pack, and shipping handled end to end, so orders reach customers on time.",
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

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a0f30] via-[#0d0716] to-background px-6 py-16 sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand/30 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-fuchsia-400/20 blur-[120px]"
          />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="mx-auto flex max-w-2xl flex-col items-center text-center"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-brand/15 to-brand/25 px-4 py-1.5 text-xs font-semibold text-brand shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset,0_4px_12px_-2px_rgba(146,86,255,0.35)] ring-1 ring-brand/20">
                <SparkleIcon className="h-3.5 w-3.5" />
                Our Services
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Our services
              </h2>
              <p className="mt-4 text-lg text-white/60">
                Ready-to-use e-commerce services, run by our team so you do
                not have to.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {SERVICES.map(
                ({ icon: Icon, iconClassName, title, href, description }, i) => (
                  <motion.div
                    key={title}
                    variants={item}
                    whileHover={{ y: -6 }}
                    className="relative flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] shadow-xl backdrop-blur-sm transition-colors hover:bg-white/[0.1]"
                  >
                    <div className="relative flex h-32 shrink-0 items-center justify-center overflow-hidden">
                      <motion.div
                        aria-hidden
                        className="absolute h-24 w-24 rounded-full bg-brand/30 blur-2xl"
                        animate={{
                          opacity: [0.3, 0.7, 0.3],
                          scale: [0.85, 1.15, 0.85],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.5,
                        }}
                      />
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg ring-1 ring-black/5">
                        <Icon className={iconClassName} />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col border-t border-white/10 p-8">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white">
                          {title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">
                          {description}
                        </p>
                      </div>
                      <Link
                        href={
                          href ??
                          `https://wa.me/31647415437?text=${encodeURIComponent(
                            `Hi, I'm interested in ${title}.`,
                          )}`
                        }
                        {...(!href && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        className="mt-6 inline-flex items-center justify-center gap-1.5 self-start rounded-full bg-gradient-to-b from-[#a374ff] to-brand px-4 py-2 text-sm font-semibold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_14px_-2px_rgba(146,86,255,0.55)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
                      >
                        Our Services
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ),
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
