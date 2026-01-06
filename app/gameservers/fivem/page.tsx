import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import Pricing from "@/components/pricing"

export const metadata = {
  title: "FiveM Servers - YourHost",
  description: "High-performance FiveM servers for your GTA V roleplay community with custom resources and scripts.",
}

export default function FiveMPage() {
  // FiveM server plans
  const fivemPlans = [
    {
      name: "Starter",
      price: "$14.99",
      period: "per month",
      description: "Perfect for new roleplay communities",
      features: [
        "2GB RAM",
        "Up to 32 Players",
        "SSD Storage",
        "Automated Backups",
        "DDoS Protection",
        "Custom Resource Support",
        "24/7 Support",
      ],
      popular: false,
      buttonText: "Get Started",
      buttonLink: "/order/fivem/starter",
    },
    {
      name: "Premium",
      price: "$24.99",
      period: "per month",
      description: "Ideal for established roleplay communities",
      features: [
        "4GB RAM",
        "Up to 64 Players",
        "SSD Storage",
        "Automated Backups",
        "DDoS Protection",
        "Custom Resource Support",
        "Database Support",
        "24/7 Priority Support",
      ],
      popular: true,
      buttonText: "Get Started",
      buttonLink: "/order/fivem/premium",
    },
    {
      name: "Ultimate",
      price: "$49.99",
      period: "per month",
      description: "For large roleplay communities",
      features: [
        "8GB RAM",
        "Up to 128 Players",
        "SSD Storage",
        "Automated Backups",
        "DDoS Protection",
        "Custom Resource Support",
        "Database Support",
        "Custom Domain",
        "24/7 Priority Support",
      ],
      popular: false,
      buttonText: "Get Started",
      buttonLink: "/order/fivem/ultimate",
    },
  ]

  // FiveM-specific features
  const fivemFeatures = [
    {
      icon: "shield",
      title: "Custom Resources",
      description:
        "Install and manage custom FiveM resources and scripts to create a unique roleplay experience for your community.",
    },
    {
      icon: "zap",
      title: "Database Integration",
      description:
        "Seamlessly integrate with MySQL databases to store player data, vehicles, properties, and more for your roleplay server.",
    },
    {
      icon: "clock",
      title: "Easy Setup",
      description:
        "Get your FiveM server up and running quickly with our pre-configured server templates and easy-to-use control panel.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#010901]">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">FiveM Servers</h1>
            <p className="mb-8 text-xl text-gray-400">
              High-performance FiveM servers for your GTA V roleplay community with custom resources and database
              integration.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing plans={fivemPlans} />

      {/* Features Section */}
      <FeaturesSection features={fivemFeatures} />

      {/* Discord CTA */}
      <DiscordCTA />
    </div>
  )
}
