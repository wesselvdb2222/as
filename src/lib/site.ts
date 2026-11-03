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
