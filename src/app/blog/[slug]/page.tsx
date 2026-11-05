import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { BLOG_POSTS, formatPostDate, getPost } from "@/lib/blog";
import { breadcrumbs, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/site";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const base = pageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}` });
  return { ...base, openGraph: { ...base.openGraph, type: "article", publishedTime: post.date } };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;

  return (
    <main className="flex flex-1 flex-col bg-gradient-to-b from-black to-[#0b0716]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          mainEntityOfPage: `${SITE_URL}${path}`,
          author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        }}
      />
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ])}
      />

      <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-44 sm:px-8 sm:pt-52">
        <Link href="/blog" className="text-sm font-semibold text-brand-light hover:text-white">
          Blog
        </Link>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-sm text-white/50">
          {formatPostDate(post.date)} · {post.readingMinutes} min read
        </p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-white/65">
          {post.sections.map((section, index) => (
            <section key={section.heading ?? index}>
              {section.heading && <h2 className="mb-3 text-xl font-semibold text-white">{section.heading}</h2>}
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-3 first:mt-0">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-brand/30 bg-brand/10 p-6">
          <p className="text-lg font-semibold text-white">Need agency ad accounts?</p>
          <p className="mt-1 text-sm text-white/60">Live within 24 hours. Message us on WhatsApp and we&apos;ll set you up.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-white/90"
          >
            Chat on WhatsApp
          </a>
        </div>
      </article>
    </main>
  );
}
