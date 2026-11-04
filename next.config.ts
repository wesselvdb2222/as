import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The tools (temp mail, SMS, 2FA) moved to their own app at tools.allsourced-agency.com.
  async redirects() {
    return [
      { source: "/tools", destination: "https://tools.allsourced-agency.com", permanent: true },
      { source: "/tools/2fa-unlock", destination: "https://tools.allsourced-agency.com/2fa", permanent: true },
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
