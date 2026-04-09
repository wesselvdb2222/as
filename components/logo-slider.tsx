"use client"

import Image from "next/image"

type Logo =
  | { name: string; img: string;  text?: never }
  | { name: string; text: string; img?: never }

const logos: Logo[] = [
  { name: "Meta",      img: "/meta.svg"   },
  { name: "Pinterest", img: "/pinterest.svg" },
  { name: "Google Ads", img: "/google-ads.svg" },
  { name: "Shopify",   img: "/shopify.svg" },
  { name: "Klaviyo",   img: "/klaviyo.svg" },
]

export default function LogoSlider() {
  // Render logos twice — first set is the "real" track, second is seamless duplicate
  const items = [...logos, ...logos]

  return (
    <section className="relative py-10 overflow-hidden border-t border-b border-primary-500/10">
      {/* fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#010901] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#010901] to-transparent z-10 pointer-events-none" />

      <p className="text-center text-xs text-gray-500 mb-8 tracking-widest uppercase">Platforms we work with</p>

      <div className="flex" style={{ WebkitMaskImage: "none" }}>
        {/* Two identical tracks side by side, each animating independently */}
        {[0, 1].map((trackIndex) => (
          <div key={trackIndex} className="logo-track flex-none">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center mx-12 opacity-40 hover:opacity-100 transition-opacity duration-300 shrink-0"
              >
                {logo.img ? (
                  <Image src={logo.img} alt={logo.name} width={80} height={48} className="h-12 w-auto object-contain brightness-0 invert" />
                ) : (
                  <span className="h-12 flex items-center text-white font-black text-4xl">{logo.text}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
