import type { MetadataRoute } from "next";

const SITE_URL = "https://allsourced.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/meta-services",
    "/email-marketing",
    "/google-services",
    "/fulfillment",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
