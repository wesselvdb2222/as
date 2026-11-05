const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
  "aria-hidden": true,
};

const reasons = [
  {
    title: "30 day warranty",
    description:
      "Every account comes with a 30 day warranty. If something is not right, we fix it for you.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Competitive Rates",
    description: "Competitive pricing without compromising on quality or stability.",
    icon: (
      <svg {...iconProps}>
        <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" />
        <circle cx="7.5" cy="7.5" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Expertise",
    description:
      "Trusted by 850+ digital businesses. We know what it takes to keep your ads running.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3 2 8l10 5 10-5-10-5Z" />
        <path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
      </svg>
    ),
  },
];

export function WhyUs() {
  return (
    <section data-section="why-us" className="bg-gradient-to-b from-black to-[#0b0716] px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Why choose us
        </h2>

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {reasons.map((r) => (
            <li
              key={r.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-brand/30 bg-brand/10 text-brand-light">
                {r.icon}
              </span>
              <h3 className="mt-5 text-base font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{r.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
