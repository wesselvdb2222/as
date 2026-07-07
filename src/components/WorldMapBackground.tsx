const CONTINENTS = [
  // North America
  "M110,90 Q160,70 220,85 Q270,75 300,110 Q330,140 310,175 Q340,200 300,225 Q310,255 260,250 Q230,270 200,240 Q160,250 150,210 Q110,200 120,160 Q90,130 110,90 Z",
  // Greenland
  "M330,60 Q360,50 380,70 Q390,90 365,100 Q340,95 330,60 Z",
  // South America
  "M260,300 Q290,290 305,320 Q320,350 310,390 Q315,420 295,450 Q285,470 270,455 Q250,430 255,400 Q240,360 250,330 Q245,310 260,300 Z",
  // Europe
  "M480,110 Q510,95 540,105 Q560,115 555,140 Q540,160 510,155 Q485,150 475,130 Q470,118 480,110 Z",
  // Africa
  "M480,180 Q520,170 555,185 Q580,200 585,240 Q595,280 575,320 Q580,360 555,390 Q540,410 515,395 Q505,370 510,340 Q490,300 495,260 Q480,220 480,180 Z",
  // Asia
  "M560,90 Q620,60 690,70 Q750,55 810,80 Q860,90 875,130 Q890,160 860,180 Q870,210 840,220 Q800,240 760,220 Q740,250 700,240 Q680,280 650,290 Q660,320 630,340 Q610,320 605,290 Q580,270 585,240 Q560,220 570,190 Q545,160 555,130 Q550,105 560,90 Z",
  // Australia
  "M800,390 Q840,375 875,390 Q900,405 890,430 Q870,450 835,445 Q805,440 795,415 Q790,400 800,390 Z",
].join(" ");

export default function WorldMapBackground({
  variant = "hero",
}: {
  variant?: "hero" | "card";
}) {
  const isCard = variant === "card";

  return (
    <div
      aria-hidden
      className={
        isCard
          ? "pointer-events-none absolute inset-0 z-0 flex items-center justify-end overflow-hidden [mask-image:radial-gradient(ellipse_70%_90%_at_78%_50%,black_30%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_70%_90%_at_78%_50%,black_30%,transparent_75%)]"
          : "pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden [mask-image:radial-gradient(ellipse_60%_65%_at_50%_38%,black_35%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_60%_65%_at_50%_38%,black_35%,transparent_75%)]"
      }
    >
      <svg
        viewBox="0 0 1000 520"
        className={
          isCard
            ? "h-auto w-[900px] max-w-none text-brand/40 sm:w-[1100px] animate-map-drift"
            : "h-auto w-[1400px] max-w-none text-brand/30 sm:w-[1700px] animate-map-drift"
        }
      >
        <defs>
          <pattern
            id="worldDots"
            width="13"
            height="13"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.7" fill="currentColor" />
          </pattern>
          <mask id="worldMask">
            <rect width="1000" height="520" fill="black" />
            <path fill="white" d={CONTINENTS} />
          </mask>
        </defs>
        <rect
          width="1000"
          height="520"
          fill="url(#worldDots)"
          mask="url(#worldMask)"
        />
      </svg>
    </div>
  );
}
