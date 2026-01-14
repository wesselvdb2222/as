"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ChevronRight, Gamepad2, Server, Facebook, Database, Mail } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { features } from "process"

// Add id to the section for scrolling
export default function HostingOptions() {
  // Hardcoded hosting options data
  const hostingOptions = {
    title: "We Provide, You Choose",
    badge: "Our Solutions To Scale! 🚀",
    description: "Select the perfect eCommerce solution tailored to your specific needs and requirements.",
    options: [
      {
        name: "for Meta",
        icon: "Facebook",
        description: "Explore our range of Meta Services that help you scale your business.",
        image: "/images/castle.png",
        features: [
        ],
        buttonText: "Explore Meta Services",
        buttonHref: "/meta",
      },
      {
        name: "Email Marketing",
        icon: "Mail",
        description: "Explore our email marketing services that help you scale your business.",
        image: "/images/processor.png",
        features: [
        ],
        buttonText: "Explore Email Marketing",
        buttonHref: "/email",
      },
      {
        name: "for Google",
        icon: "Database",
        description: "Explore our range of Google Services that help you scale your business.",
        image: "/images/assetcpanel.png",
        features: [
        ],
        buttonText: "Explore Google Services",
        buttonHref: "/google",
      },
    ],
  }

  const [hoveredOption, setHoveredOption] = useState<number | null>(null)

  // Map icon names to components
  const iconComponents: Record<string, React.ReactNode> = {
    Facebook: <Facebook className="w-10 h-10 text-primary-400" />,
    Mail: <Mail className="w-10 h-10 text-primary-400" />,
    Database: <Database className="w-10 h-10 text-primary-400" />,
  }

  return (
    <section id="hosting-options" className="py-20 relative">
      <div className="container px-4 mx-auto">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 mb-4">
        <span>{hostingOptions.badge}</span>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{hostingOptions.title}</h2>
        <p className="text-gray-400">{hostingOptions.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {hostingOptions.options.map((option, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg border backdrop-blur-md transition-all duration-500 border-primary-500/20 bg-[#010901]/70 hover:border-primary-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] group h-[400px] md:h-[340px] flex flex-col"
          onMouseEnter={() => setHoveredOption(index)}
          onMouseLeave={() => setHoveredOption(null)}
        >
          <div className="absolute top-0 left-0 w-full h-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#010901] z-10"></div>
          <Image
            src={option.image || "/placeholder.svg"}
            alt={option.name}
            width={400}
            height={200}
            className={`w-full h-full opacity-30 group-hover:opacity-40 transition-opacity duration-500 transition-transform duration-700 ${
            option.icon === "Database"
              ? "object-contain scale-70 group-hover:scale-85"
              : "object-cover scale-110 group-hover:scale-125"
            }`}
          />
          </div>

          <div className="p-6 pt-28 relative z-10 flex flex-col flex-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-all duration-300">
            {iconComponents[option.icon]}
            </div>
            <h3 className="text-2xl font-bold text-white">{option.name}</h3>
          </div>

          <p className="mb-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {option.description}
          </p>

          <ul className="space-y-2 mb-6">
            {option.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start gap-3 group/item">
              <div className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-primary-500/20 group-hover:bg-primary-500/30 transition-all duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
              {feature}
              </span>
            </li>
            ))}
          </ul>

            <Button onClick={() => {
            window.location.href = option.buttonHref
            }} className="w-full relative overflow-hidden group/btn bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-400 hover:to-primary-500 text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] mt-auto">
            <span className="relative z-10 flex items-center">
            {option.buttonText}
            <ChevronRight
              className={`w-4 h-4 ml-2 transition-transform duration-300 ${
              hoveredOption === index ? "translate-x-1" : ""
              }`}
            />
            </span>
            <span
            className={`absolute inset-0 w-full h-full bg-white/20 transition-transform origin-left duration-300 ${
              hoveredOption === index ? "scale-x-100" : "scale-x-0"
            }`}
            ></span>
            </Button>
          </div>
        </div>
        ))}
      </div>
      </div>
    </section>
  )
}
