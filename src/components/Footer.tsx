import Image from "next/image";
import Link from "next/link";
import { AllSourcedMark } from "./icons";

const SERVICE_LINKS = [
  { label: "Facebook Structures", href: "#services" },
  { label: "Email Marketing", href: "#services" },
  { label: "Google Services", href: "#services" },
  { label: "Fulfillment", href: "#services" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-3">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-zinc-400 transition-colors hover:text-zinc-500"
            >
              <AllSourcedMark className="h-6 w-9" />
              <span className="text-lg font-semibold tracking-tight">
                AllSourced
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              We handle your backend. Ready-to-use e-commerce services, run
              by our team so you do not have to.
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              <span className="font-semibold text-zinc-900">AllSourced</span>
              <br />
              Keizersgracht 520 H
              <br />
              1017 EK Amsterdam
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Services</h3>
            <ul className="mt-4 space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="https://wa.me/31647415437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  +31 6 47415437
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.trustpilot.com/review/allsourced.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  Reviews on Trustpilot
                </Link>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <Image
                src="/badge1.webp"
                alt="GDPR Ready"
                width={64}
                height={100}
                className="h-auto w-14"
              />
              <Image
                src="/badge2.webp"
                alt="Remote Company"
                width={64}
                height={100}
                className="h-auto w-14"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-zinc-200 pt-8 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-4">
            <p className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} AllSourced. All rights
              reserved.
            </p>
            <Link
              href="/terms-of-service"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
            >
              Terms of Service
            </Link>
          </div>

          <Link
            href="https://axisdigital.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 shadow-sm transition-opacity hover:opacity-90"
          >
            <span className="text-xs text-zinc-500">Built by</span>
            <Image
              src="/logo-black.png"
              alt="axisdigital"
              width={72}
              height={18}
            />
          </Link>
        </div>

        <p className="mt-4 text-center text-xs text-zinc-400 sm:text-left">
          Disclaimer: This website is in no way affiliated with, authorized,
          maintained, sponsored or endorsed by Meta Platforms, Inc. or any
          other platform. All images belong to their respective owners.
        </p>
      </div>
    </footer>
  );
}
