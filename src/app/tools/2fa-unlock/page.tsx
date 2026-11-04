import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbs, pageMetadata, webApplication } from "@/lib/seo";
import { TwoFactorGenerator } from "./TwoFactorGenerator";

const TITLE = "2FA Code Generator: Get Your 6-Digit Login Code";
const DESCRIPTION =
  "Paste your 2FA secret key and instantly get the 6-digit authentication code, just like Google Authenticator. Free, no sign-up, and calculated in your browser.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/tools/2fa-unlock" });

export default function TwoFactorUnlockPage() {
  return (
    <main className="flex flex-1 flex-col bg-gradient-to-b from-black to-[#0b0716]">
      <JsonLd data={webApplication({ name: "2FA Unlock", description: DESCRIPTION, path: "/tools/2fa-unlock" })} />
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
          { name: "2FA Unlock", path: "/tools/2fa-unlock" },
        ])}
      />
      <section className="px-5 pb-28 pt-44 sm:px-8 sm:pt-52">
        <div className="mx-auto max-w-2xl">
          <Link href="/tools" className="text-sm text-white/50 transition-colors hover:text-white">
            <span aria-hidden>←</span> All tools
          </Link>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">2FA Unlock</h1>
          <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
            Paste your 2FA key and click Generate to get the 6-digit code you need to log in, just like an
            authenticator app.
          </p>

          <div className="mt-10">
            <TwoFactorGenerator />
          </div>

          <p className="mt-6 text-sm leading-relaxed text-white/40">
            Never share your 2FA key outside of AllSourced.
          </p>
        </div>
      </section>
    </main>
  );
}
