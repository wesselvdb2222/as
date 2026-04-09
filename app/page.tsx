"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import HostingOptions from "@/components/hosting-options"
import Video from "@/components/video"
import Testimonials from "@/components/testimonials"
import TrustpilotWidget from "@/components/trustpilot-widget"
import FAQ from "@/components/faq"
import { SpaceBackground } from "@/components/space-background"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
const Globe = dynamic(() => import("@/components/globe"), { ssr: false })
import LogoSlider from "@/components/logo-slider"

export default function Home() {
  // Hardcoded hero data
  const hero = {
    badge: {
      text: "Bulletproof Facebook Structures & Ad Accounts",
      showPulse: true,
    },
    title: {
      prefix: "Solutions for ",
      highlight: "your e-commerce",
      suffix: " business",
    },
    description:
      "AllSourced provides all the solutions you need to succeed with your e-commerce or advertising.",
    buttons: [
      {
        text: "Our Services",
        variant: "primary",
        icon: "ChevronRight",
        href: "#hosting-options",
      },
      {
        text: "Become a partner",
        variant: "outline",
        href: "https://api.whatsapp.com/send/?phone=31647415437&text=I%20want%20to%20become%20a%20partner&type=phone_number&app_absent=0",
      },
    ],
  }

  // Scroll reveal via IntersectionObserver (no scroll listener overhead)
  useEffect(() => {
    document.querySelectorAll(".hero-element").forEach((el) => el.classList.add("active"))

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("active"); observer.unobserve(e.target) } }),
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    )

    document.querySelectorAll(".reveal:not(.hero-element), .reveal-stagger").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#010901]">
      {/* Background */}
      <SpaceBackground />

      {/* Hero Section */}
      <section className="relative w-full py-32 overflow-hidden">
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <div className="space-y-8 text-center md:text-left hero-element opacity-100 transform-none">
          <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400">
          {hero.badge.showPulse && (
            <span className="inline-block w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
          )}
          <span>{hero.badge.text}</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl leading-tight">
            <span className="block">{hero.title.prefix}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 animate-gradient">
              {hero.title.highlight}{hero.title.suffix}
            </span>
          </h1>

          <p className="max-w-[600px] text-gray-400 md:text-xl">{hero.description}</p>

            <div className="flex flex-wrap gap-4 md:justify-start justify-center">
            {hero.buttons.map((button, index) =>
            button.href === "#hosting-options" ? (
            <Button
              key={index}
              size="lg"
              variant={button.variant === "outline" ? "outline" : "default"}
              className={
              button.variant === "outline"
              ? "border-primary-500 text-primary-400 hover:bg-primary-500/10 transition-all duration-300 min-w-[140px]"
              : "relative overflow-hidden group bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-400 hover:to-primary-500 text-white font-bold transition-all duration-300 shadow-[0_0_15px_rgba(138,79,255,0.3)] hover:shadow-[0_0_25px_rgba(138,79,255,0.5)] min-w-[140px]"
              }
              onClick={(e) => {
              e.preventDefault()
              const section = document.getElementById("hosting-options")
              if (section) {
              section.scrollIntoView({ behavior: "smooth" })
              }
              }}
            >
              <span className="relative z-10 flex items-center justify-center">
              {button.text}
              {button.icon === "ChevronRight" && (
              <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              )}
              </span>
              {button.variant !== "outline" && (
              <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              )}
            </Button>
            ) : (
            <Link key={index} href={button.href} passHref>
              <Button
              size="lg"
              variant={button.variant === "outline" ? "outline" : "default"}
              className={
              button.variant === "outline"
              ? "border-primary-500 text-primary-400 hover:bg-primary-500/10 transition-all duration-300 min-w-[140px]"
              : "relative overflow-hidden group bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-400 hover:to-primary-500 text-white font-bold transition-all duration-300 shadow-[0_0_15px_rgba(138,79,255,0.3)] hover:shadow-[0_0_25px_rgba(138,79,255,0.5)]"
              }
              >
              <span className="relative z-10 flex items-center justify-center">
              {button.text}
              {button.icon === "ChevronRight" && (
              <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              )}
              </span>
              {button.variant !== "outline" && (
              <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              )}
              </Button>
            </Link>
            ),
            )}
          </div>

          {/* Trustpilot badge */}
          <a href="https://nl.trustpilot.com/review/allsourced.nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:justify-start justify-center hover:opacity-80 transition-opacity duration-200">
            <Image src="/stars.svg" alt="5 sterren" width={120} height={24} className="h-6 w-auto" />
            <span className="text-sm text-gray-400">
              <span className="text-white font-semibold">4.8</span> on{" "}
              <span className="text-white font-semibold">Trustpilot</span>
            </span>
          </a>
        </div>

        {/* Globe */}
        <div className="relative flex justify-center hero-element opacity-100 transform-none">
          <Globe />
        </div>
        </div>
      </div>
      </section>

      {/* Logo Slider */}
      <LogoSlider />

      {/* Hosting Options */}
      <Video />

      {/* Hosting Options */}
      <HostingOptions />

      {/* Trustpilot Widget */}
      <section className="py-16 relative">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="max-w-3xl mx-auto mb-10 text-center reveal">
            <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 mb-4">
              <span>Testimonials</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">What our customers say</h2>
            <p className="text-gray-400">Don't just take our word for it. Here's what our customers have to say about our services.</p>
          </div>
          <TrustpilotWidget />
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-[9999]">
      <a
        href="https://api.whatsapp.com/send/?phone=31647415437&text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.789-1.48-1.761-1.655-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.372-.025-.521-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51h-.573c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"
          fill="#ffffff"
        ></path>
        <path
          d="M20.52 3.48C18.24 1.2 15.24 0 12 0 5.373 0 0 5.373 0 12c0 2.123.552 4.193 1.607 6.02L0 24l6.26-1.572C8.06 23.448 10.06 24 12 24c6.627 0 12-5.373 12-12 0-3.24-1.2-6.24-3.48-8.52zM12 22.095c-1.837 0-3.674-.495-5.26-1.44l-.375-.223-3.72.933.992-3.636-.248-.374C2.01 15.6 1.5 13.8 1.5 12 1.5 6.48 6.48 1.5 12 1.5c2.97 0 5.76 1.158 7.86 3.24 2.1 2.1 3.24 4.89 3.24 7.86 0 5.52-4.98 10.5-10.5 10.5z"
          fill="#ffffff"
        ></path>
        </svg>
      </a>
      </div>
    </div>
  )
}
