import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Indexable pages only: /partners stays out while it's noindexed placeholder content. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/terms-of-service`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
