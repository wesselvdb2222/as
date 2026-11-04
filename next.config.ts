import type { NextConfig } from "next";

/** Deployment of the tools app (Vercel project "allcodes"); TOOLS_ORIGIN overrides it locally,
 * e.g. TOOLS_ORIGIN=http://localhost:3002 to run both apps side by side. */
const TOOLS_ORIGIN = process.env.TOOLS_ORIGIN ?? "https://allcodes-eight.vercel.app";

const nextConfig: NextConfig = {
  // The tools suite (temp mail, SMS, 2FA, wallet) is its own Next.js app ("AllCodes", basePath
  // /tools) that this site serves under /tools (multi-zones). Rewrites run after this site's own
  // routes, so pages that still live here (e.g. /tools/uid-checker) keep winning.
  async redirects() {
    return [{ source: "/tools/2fa-unlock", destination: "/tools/2fa", permanent: true }];
  },
  async rewrites() {
    return [
      { source: "/tools", destination: `${TOOLS_ORIGIN}/tools` },
      { source: "/tools/:path+", destination: `${TOOLS_ORIGIN}/tools/:path+` },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
