import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/** Next replaces (not merges) a parent's openGraph/twitter objects when a page sets its own, so
 * the shared fields, social image included, are repeated in every page's metadata from here. */
const SHARED_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME}: agency ad accounts and Facebook structures for advertisers`,
};

export const sharedOpenGraph = {
  type: "website",
  siteName: SITE_NAME,
  locale: "en_US",
  images: [SHARED_IMAGE],
} satisfies Metadata["openGraph"];

export const sharedTwitter = {
  card: "summary_large_image",
  images: [SHARED_IMAGE.url],
} satisfies Metadata["twitter"];

/**
 * Per-page metadata with everything kept in step: the <title> (the layout's template adds
 * " | AllSourced"), meta description, canonical URL, and the Open Graph / Twitter copies of both,
 * which Next doesn't derive from title/description on its own.
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...sharedOpenGraph, title: fullTitle, description, url: path },
    twitter: { ...sharedTwitter, title: fullTitle, description },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** Structured data for a free, browser-based tool page, so it can show as an app in search. */
export function webApplication({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: `${SITE_URL}${path}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
