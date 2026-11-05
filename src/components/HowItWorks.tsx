import { WHATSAPP_URL } from "@/lib/site";

const STEPS = [
  { title: "Contact us", text: "Message us on WhatsApp and tell us what you run and how much you spend." },
  { title: "Choose your setup", text: "Agency ad accounts, a complete Facebook structure, or the separate assets you need." },
  { title: "Live within 24 hours", text: "Your accounts are set up and connected, ready to launch your campaigns." },
  { title: "Scale with 24/7 support", text: "Top up any time and get help fast, so a restriction never stops your ads." },
];

/** Four-step "How it works" on the homepage. */
export function HowItWorks() {
  return (
    <section data-section="how-it-works" className="bg-black px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">How it works</h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-brand/30 bg-brand/10 text-sm font-semibold text-brand-light">
                {index + 1}
              </span>
              <h3 className="mt-4 font-semibold text-white">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/55">{step.text}</p>
            </li>
          ))}
        </ol>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
        >
          Start on WhatsApp
        </a>
      </div>
    </section>
  );
}
