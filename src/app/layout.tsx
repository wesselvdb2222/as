import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { VisitTracker } from "@/components/VisitTracker";
import { sharedOpenGraph, sharedTwitter } from "@/lib/seo";
import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SITE_URL, TRUSTPILOT_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DEFAULT_TITLE = `${SITE_NAME} | Agency Ad Accounts & Facebook Structures`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: { ...sharedOpenGraph, url: "/", title: DEFAULT_TITLE, description: SITE_DESCRIPTION },
  twitter: { ...sharedTwitter, title: DEFAULT_TITLE, description: SITE_DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
  // favicon.ico itself is picked up from src/app; these add the sharper SVG/PNG versions.
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

/** Site-wide structured data: who we are (with address and reviews profile) and the site itself. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/web-app-manifest-512x512.png`,
      description: SITE_DESCRIPTION,
      telephone: CONTACT.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT.streetAddress,
        postalCode: CONTACT.postalCode,
        addressLocality: CONTACT.city,
        addressCountry: CONTACT.country,
      },
      sameAs: [TRUSTPILOT_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={organizationJsonLd} />
        <Navbar />
        {children}
        <Footer />
        <Suspense>
          <VisitTracker />
        </Suspense>
      </body>
    </html>
  );
}
