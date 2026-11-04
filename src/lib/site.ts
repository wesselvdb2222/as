/** Canonical origin (the bare domain; www doesn't resolve). Used for metadataBase, canonicals,
 * the sitemap and structured data. */
export const SITE_URL = "https://allsourced-agency.com";
export const SITE_NAME = "AllSourced";
export const SITE_DESCRIPTION =
  "Agency ad accounts, Business Managers and complete Facebook structures for Meta advertisers. Amsterdam-based, so a restriction never stops your campaigns.";

export const CONTACT = {
  phone: "+31647415437",
  streetAddress: "Keizersgracht 520 H",
  postalCode: "1017 EK",
  city: "Amsterdam",
  country: "NL",
};

export const TRUSTPILOT_URL = "https://www.trustpilot.com/review/allsourced.nl";

export const WHATSAPP_URL = "https://wa.me/31647415437";

export type ServiceLink = {
  label: string;
  href: string;
  description: string;
  icon: "meta" | "google";
};

export const services: ServiceLink[] = [
  {
    label: "Meta Services",
    href: "/meta-services",
    description: "Account structures, campaign architecture & creative testing.",
    icon: "meta",
  },
  {
    label: "Google Services",
    href: "/google-services",
    description: "Search, Shopping and Performance Max campaigns.",
    icon: "google",
  },
];

export const navLinks: { label: string; href: string }[] = [
  { label: "Partners", href: "/partners" },
];

/** Always shown in the header, unlike navLinks (which sit behind SHOW_NAV_LINKS in the Navbar). */
export const headerLinks: { label: string; href: string }[] = [
  { label: "Services", href: "/#services" },
  { label: "Tools", href: "/tools" },
];

export type Tool = {
  name: string;
  icon: "shield-key" | "user-check";
  description: string;
  /** Where the card links to; without one the card shows as "Coming soon". */
  href?: string;
};

export const tools: Tool[] = [
  {
    name: "2FA Unlock",
    icon: "shield-key",
    description: "Paste your 2FA key and get the 6-digit login code instantly, without an authenticator app.",
    href: "/tools/2fa-unlock",
  },
  {
    name: "UID Checker",
    icon: "user-check",
    description: "Paste a list of Facebook UIDs and instantly see which accounts are live and which are dead.",
    href: "/tools/uid-checker",
  },
];

export type Partner = {
  name: string;
  category: string;
  description: string;
  url?: string;
  /** Path to a logo in /public, e.g. "/partners/acme.svg" */
  logo?: string;
};

// TODO: replace with real partners
export const partners: Partner[] = [
  {
    name: "Partner name",
    category: "Advertising",
    description: "Short description of what this partner does and how you work together.",
  },
  {
    name: "Partner name",
    category: "Payments",
    description: "Short description of what this partner does and how you work together.",
  },
  {
    name: "Partner name",
    category: "E-commerce",
    description: "Short description of what this partner does and how you work together.",
  },
];

/** Page-view beacon endpoint in the Phase CRM; visits show up under AllSourced → Analytics there. */
export const TRACKING_URL = "https://www.phase-hq.com/api/track";
