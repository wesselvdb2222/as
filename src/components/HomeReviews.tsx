import { TRUSTPILOT_SCORE, TRUSTPILOT_URL } from "@/lib/site";
import { TrustpilotStars } from "./TrustpilotRating";

/** Real Trustpilot reviews, verbatim (an excerpt is marked with "…"). Keep them word for word. */
const REVIEWS = [
  { name: "Thijs Bastiaans", title: "Great Service", text: "Great products, quick communication and fantastic service. 5/5." },
  { name: "Hens Boer", title: "Great assets & service", text: "Great products, with very good service. I would highly recommend to buying assets from these guys. :)" },
  { name: "Kenan Agziballi", title: "Reliable and Professional Partner for Your Online Business", text: "… Everything is handled professionally and efficiently …" },
];

export function HomeReviews() {
  return (
    <section data-section="reviews" className="bg-[#0b0716] px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">What our clients say</h2>
          <a href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/60 hover:text-white">
            <TrustpilotStars />
            <span>
              <strong className="font-semibold text-white">{TRUSTPILOT_SCORE.score}</strong> / 5 · {TRUSTPILOT_SCORE.reviews} reviews
            </span>
          </a>
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <li key={review.name} className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <TrustpilotStars size="sm" />
              <p className="mt-4 font-semibold text-white">{review.title}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{review.text}</p>
              <p className="mt-4 text-xs text-white/45">{review.name} · Trustpilot</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
