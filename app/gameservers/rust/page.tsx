import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import { Check } from "lucide-react"
import Link from "next/link"
import Pricing from "@/components/pricing"

export const metadata = {
  title: "Rust Servers - YourHost",
  description: "High-performance Rust servers with custom maps, mods, and advanced configuration options.",
}

export default function RustPage() {
  // Rust server plans
  const rustPlans = [
    {
      name: "Starter",
      price: "$9.99",
      period: "per month",
      description: "Perfect for small communities",
      features: [
        "4GB RAM",
        "Up to 50 Players",
        "SSD Storage",
        "Automated Backups",
        "DDoS Protection",
        "Custom Map Support",
        "24/7 Support",
      ],
      popular: false,
      buttonLink: "/order/rust/starter",
    },
    {
      name: "Basic",
      price: "$14.99",
      period: "per month",
      description: "For growing communities",
      features: [
        "6GB RAM",
        "Up to 75 Players",
        "SSD Storage",
        "Automated Backups",
        "DDoS Protection",
        "Custom Map Support",
        "Basic Oxide/uMod Support",
        "24/7 Support",
      ],
      popular: false,
      buttonLink: "/order/rust/basic",
    },
    {
      name: "Standard",
      price: "$19.99",
      period: "per month",
      description: "For established communities",
      features: [
        "8GB RAM",
        "Up to 100 Players",
        "SSD Storage",
        "Automated Backups",
        "DDoS Protection",
        "Custom Map Support",
        "Full Oxide/uMod Support",
        "Wipe Scheduling",
        "24/7 Support",
      ],
      popular: true,
      buttonLink: "/order/rust/standard",
    },
    {
      name: "Premium",
      price: "$24.99",
      period: "per month",
      description: "Ideal for medium-sized communities",
      features: [
        "10GB RAM",
        "Up to 150 Players",
        "SSD Storage",
        "Automated Backups",
        "DDoS Protection",
        "Custom Map Support",
        "Full Oxide/uMod Support",
        "Wipe Scheduling",
        "Custom Domain",
        "24/7 Priority Support",
      ],
      popular: false,
      buttonLink: "/order/rust/premium",
    },
    {
      name: "Ultimate",
      price: "$39.99",
      period: "per month",
      description: "For large communities and modded servers",
      features: [
        "16GB RAM",
        "Up to 200 Players",
        "SSD Storage",
        "Automated Backups",
        "DDoS Protection",
        "Custom Map Support",
        "Full Oxide/uMod Support",
        "Wipe Scheduling",
        "Custom Domain",
        "Server Manager Access",
        "24/7 Priority Support",
      ],
      popular: false,
      buttonLink: "/order/rust/ultimate",
    },
    {
      name: "Enterprise",
      price: "$59.99",
      period: "per month",
      description: "For large networks and competitive servers",
      features: [
        "24GB RAM",
        "Up to 300 Players",
        "NVMe SSD Storage",
        "Hourly Automated Backups",
        "Advanced DDoS Protection",
        "Custom Map Support",
        "Full Oxide/uMod Support",
        "Wipe Scheduling",
        "Custom Domain",
        "Server Manager Access",
        "Dedicated Resources",
        "24/7 Priority Support",
      ],
      popular: false,
      buttonLink: "/order/rust/enterprise",
    },
  ]

  // Rust-specific features
  const rustFeatures = [
    {
      icon: "shield",
      title: "Oxide/uMod Support",
      description:
        "Install and manage Oxide/uMod plugins easily to customize your Rust server experience and add new features.",
    },
    {
      icon: "zap",
      title: "Custom Maps",
      description: "Upload and use custom maps to create unique gameplay experiences for your community.",
    },
    {
      icon: "clock",
      title: "Wipe Scheduling",
      description:
        "Set up automatic map and blueprint wipes on your preferred schedule to keep your server fresh and balanced.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#010901]">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Rust Servers</h1>
            <p className="mb-8 text-xl text-gray-400">
              High-performance Rust servers with Oxide/uMod support, custom maps, and advanced configuration options.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing plans={rustPlans} />

      {/* Features Section */}
      <FeaturesSection features={rustFeatures} />

      {/* Discord CTA */}
      <DiscordCTA />
    </div>
  )
}
