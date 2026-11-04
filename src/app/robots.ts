import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // /tools/* is the tools app (its own sitemap); keep its private and machine-only paths out.
    rules: { userAgent: "*", allow: "/", disallow: ["/tools/api/", "/tools/auth/", "/tools/wallet"] },
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/tools/sitemap.xml`],
    host: SITE_URL,
  };
}
