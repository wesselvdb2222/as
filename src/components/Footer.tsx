import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "./icons";

const COMPANY_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Cases", href: "#cases" },
  { label: "About", href: "#about" },
];

const SERVICE_LINKS = [
  { label: "Facebook Structures", href: "#services" },
  { label: "Email Marketing", href: "#services" },
  { label: "Google Services", href: "#services" },
  { label: "Fulfillment", href: "#services" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/icon.svg"
                alt="AllSourced"
                width={32}
                height={20}
              />
              <span className="text-lg font-semibold tracking-tight text-foreground">
                AllSourced
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              We handle your backend. Ready-to-use e-commerce services, run
              by our team so you do not have to.
            </p>
            <Link
              href="https://wa.me/31647415437"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-[#a374ff] to-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_8px_20px_-4px_rgba(146,86,255,0.55)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="https://wa.me/31647415437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  +31 6 47415437
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.trustpilot.com/review/allsourced.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Reviews on Trustpilot
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} AllSourced. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
