"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import HostingOptions from "@/components/hosting-options"
import Video from "@/components/video"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import { SpaceBackground } from "@/components/space-background"
import Link from "next/link"
import DiscordWidget from "@/components/discord-widget"

export default function Home() {
  // Hardcoded hero data
  const hero = {
    badge: {
      text: "Welcome to AllSourced V2",
      showPulse: true,
    },
    title: {
      prefix: "Solutions For ",
      highlight: "Your Dropshipping",
      suffix: " Store",
    },
    description:
      "AllSourced provides all the solutions you need to succeed with your e-commerce business.",
    buttons: [
      {
        text: "Our Services",
        variant: "primary",
        icon: "ChevronRight",
        href: "#hosting-options",
      },
      {
        text: "Contact Us",
        variant: "outline",
        href: "https://api.whatsapp.com/send/?phone=31402291292&text&type=phone_number&app_absent=0",
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

            {/* REPLACED IMAGE WITH DISCORD WIDGET */}
            <div className="relative flex justify-center hero-element opacity-100 transform-none">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>

                <div className="relative z-10 flex justify-center transition-transform duration-700 hover:scale-[1.02]">
                  <DiscordWidget />
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

      {/* Discord Button */}
      <div className="fixed bottom-4 right-4">
        <a
          href="https://discord.gg/allsourced"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
          aria-label="Join our Discord"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-7 h-7">
            <path
              d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.078.037c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.164-.393-.405-.874-.617-1.249a.077.077 0 00-.078-.037c-1.693.36-3.338.915-4.885 1.515a.07.07 0 00-.032.027C.533 9.045-.319 13.579.099 18.057a.082.082 0 00.031.056 19.908 19.908 0 005.993 3.04.077.077 0 00.084-.027c.462-.63.874-1.295 1.226-1.987a.076.076 0 00-.041-.105 13.098 13.098 0 01-1.872-.915.077.077 0 01-.008-.127c.126-.095.252-.192.373-.291a.075.075 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 01.078.009c.121.099.247.196.373.291a.077.077 0 01-.007.127c-.597.364-1.223.678-1.872.915a.076.076 0 00-.041.105c.375.692.787 1.357 1.226 1.987a.077.077 0 00.084.027 19.932 19.932 0 005.993-3.04.077.077 0 00.031-.056c.5-5.177-.838-9.673-3.549-13.661a.061.061 0 00-.031-.028zM8.02 15.331c-1.182 0-2.155-1.085-2.155-2.419 0-1.333.955-2.428 2.155-2.428 1.21 0 2.183 1.095 2.164 2.428 0 1.334-.955 2.419-2.164 2.419zm7.974 0c-1.182 0-2.155-1.085-2.155-2.419 0-1.333.955-2.428 2.155-2.428 1.21 0 2.183 1.095 2.164 2.428 0 1.334-.955 2.419-2.164 2.419z"
              fill="#ffffff"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
