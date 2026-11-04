import type { MetadataRoute } from "next";
import { SITE_URL, tools } from "@/lib/site";

/** Indexable pages only: /partners stays out while it's noindexed placeholder content. */
export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = tools.filter((tool) => tool.href).map((tool) => tool.href!);

  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/tools`, changeFrequency: "monthly", priority: 0.8 },
    ...toolPages.map((path) => ({ url: `${SITE_URL}${path}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${SITE_URL}/terms-of-service`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
