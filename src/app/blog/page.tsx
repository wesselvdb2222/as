import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { BLOG_POSTS, formatPostDate } from "@/lib/blog";
import { breadcrumbs, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Guides on Meta advertising: agency ad accounts, ad account restrictions, Business Manager security and more from the AllSourced team.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="flex flex-1 flex-col bg-gradient-to-b from-black to-[#0b0716]">
      <JsonLd data={breadcrumbs([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <div className="mx-auto w-full max-w-4xl px-5 pb-24 pt-44 sm:px-8 sm:pt-52">
        <p className="text-sm font-semibold text-brand-light">Blog</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Guides for Meta advertisers</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
          Practical articles on agency ad accounts, ad account restrictions and keeping your Facebook and Instagram ads
          running.
        </p>

        <ul className="mt-12 space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-6 transition-colors hover:border-brand/40"
              >
                <p className="text-xs text-white/40">
                  {formatPostDate(post.date)} · {post.readingMinutes} min read
                </p>
                <h2 className="mt-2 text-lg font-semibold text-white transition-colors group-hover:text-brand-light sm:text-xl">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{post.description}</p>
                <p className="mt-4 text-sm font-medium text-brand-light">Read article</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
