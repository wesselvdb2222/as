import Image from "next/image";
import Link from "next/link";
import { TOOLS_URL, TRUSTPILOT_URL } from "@/lib/site";
import { AvailabilityBanner } from "./AvailabilityBanner";
import { HiddenOn } from "./HiddenOn";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <>
      {/* /partners ends with its own "Become a partner" line; one WhatsApp prompt is enough there. */}
      <HiddenOn paths={["/partners"]}>
        <AvailabilityBanner />
      </HiddenOn>

      <footer id="contact" className="border-t border-white/10 bg-[#0b0716]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <Link
                href="/"
                aria-label="AllSourced home"
                className="inline-flex items-center gap-2.5"
              >
                <Image
                  src="/allsourced-icon.png"
                  alt=""
                  width={1637}
                  height={961}
                  className="h-7 w-auto"
                />
                <span className="leading-tight">
                  <span className="block text-lg font-semibold tracking-tight text-white">
                    AllSourced
                  </span>
                  <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
                    Agency
                  </span>
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
                We handle your backend, so you can focus on optimizing your marketing.
              </p>
              <a
                href="mailto:support@allsourced-agency.com"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-brand-light" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                support@allsourced-agency.com
              </a>
              {/* AllSourced is a Meta Business Partner. TODO: link the badge to our listing in Meta's
                  partner directory (facebook.com/business/marketing-partners) once we have the URL. */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Image
                  src="/partners/badge-dark.png"
                  alt="Meta Business Partner"
                  width={774}
                  height={444}
                  className="h-16 w-auto"
                />
                <a href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer" aria-label="Rated Excellent on Trustpilot">
                  <Image src="/partners/trustpilot-excellent.png" alt="Trustpilot: Excellent" width={298} height={356} className="h-16 w-auto" />
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={TOOLS_URL}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Tools
                  </a>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Deals
                  </Link>
                </li>
                <li>
                  <a
                    href={TRUSTPILOT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Reviews on Trustpilot
                  </a>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>
                  <a
                    href="tel:+31647415437"
                    className="transition-colors hover:text-white"
                  >
                    +31 6 47415437
                  </a>
                </li>
                <li>
                  <address className="not-italic leading-relaxed">
                    Keizersgracht 520 H
                    <br />
                    1017 EK Amsterdam
                  </address>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
            <p>
              © <CurrentYear /> AllSourced. All rights reserved.
            </p>
            <p className="max-w-xl md:text-right">
              Meta, Facebook and Instagram are trademarks of Meta Platforms, Inc.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
