import { TRUSTPILOT_SCORE, TRUSTPILOT_URL } from "@/lib/site";

const TRUSTPILOT_GREEN = "#00B67A";
const STAR_PATH = "M12 2.5l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.7l7.1-.6L12 2.5Z";

/** Five white stars on Trustpilot-green squares. */
function TrustpilotStars({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const box = { sm: "h-4 w-4", md: "h-6 w-6", lg: "h-8 w-8" }[size];
  const star = { sm: "h-3 w-3", md: "h-4 w-4", lg: "h-6 w-6" }[size];
  return (
    <span className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={`flex items-center justify-center ${box}`} style={{ backgroundColor: TRUSTPILOT_GREEN }}>
          <svg viewBox="0 0 24 24" fill="#ffffff" className={star}>
            <path d={STAR_PATH} />
          </svg>
        </span>
      ))}
    </span>
  );
}

/** Trustpilot's look: white stars on green squares. Links to our Trustpilot profile so the score
 * can be checked. */
export function TrustpilotRating() {
  const { score, label, reviews } = TRUSTPILOT_SCORE;
  return (
    <a
      href={TRUSTPILOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Rated ${score} out of 5 (${label}) from ${reviews} reviews on Trustpilot`}
      className="group inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/70 transition-colors hover:text-white"
    >
      <span className="font-semibold text-white">{label}</span>
      <TrustpilotStars />
      <span>
        <strong className="font-semibold text-white">{score}</strong> out of 5 · {reviews} reviews
      </span>
    </a>
  );
}
