import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbs, pageMetadata, webApplication } from "@/lib/seo";
import { UidChecker } from "./UidChecker";

const TITLE = "Facebook UID Checker: Bulk Check Live or Dead";
const DESCRIPTION =
  "Paste a list of Facebook UIDs and see which accounts are live and which are deleted or disabled. Free bulk checker, no Facebook login, results ready to copy.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/tools/uid-checker" });

export default function UidCheckerPage() {
  return (
    <main className="flex flex-1 flex-col bg-gradient-to-b from-black to-[#0b0716]">
      <JsonLd data={webApplication({ name: "UID Checker", description: DESCRIPTION, path: "/tools/uid-checker" })} />
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
          { name: "UID Checker", path: "/tools/uid-checker" },
        ])}
      />
      <section className="px-5 pb-28 pt-44 sm:px-8 sm:pt-52">
        <div className="mx-auto max-w-4xl">
          <a href="/tools" className="text-sm text-white/50 transition-colors hover:text-white">
            <span aria-hidden>←</span> All tools
          </a>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">UID Checker</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            Paste a list of Facebook UIDs and see which accounts are still live and which are deleted, disabled
            or banned. Results are split into two lists you can copy straight away.
          </p>

          <div className="mt-10">
            <UidChecker />
          </div>

          <p className="mt-6 text-sm leading-relaxed text-white/40">
            Checks run in your browser against Facebook&apos;s public profile endpoint. No Facebook login needed,
            and your list isn&apos;t sent to us.
          </p>
        </div>
      </section>
    </main>
  );
}
