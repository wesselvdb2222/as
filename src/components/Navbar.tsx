"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { SiteBannerData } from "@/lib/banner-format";
import { headerLinks, navLinks, services, TOOLS_URL, WHATSAPP_URL } from "@/lib/site";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { SiteBanner } from "./SiteBanner";
import { ServiceIcon } from "./ServiceIcon";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm0-21.6A11.8 11.8 0 0 0 1.9 17.9L.2 24l6.3-1.6A11.8 11.8 0 1 0 12 .2Z" />
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Temporarily hidden: set to true to show Services + Partners again.
const SHOW_NAV_LINKS = false;

function HeaderLinks() {
  const className = "rounded-md px-2 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white sm:px-3";
  return headerLinks.map((l) =>
    // /tools is served by the tools app (another zone): a plain link so the browser loads it fully.
    l.href.startsWith(TOOLS_URL) ? (
      <a key={l.href} href={l.href} className={className}>
        {l.label}
      </a>
    ) : (
      <Link key={l.href} href={l.href} className={className}>
        {l.label}
      </Link>
    )
  );
}

export function Navbar({ banner }: { banner: SiteBannerData | null }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Glass background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setServicesOpen(false);
    setMobileOpen(false);
  }

  // Close dropdown on outside click / Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const serviceActive = services.some((s) => pathname.startsWith(s.href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-black transition-colors duration-300 ${
        scrolled || mobileOpen ? "border-white/10" : "border-transparent"
      }`}
    >
      {banner && <SiteBanner banner={banner} />}

      <nav
        aria-label="Main"
        className="relative mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        {/* Logo */}
        <Link href="/" aria-label="AllSourced home" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/allsourced-icon.png"
            alt=""
            width={1637}
            height={961}
            priority
            className="h-7 w-auto sm:h-8"
          />
          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-tight text-white sm:text-xl">
              AllSourced
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
              Agency
            </span>
          </span>
        </Link>

        {/* Always-visible links, centered in the bar on desktop */}
        {!SHOW_NAV_LINKS && (
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
            <HeaderLinks />
          </div>
        )}

        {/* Desktop links */}
        {SHOW_NAV_LINKS && (
        <ul className="hidden items-center gap-1 md:flex">
          <li
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((o) => !o)}
              className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-white ${
                servicesOpen || serviceActive ? "text-white" : "text-white/70"
              }`}
            >
              Services
              <Chevron open={servicesOpen} />
            </button>

            <div
              id="services-menu"
              className={`absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-ink-soft/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand-light transition-colors group-hover:bg-brand group-hover:text-white">
                      <ServiceIcon icon={s.icon} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">{s.label}</span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-white/55">
                        {s.description}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        )}

        {/* Desktop CTA */}
        <div className={SHOW_NAV_LINKS ? "hidden md:block" : "flex items-center gap-1 sm:gap-2"}>
          {!SHOW_NAV_LINKS && (
            <div className="flex items-center md:hidden">
              <HeaderLinks />
            </div>
          )}
          <div className="hidden sm:block">
            <CurrencySwitcher />
          </div>
          <a
            href={WHATSAPP_URL}
            aria-label="Contact us"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-brand px-3.5 py-2 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-brand-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <WhatsAppIcon />
            <span className={SHOW_NAV_LINKS ? undefined : "hidden sm:inline"}>Contact us</span>
          </a>
        </div>

        {/* Mobile toggle */}
        {SHOW_NAV_LINKS && (
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((o) => !o)}
          className="relative flex h-10 w-10 items-center justify-center rounded-md text-white md:hidden"
        >
          <span
            className={`absolute h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
              mobileOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
              mobileOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
        )}
      </nav>

      {/* Mobile menu */}
      {SHOW_NAV_LINKS && (
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
          mobileOpen ? "max-h-[calc(100dvh-8rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex h-[calc(100dvh-8rem)] flex-col overflow-y-auto px-5 pb-8 pt-2">
          <button
            type="button"
            aria-expanded={mobileServicesOpen}
            onClick={() => setMobileServicesOpen((o) => !o)}
            className="flex items-center justify-between border-b border-white/10 py-4 text-lg font-medium text-white"
          >
            Services
            <Chevron open={mobileServicesOpen} />
          </button>
          <div
            className={`grid transition-[grid-template-rows] duration-300 ${
              mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col gap-1 py-2">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-3 rounded-xl p-3 text-white/80 hover:bg-white/5"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 text-brand-light">
                      <ServiceIcon icon={s.icon} />
                    </span>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-white/10 py-4 text-lg font-medium text-white"
            >
              {l.label}
            </Link>
          ))}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-4 py-3 font-semibold text-white shadow-xs transition-colors hover:bg-brand-light"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
      )}
    </header>
  );
}
