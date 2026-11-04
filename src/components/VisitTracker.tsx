"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { TRACKING_URL } from "@/lib/site";

/** Reports each page view (including client-side navigations) to the CRM. Cookieless: nothing is
 * stored on the visitor's device; the CRM derives a daily visitor hash from IP + user agent. */
export function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    const body = JSON.stringify({ brand: "allsourced", path: pathname, referrer: document.referrer });
    navigator.sendBeacon(TRACKING_URL, body);
  }, [pathname]);

  return null;
}
