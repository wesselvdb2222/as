import Image from "next/image";
import Link from "next/link";
import { TOOLS_URL, TRUSTPILOT_URL, WHATSAPP_URL } from "@/lib/site";
import { AvailabilityBanner } from "./AvailabilityBanner";
import { HiddenOn } from "./HiddenOn";
import { CurrentYear } from "./CurrentYear";

const CONTACT_ITEMS = [
  {
    label: "WhatsApp, 7 days a week",
    value: "Chat with us",
    href: WHATSAPP_URL,
    external: true,
    icon: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  },
  {
    label: "Email",
    value: "support@allsourced-agency.com",
    href: "mailto:support@allsourced-agency.com",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: "Phone",
    value: "+31 6 47415437",
    href: "tel:+31647415437",
    icon: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />,
  },
  {
    label: "Office",
    value: "Keizersgracht 520 H, 1017 EK Amsterdam",
    href: "https://www.google.com/maps/search/?api=1&query=Keizersgracht+520+H,+1017+EK+Amsterdam",
    external: true,
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

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
                    href="/blog"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white">Contact</h3>
              <ul className="mt-4 space-y-4 text-sm">
                {CONTACT_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="group flex items-start gap-3"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-brand-light transition-colors group-hover:border-brand/40 group-hover:bg-brand/10">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                          {item.icon}
                        </svg>
                      </span>
                      <span className="leading-snug">
                        <span className="block text-xs text-white/40">{item.label}</span>
                        <span className="block text-white/75 transition-colors group-hover:text-white">{item.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/40">
            <div className="max-w-xl rounded-md border border-white/15 bg-black px-3 py-2 text-white/70">
              <p className="font-medium text-white/80">
                © <CurrentYear /> AllSourced. All rights reserved.
              </p>
              <p className="mt-1">
                We are not affiliated with any social media platform or Meta Platforms, Inc. Meta, Facebook and
                Instagram are trademarks of Meta Platforms, Inc.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
