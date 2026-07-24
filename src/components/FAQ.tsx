"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "./icons";

const FAQS = [
  {
    question: "What services do you offer?",
    answer:
      "Meta Services, Email Marketing, Google Services, and Fulfillment. Everything you need to run your e-commerce backend, handled by one team.",
  },
  {
    question: "How fast can you deliver?",
    answer:
      "It depends on the service. Some products are delivered instantly, others take a few hours. Exact turnaround times are listed on each service page.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Most packages include a warranty or free replacement period. The exact terms are listed with each package, and in full in our Terms of Service.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "We work B2B, so consumer refund rights do not apply. Orders are final once placed, except where a warranty applies to the specific service.",
  },
  {
    question: "Are you affiliated with Meta or Google?",
    answer:
      "No. AllSourced is an independent agency and is not affiliated with, authorized, or endorsed by Meta Platforms, Inc., Google, or any other platform.",
  },
  {
    question: "How do I get started?",
    answer:
      "Message us on WhatsApp with what you need, and we will get you set up from there.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-zinc-100 bg-zinc-50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-10 divide-y divide-zinc-200 rounded-lg border border-zinc-200">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-zinc-50"
                >
                  <span className="text-sm font-semibold text-zinc-900 sm:text-base">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-zinc-400"
                  >
                    <ChevronDownIcon className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-500">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
