import { WHATSAPP_URL } from "@/lib/site";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
  "aria-hidden": true,
};

const STEPS = [
  {
    title: "Join",
    text: "Message us on WhatsApp to become an affiliate partner.",
    icon: (
      <svg {...iconProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
  },
  {
    title: "Introduce",
    text: "Have a client for us? We start a WhatsApp group with you, the client and our team.",
    icon: (
      <svg {...iconProps}>
        <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
      </svg>
    ),
  },
  {
    title: "Earn",
    text: "Earn up to 30% commission on the clients you refer.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

/** Affiliate programme call-out: three steps and a WhatsApp CTA. */
export function AffiliateSection() {
  return (
    <section data-section="affiliate" className="bg-[#0b0716] px-5 py-14 sm:px-8 sm:py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-brand/40 bg-gradient-to-br from-brand/30 via-brand/10 to-black p-6 shadow-2xl shadow-brand/10 sm:p-10">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-light/20 blur-3xl" />

        <div className="relative">
          <div>
            <span className="inline-flex rounded-md border border-brand/40 bg-brand/15 px-2.5 py-1 text-xs font-semibold text-brand-light">
              Affiliate program
            </span>
            <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              Become an affiliate partner and earn up to 30% commission
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
              Know advertisers who need stable ad accounts? Introduce them to us in a WhatsApp group and earn a commission
              on every client you bring in.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-black/30 transition-colors hover:bg-white/90"
            >
              Become a partner
            </a>
          </div>

          <ol className="mt-10 grid gap-3 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4 rounded-xl border border-white/10 bg-black/40 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand/40 bg-brand/15 text-brand-light">
                  {step.icon}
                </span>
                <div>
                  <p className="flex items-baseline gap-2">
                    <span className="font-mono text-xs font-semibold text-brand-light">0{index + 1}</span>
                    <span className="font-semibold text-white">{step.title}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
