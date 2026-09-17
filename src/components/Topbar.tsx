"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRightIcon,
  BoxIcon,
  ChevronDownIcon,
  GoogleLogo,
  MailIcon,
  MetaLogo,
  WhatsAppIcon,
} from "./icons";

const SERVICES = [
  {
    icon: MetaLogo,
    iconClassName: "h-6 w-6",
    title: "Meta Services",
    href: "/meta-services",
    description: "Account structures built for scale.",
  },
  {
    icon: GoogleLogo,
    iconClassName: "h-6 w-6",
    title: "Google Services",
    href: "/google-services",
    description: "Search, Shopping & Performance Max.",
  },
  {
    icon: MailIcon,
    iconClassName: "h-5 w-5 text-brand",
    title: "Email Marketing",
    href: "/email-marketing",
    description: "Flows that turn buyers into repeats.",
  },
  {
    icon: BoxIcon,
    iconClassName: "h-5 w-5 text-brand",
    title: "Fulfillment",
    href: "/fulfillment",
    description: "Warehousing, pick, pack & shipping.",
  },
];

const CONTACT_HREF = "https://wa.me/31647415437";

export default function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-border bg-surface/80 px-4 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_16px_40px_-16px_rgba(0,0,0,0.6)] backdrop-blur-md sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image src="/icon-white.png" alt="AllSourced" width={34} height={20} priority />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            AllSourced
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              Services
              <ChevronDownIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-full w-[520px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-surface p-3 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.7)]">
                {SERVICES.map(({ icon: Icon, iconClassName, title, href, description }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.06]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                      <Icon className={iconClassName} />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-foreground">
                        {title}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted">
                        {description}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="#reviews"
            className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            Reviews
          </Link>
        </div>

        <div className="hidden md:block">
          <Link
            href={CONTACT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-[#a374ff] to-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_8px_20px_-4px_rgba(146,86,255,0.55)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Contact us
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M3 3L15 15M15 3L3 15" />
            ) : (
              <path d="M2 5H16M2 9H16M2 13H16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-surface/95 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.7)] backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            <span className="px-2 pb-1 text-xs font-medium uppercase tracking-wide text-muted">
              Services
            </span>
            {SERVICES.map(({ icon: Icon, iconClassName, title, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-md px-2 py-2.5 text-sm text-muted transition-colors hover:bg-white/[0.06] hover:text-foreground"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white">
                  <Icon className={iconClassName} />
                </span>
                {title}
              </Link>
            ))}

            <div className="my-2 border-t border-border" />

            <Link
              href="#reviews"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm text-muted transition-colors hover:bg-white/[0.06] hover:text-foreground"
            >
              Reviews
            </Link>

            <Link
              href={CONTACT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#a374ff] to-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_8px_20px_-4px_rgba(146,86,255,0.55)]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
