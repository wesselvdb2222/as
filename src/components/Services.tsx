"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRightIcon, BoxIcon, GoogleLogo, MailIcon, MetaLogo } from "./icons";
import WorldMapBackground from "./WorldMapBackground";

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
    <section id="services" className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 px-6 py-16 sm:px-12 sm:py-20">
          <WorldMapBackground variant="card" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Our services
              </h2>
              <p className="mt-4 text-lg text-muted">
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
                    className="relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-surface transition-colors hover:bg-[#14141e]"
                  >
                    <div className="relative flex h-32 shrink-0 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-b from-black/25 to-black/5">
                      <div
                        aria-hidden
                        className="absolute inset-0 [background:radial-gradient(circle_at_50%_50%,rgba(146,86,255,0.18),transparent_70%)]"
                      />
                      <motion.div
                        aria-hidden
                        className="absolute h-24 w-24 rounded-full bg-brand/25 blur-2xl"
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

                    <div className="flex flex-1 flex-col p-8">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground">
                          {title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
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
                        className="mt-6 inline-flex items-center gap-1.5 self-start rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
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
