/**
 * Starry background for the hero: twinkling dots plus a few shooting stars, CSS-only (keyframes in
 * globals.css). Positions come from a fixed seed, so server and browser render the same sky.
 */

function seeded(seed: number) {
  let value = seed;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

const random = seeded(42);

const STARS = Array.from({ length: 70 }, () => ({
  top: random() * 100,
  left: random() * 100,
  size: random() < 0.85 ? 1 : 2,
  delay: random() * 6,
  duration: 3 + random() * 4,
  opacity: 0.25 + random() * 0.6,
}));

/** Start points (top/left in %) and timing for the streaks; they fly down-left. */
const SHOOTING_STARS = [
  { top: 8, left: 78, delay: 1.5 },
  { top: 18, left: 55, delay: 6 },
  { top: 4, left: 92, delay: 10.5 },
  { top: 26, left: 70, delay: 15 },
];

export function HeroStars() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {STARS.map((star, index) => (
        <span
          key={index}
          className="hero-star absolute rounded-full bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      {SHOOTING_STARS.map((star, index) => (
        <span
          key={`shooting-${index}`}
          className="shooting-star absolute h-px w-28 rounded-full bg-gradient-to-l from-white via-white/60 to-transparent"
          style={{ top: `${star.top}%`, left: `${star.left}%`, animationDelay: `${star.delay}s` }}
        />
      ))}
    </div>
  );
}
