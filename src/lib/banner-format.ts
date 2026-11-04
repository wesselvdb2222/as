/** Shape of the CRM's /api/public/site-banner response; safe to import from client components. */
export type SiteBannerData = {
  variant: "warning" | "offer" | "info";
  message: string;
  linkLabel: string | null;
  linkUrl: string | null;
};

/** Same parser as the CRM preview: **double asterisks** mark bold runs. */
export function parseBannerMessage(message: string): { text: string; bold: boolean }[] {
  return message
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part) => (part.startsWith("**") && part.endsWith("**") ? { text: part.slice(2, -2), bold: true } : { text: part, bold: false }));
}
