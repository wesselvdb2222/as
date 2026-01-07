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
      {/* WhatsApp Button */}
      <div className="fixed bottom-4 right-4">
        <a
          href="https://wa.me/31402291292" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-7 h-7"
            >
              <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#ffffff"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#ffffff"></path>
            </svg>
        </a>
      </div>
    </div>
  )
}
