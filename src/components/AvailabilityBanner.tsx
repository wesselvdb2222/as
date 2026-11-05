import { WHATSAPP_URL } from "@/lib/site";

const WHATSAPP_PATH =
  "M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm0-21.6A11.8 11.8 0 0 0 1.9 17.9L.2 24l6.3-1.6A11.8 11.8 0 1 0 12 .2Z";

/** Availability call-out above the footer: a bold block with a live status and the WhatsApp CTA. */
export function AvailabilityBanner() {
  return (
    <div className="bg-[#0b0716] px-5 pb-12 pt-4 sm:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-brand/40 bg-gradient-to-r from-brand/35 via-brand/15 to-[#0b0716] shadow-2xl shadow-brand/10">
        {/* light from the left and a faint one top-right */}
        <div aria-hidden className="pointer-events-none absolute -left-24 top-1/2 h-64 w-96 -translate-y-1/2 rounded-full bg-brand/40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-brand-light/15 blur-3xl" />

        <div className="relative flex flex-col gap-5 px-6 py-6 sm:px-8 sm:py-7 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#25D366] shadow-lg shadow-black/30">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
                <path d={WHATSAPP_PATH} />
              </svg>
              <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-[#1c1040] bg-emerald-400" />
              </span>
            </span>
            <div>
              <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">We are available 7 days a week.</p>
              <p className="mt-0.5 text-sm text-white/65">Questions about your accounts or a new setup? Message us on WhatsApp.</p>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-black/30 transition-colors hover:bg-white/90"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#25D366]" aria-hidden>
              <path d={WHATSAPP_PATH} />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
