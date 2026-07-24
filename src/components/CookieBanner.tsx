"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "allsourced-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 700);
    return () => clearTimeout(timer);
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-6 left-6 z-50 w-[calc(100%-3rem)] max-w-sm rounded-lg border border-white/10 bg-background p-5 shadow-xl"
        >
          <p className="text-sm leading-relaxed text-muted">
            We use cookies to improve your experience and understand how our
            site is used. See our{" "}
            <Link
              href="/terms-of-service"
              className="text-brand underline underline-offset-2 hover:text-fuchsia-400"
            >
              Terms of Service
            </Link>{" "}
            for details.
          </p>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => handleChoice("accepted")}
              className="flex-1 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => handleChoice("declined")}
              className="flex-1 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
