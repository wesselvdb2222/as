import { JsonLd } from "./JsonLd";

/** FAQ on the homepage, also marked up as FAQPage. Answers only state what the site promises. */
const FAQS = [
  {
    q: "How fast is an agency ad account live?",
    a: "Agency ad accounts are live within 24 hours, so you can launch your campaigns the same or the next day.",
  },
  {
    q: "What does an agency ad account cost?",
    a: "Agency ad accounts work with a 4% fee. Other assets have a fixed price, such as Facebook structures from €375, aged profiles from €59, pages from €50 each and aged Business Managers from €125.",
  },
  {
    q: "Can I top up my ad account at any time?",
    a: "Yes. Top-ups are available 24/7, so your ads keep running in the evening and at the weekend too.",
  },
  {
    q: "What if something is wrong with an account?",
    a: "Every account comes with a 30 day warranty. If something is not right, we fix it for you.",
  },
  {
    q: "Are your accounts hacked or stolen?",
    a: "No. We only sell aged accounts that we have created ourselves, which is also what keeps them stable.",
  },
  {
    q: "How do I get started?",
    a: "Message us on WhatsApp with what you run and how much you spend, and we'll recommend the right setup.",
  },
];

export function HomeFaq() {
  return (
    <section data-section="faq" className="bg-[#0b0716] px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-xl border border-white/10">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white">
                <h3>{faq.q}</h3>
                <span className="text-xl leading-none text-white/40 transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </section>
  );
}
