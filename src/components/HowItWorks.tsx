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
    title: "Contact us",
    text: "Message us on WhatsApp and tell us what you run, which markets you target and how much you spend.",
    time: "~ 5 min",
    icon: (
      <svg {...iconProps}>
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" />
      </svg>
    ),
  },
  {
    title: "Choose your setup",
    text: "Agency ad accounts, a complete Facebook structure, or only the profiles, pages and Business Managers you need.",
    time: "Same day",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M17.5 14v7M14 17.5h7" />
      </svg>
    ),
  },
  {
    title: "Live within 24 hours",
    text: "Your assets are set up and connected, ready for your campaigns. No warming up accounts yourself.",
    time: "< 24 hours",
    icon: (
      <svg {...iconProps}>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    ),
  },
  {
    title: "Scale with 24/7 support",
    text: "Top up any time and get help fast. If an account gets restricted, your campaigns keep running.",
    time: "24/7",
    icon: (
      <svg {...iconProps}>
        <path d="M3 17 9 11l4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "850+", label: "businesses served" },
  { value: "24h", label: "to go live" },
  { value: "24/7", label: "top-ups & support" },
];

/** "How it works": pitch and stats on the left, a glowing four-step timeline on the right. */
export function HowItWorks() {
  return (
    <section data-section="how-it-works" className="relative isolate overflow-hidden bg-black px-5 py-20 sm:px-8 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Pitch */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
            How it works
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From first message to live ads
            <span className="text-brand-light"> in 24 hours.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">
            We handle the backend: accounts, structures and top-ups. You focus on your campaigns and your brand.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-light"
          >
            Start on WhatsApp
          </a>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-black/80 px-4 py-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight text-white">{stat.value}</dd>
                <dd className="mt-0.5 text-xs text-white/50">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Timeline */}
        <ol className="relative space-y-5">
          <span
            aria-hidden
            className="absolute bottom-8 left-[27px] top-8 w-px bg-gradient-to-b from-brand-light via-brand/60 to-transparent"
          />
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative flex gap-5">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand/40 bg-gradient-to-br from-brand/30 to-black text-brand-light shadow-lg shadow-brand/20">
                {step.icon}
              </span>
              <div className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-5 transition-colors hover:border-brand/40 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-semibold text-brand-light">0{index + 1}</span>
                    <span className="text-lg font-semibold text-white">{step.title}</span>
                  </p>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/70">{step.time}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
