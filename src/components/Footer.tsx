import Image from "next/image";
import Link from "next/link";
import { TOOLS_URL, TRUSTPILOT_URL } from "@/lib/site";
import { AvailabilityBanner } from "./AvailabilityBanner";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <>
      <AvailabilityBanner />

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
                We handle your backend, so you can focus on your brand.
              </p>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href={TOOLS_URL}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Partners
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
              This site is not affiliated with or endorsed by Meta Platforms,
              Inc. or any other platform.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
