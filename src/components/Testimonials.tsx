"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "./icons";

const REVIEWS = [
  {
    title: "Great Service",
    date: "Jan 28, 2025",
    quote: "Great products, quick communication and fantastic service. 5/5.",
    name: "Thijs Bastiaans",
  },
  {
    title: "Amazing experience with this agency",
    date: "Aug 5, 2024",
    quote:
      "Amazing experience with this agency. Got my stuff sorted out really quick. Communication is key for me, and they def. have this on point.",
    name: "Jonathan Agba",
  },
  {
    title: "Great assets & service",
    date: "Oct 23, 2024",
    quote:
      "Great products, with very good service. I would highly recommend buying assets from these guys. :)",
    name: "Hens Boer",
  },
  {
    title: "Very satisfied about their services",
    date: "Aug 3, 2024",
    quote:
      "Very satisfied about their services. They sourced my FB ad account and this process went really smooth. Greatly recommended!",
    name: "Eef van de Voort",
  },
];

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: direction * 300, behavior: "smooth" });
  };

  return (
    <section
      id="reviews"
      className="border-t border-zinc-100 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          What clients say about us
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-center"
        >
          <div className="flex shrink-0 flex-col items-center gap-3 text-center lg:w-56 lg:items-start lg:text-left">
            <p className="text-2xl font-semibold text-zinc-900">Excellent</p>
            <Image
              src="/trustpilot-stars-5.svg"
              alt="5 stars"
              width={140}
              height={26}
            />
            <p className="text-sm text-zinc-500">
              Based on{" "}
              <span className="font-semibold text-zinc-900 underline underline-offset-2">
                51 reviews
              </span>
            </p>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-900">
              <StarIcon className="h-3.5 w-3.5 shrink-0 text-[#00b67a]" />
              Trustpilot
            </div>

            <div className="mt-4 hidden gap-2 lg:flex">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous reviews"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-900 transition-colors hover:bg-zinc-50"
              >
                <ArrowLeftIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next reviews"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-900 transition-colors hover:bg-zinc-50"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex flex-1 snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="flex w-72 shrink-0 snap-start flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <Image
                    src="/trustpilot-stars-5.svg"
                    alt="5 stars"
                    width={88}
                    height={16}
                  />
                  <span className="shrink-0 text-xs text-zinc-500">
                    {review.date}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-zinc-900">
                  {review.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
                  {review.quote}
                </p>
                <p className="mt-4 text-sm font-medium text-zinc-900">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="https://www.trustpilot.com/review/allsourced.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand transition-colors hover:text-fuchsia-400"
          >
            Read all reviews on Trustpilot &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
