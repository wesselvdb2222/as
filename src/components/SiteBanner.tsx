import Link from "next/link";
import { parseBannerMessage, type SiteBannerData } from "@/lib/banner-format";

const STYLES: Record<SiteBannerData["variant"], { bar: string; button: string }> = {
  warning: { bar: "bg-red-600 text-white", button: "bg-white text-red-700 hover:bg-white/90" },
  offer: {
    bar: "bg-gradient-to-r from-brand via-brand-light to-brand text-white",
    button: "bg-white text-[#5b3fd6] hover:bg-white/90",
  },
  info: { bar: "border-b border-white/10 bg-[#0b0716] text-white/80", button: "bg-white/10 text-white hover:bg-white/15" },
};

const ICONS: Record<SiteBannerData["variant"], React.ReactNode> = {
  warning: (
    <path
      fillRule="evenodd"
      d="M8.5 3.3a1.7 1.7 0 0 1 3 0l6 10.6A1.7 1.7 0 0 1 16 16.5H4a1.7 1.7 0 0 1-1.5-2.6l6-10.6ZM10 7a.8.8 0 0 0-.8.8v3.4a.8.8 0 0 0 1.6 0V7.8A.8.8 0 0 0 10 7Zm0 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      clipRule="evenodd"
    />
  ),
  offer: <path d="M10 2l1.6 4.4L16 8l-4.4 1.6L10 14l-1.6-4.4L4 8l4.4-1.6L10 2Zm5.5 9.5.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />,
  info: (
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.9-11.6a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM9.2 9.2a.8.8 0 0 1 1.6 0v4.2a.8.8 0 0 1-1.6 0V9.2Z"
      clipRule="evenodd"
    />
  ),
};

/** Announcement bar above the navbar; its text and layout come from the CRM (see lib/banner.ts). */
export function SiteBanner({ banner }: { banner: SiteBannerData }) {
  const style = STYLES[banner.variant] ?? STYLES.info;
  const external = banner.linkUrl?.startsWith("http");

  return (
    <div role={banner.variant === "warning" ? "alert" : undefined} className={style.bar}>
      <p className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 py-2 text-center text-xs font-medium sm:px-8 sm:text-sm">
        <svg viewBox="0 0 20 20" fill="currentColor" className="hidden h-4 w-4 shrink-0 sm:block" aria-hidden>
          {ICONS[banner.variant] ?? ICONS.info}
        </svg>
        <span>
          {parseBannerMessage(banner.message).map((part, index) =>
            part.bold ? (
              <strong key={index} className="font-semibold">
                {part.text}
              </strong>
            ) : (
              <span key={index}>{part.text}</span>
            )
          )}
        </span>
        {banner.linkLabel && banner.linkUrl && (
          <Link
            href={banner.linkUrl}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className={`rounded-full px-3 py-0.5 text-xs font-semibold transition-colors ${style.button}`}
          >
            {banner.linkLabel}
          </Link>
        )}
      </p>
    </div>
  );
}
