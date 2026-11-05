import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/site";
import { TrustpilotRating } from "./TrustpilotRating";

/** Large purple swoosh echoing the curve in the AllSourced logo. */
function HeroSwoosh() {
  const swoosh =
    "M-80 1000 C 420 800, 900 640, 1520 600 L 1520 700 C 960 700, 480 820, -80 1000 Z";
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full [mask-image:linear-gradient(to_bottom,black_65%,transparent)]"
    >
      <defs>
        <linearGradient id="swoosh-fill" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c5cf5" stopOpacity="0" />
          <stop offset="45%" stopColor="#7c5cf5" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#9b82ff" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="swoosh-edge" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.45" />
        </linearGradient>
        <filter id="swoosh-glow" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="60" />
        </filter>
      </defs>

      {/* soft glow underneath */}
      <path d={swoosh} fill="#7c5cf5" opacity="0.5" filter="url(#swoosh-glow)" />
      {/* the band itself */}
      <path d={swoosh} fill="url(#swoosh-fill)" />
      {/* bright top edge */}
      <path
        d="M-80 1000 C 420 800, 900 640, 1520 600"
        fill="none"
        stroke="url(#swoosh-edge)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section data-section="hero" className="relative isolate overflow-hidden bg-gradient-to-b from-black via-[#0b0716] to-[#160c33] px-5 pb-16 pt-44 sm:px-8 sm:pb-20 sm:pt-52">
      <HeroSwoosh />

      <div className="mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Trusted by 850+ digital businesses
        </div>

        <h1 className="mt-7 text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Agency ad accounts
          <br />
          <span className="text-white/50">that keep your Meta ads running.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          Restricted accounts and blocked campaigns shouldn&apos;t stop your growth. AllSourced
          runs your Meta and Google advertising backend, so you can focus on your brand
          instead of your stack.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-brand-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto"
          >
            Chat on WhatsApp
          </a>
          <Link
            href="#services"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            View services <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Rating */}
        <div className="mt-8 flex justify-center">
          <TrustpilotRating />
        </div>
      </div>

    </section>
  );
}
