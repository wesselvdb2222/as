import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbs, pageMetadata } from "@/lib/seo";
import { tools } from "@/lib/site";
import { ToolIcon } from "@/components/ToolIcon";

export const metadata: Metadata = pageMetadata({
  title: "Free Tools for Facebook Advertisers",
  description:
    "Free browser tools for Meta advertisers: generate 2FA login codes from a key and bulk-check which Facebook UIDs are live or dead. No sign-up needed.",
  path: "/tools",
});

const cardClass = "flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.03] p-6";

export default function ToolsPage() {
  return (
    <main className="flex flex-1 flex-col bg-gradient-to-b from-black to-[#0b0716]">
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
        ])}
      />
      {/* Tool grid */}
      <section className="px-5 pb-28 pt-44 sm:px-8 sm:pt-52">
        <h1 className="mx-auto mb-10 max-w-6xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">Tools</h1>
        <ul className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const body = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand-light">
                  <ToolIcon icon={tool.icon} />
                </span>
                <h2 className="mt-6 text-lg font-semibold text-white">{tool.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{tool.description}</p>
                <p className="mt-6 text-sm font-semibold text-brand-light">
                  {tool.href ? (
                    <>
                      Open tool <span aria-hidden>→</span>
                    </>
                  ) : (
                    "Coming soon"
                  )}
                </p>
              </>
            );

            return (
              <li key={tool.name}>
                {tool.href ? (
                  <Link
                    href={tool.href}
                    className={`${cardClass} transition-colors hover:border-white/20 hover:bg-white/[0.06]`}
                  >
                    {body}
                  </Link>
                ) : (
                  <div className={cardClass}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
