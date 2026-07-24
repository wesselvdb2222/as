import { GoogleLogo, MetaLogo } from "./icons";

const LOGOS = [
  { component: MetaLogo, name: "Meta" },
  { component: GoogleLogo, name: "Google" },
  { name: "Klaviyo" },
  { name: "ParcelPanel" },
  { name: "123Track" },
];

function LogoGroup() {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16">
      {LOGOS.map(({ component: Icon, name }) => (
        <div
          key={name}
          className="flex shrink-0 items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
        >
          {Icon ? (
            <Icon className="h-7 w-auto" />
          ) : (
            <span className="text-lg font-bold text-zinc-700">{name}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function LogoSlider() {
  return (
    <section className="border-t border-zinc-100 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold tracking-wider text-zinc-400 uppercase">
          Platforms we work with
        </p>
      </div>

      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max">
          <LogoGroup />
          <LogoGroup />
        </div>
      </div>
    </section>
  );
}
