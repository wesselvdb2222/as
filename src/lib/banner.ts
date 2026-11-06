import { cacheLife } from "next/cache";
import type { SiteBannerData } from "@/lib/banner-format";

// In development, read from the locally running CRM so banner edits can be tried before deploying.
const CRM_ORIGIN = process.env.NODE_ENV === "production" ? "https://manage.allsourced-agency.com" : "http://localhost:3000";
const BANNER_URL = `${CRM_ORIGIN}/api/public/site-banner?brand=allsourced`;

/** The announcement bar's content, managed in the Phase CRM (AllSourced → Website banner).
 * Cached for about a minute, so edits there show up here without a deploy. Any failure just
 * means no bar, never a broken page. */
export async function getSiteBanner(): Promise<SiteBannerData | null> {
  "use cache";
  cacheLife("minutes");
  try {
    const response = await fetch(BANNER_URL);
    if (!response.ok) return null;
    return (await response.json()) as SiteBannerData | null;
  } catch {
    return null;
  }
}
