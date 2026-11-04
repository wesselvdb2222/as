"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { TRACKING_URL } from "@/lib/site";

const BRAND = "allsourced";

function send(event: Record<string, string>) {
  navigator.sendBeacon(TRACKING_URL, JSON.stringify({ brand: BRAND, ...event }));
}

/** Where a clicked element sits, so the same button in two places (e.g. "Chat on WhatsApp" in
 * the navbar and the hero) shows up as two rows in the CRM. */
function sectionOf(element: Element) {
  if (element.closest("header, nav")) return "navbar";
  if (element.closest("footer")) return "footer";
  const section = element.closest<HTMLElement>("[data-section], section[id]");
  return section?.dataset.section ?? section?.id ?? null;
}

/** Reports page views (including client-side navigations) and clicks on any link — or any element
 * marked `data-track="Label"` — to the CRM. Cookieless: nothing is stored on the visitor's device;
 * the CRM derives a daily visitor hash from IP + user agent. */
export function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    send({ path: pathname, referrer: document.referrer });
  }, [pathname]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    function onClick(event: MouseEvent) {
      const target = (event.target as Element | null)?.closest<HTMLElement>("a[href], [data-track]");
      if (!target) return;

      const label =
        target.dataset.track ?? target.getAttribute("aria-label") ?? target.innerText.replace(/[→←↗›»]/g, "").replace(/\s+/g, " ").trim();
      if (!label) return;

      const click: Record<string, string> = { type: "click", path: window.location.pathname, label: label.slice(0, 100) };
      const href = target.getAttribute("href");
      if (href) click.href = href;
      const section = sectionOf(target);
      if (section) click.section = section;
      send(click);
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
