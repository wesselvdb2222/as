"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import HostingOptions from "@/components/hosting-options"
import Video from "@/components/video"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import { SpaceBackground } from "@/components/space-background"
import Link from "next/link"

export default function Home() {
  // Hardcoded hero data
  const hero = {
    badge: {
      text: "Welcome to AllSourced V2",
      showPulse: true,
    },
    title: {
      prefix: "Solutions For ",
      highlight: "Your eCommerce",
      suffix: " Store",
    },
    description:
      "AllSourced provides all the solutions you need to succeed with your e-commerce business.",
    image: {
      src: "/images/space-cat.png",
      alt: "Futuristic Server",
      width: 600,
      height: 400,
    },
    buttons: [
      {
        text: "Our Services",
        variant: "primary",
        icon: "ChevronRight",
        href: "/get-started",
      },
      {
        text: "Contact Us",
        variant: "outline",
        href: "#hosting-options",
      },
    ],
  }

  // Add scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal:not(.hero-element)")
    const revealStaggerElements = document.querySelectorAll(".reveal-stagger")

    // Immediately show hero elements
    const heroElements = document.querySelectorAll(".hero-element")
    heroElements.forEach((el) => {
      el.classList.add("active")
    })

    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealElements[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active")
        }
      }

      for (let i = 0; i < revealStaggerElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealStaggerElements[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealStaggerElements[i].classList.add("active")
        }
      }
    }

    // Run once immediately to check elements in viewport on load
    revealOnScroll()

    window.addEventListener("scroll", revealOnScroll)

    return () => window.removeEventListener("scroll", revealOnScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#010901]">
      {/* Background */}
      <SpaceBackground />

      {/* Hero Section */}
      <section className="relative w-full py-32 overflow-hidden">
        <div className="container relative z-10 px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-8 text-center md:text-left hero-element opacity-100 transform-none">
              <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400">
                {hero.badge.showPulse && (
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                )}
                <span>{hero.badge.text}</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                {hero.title.prefix}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 animate-gradient">
                  {hero.title.highlight}
                </span>
                {hero.title.suffix}
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
                          : "relative overflow-hidden group bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-400 hover:to-primary-500 text-black font-bold transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] min-w-[140px]"
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
                            : "relative overflow-hidden group bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-400 hover:to-primary-500 text-black font-bold transition-all duration-300 shadow-[0_0_15px_rgba(138,79,255,0.3)] hover:shadow-[0_0_25px_rgba(138,79,255,0.5)]"
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
            </div>
            <div className="relative flex justify-center hero-element opacity-100 transform-none">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative z-10 transition-transform duration-700 hover:scale-105 hover:rotate-3">
                  <Image
                    src={hero.image.src || "/placeholder.svg"}
                    alt={hero.image.alt}
                    width={hero.image.width}
                    height={hero.image.height}
                    className="relative z-10 drop-shadow-[0_0_15px_rgba(138,79,255,0.5)]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Options */}
      <Video />

      {/* Hosting Options */}
      <HostingOptions />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />
    </div>
  )
}
