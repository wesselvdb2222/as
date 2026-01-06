import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import { Check } from "lucide-react"
import Link from "next/link"
import Pricing from "@/components/pricing"


export const metadata = {
  title: "Minecraft Servers - YourHost",
  description: "High-performance Minecraft servers with mods, plugins, and custom configurations.",
}

export default function MinecraftPage() {
  // Minecraft server plans
  const minecraftPlans = [
    {
      name: "Starter",
      price: "$3.99",
      period: "per month",
      description: "Perfect for small friend groups",
      features: [
        "1GB RAM",
        "Up to 5 Players",
        "SSD Storage",
        "Basic Backups",
        "DDoS Protection",
        "Plugin Support",
        "24/7 Support",
      ],
      popular: false,
      buttonLink: "/order/minecraft/starter",
    },
    {
      name: "Basic",
      price: "$5.99",
      period: "per month",
      description: "For small communities",
      features: [
        "2GB RAM",
        "Up to 10 Players",
        "SSD Storage",
        "Automated Backups",
        "DDoS Protection",
        "One-Click Plugin Installer",
        "24/7 Support",
      ],
      popular: false,
      buttonLink: "/order/minecraft/basic",
    },
    {
      name: "Standard",
      price: "$8.99",
      period: "per month",
      description: "For growing communities",
      features: [
        "3GB RAM",
        "Up to 20 Players",
        "SSD Storage",
        "Automated Backups",
        "DDoS Protection",
        "One-Click Plugin Installer",
        "Basic Modpack Support",
        "24/7 Support",
      ],
      popular: true,
      buttonLink: "/order/minecraft/standard",
    },
    {
      name: "Premium",
      price: "$12.99",
      period: "per month",
      description: "Ideal for medium-sized communities",
      features: [
        "5GB RAM",
        "Up to 35 Players",
        "SSD Storage",
        "Automated Backups",
        "DDoS Protection",
        "One-Click Plugin Installer",
        "Modpack Support",
        "Custom Domain",
        "24/7 Priority Support",
      ],
      popular: false,
      buttonLink: "/order/minecraft/premium",
    },
    {
      name: "Ultimate",
      price: "$19.99",
      period: "per month",
      description: "For large communities and modded servers",
      features: [
        "8GB RAM",
        "Up to 60 Players",
        "SSD Storage",
        "Automated Backups",
        "DDoS Protection",
        "One-Click Plugin Installer",
        "Advanced Modpack Support",
        "Custom Domain",
        "Server Manager Access",
        "24/7 Priority Support",
      ],
      popular: false,
      buttonLink: "/order/minecraft/ultimate",
    },
    {
      name: "Enterprise",
      price: "$29.99",
      period: "per month",
      description: "For large networks and heavy modpacks",
      features: [
        "12GB RAM",
        "Up to 100 Players",
        "NVMe SSD Storage",
        "Hourly Automated Backups",
        "Advanced DDoS Protection",
        "One-Click Plugin Installer",
        "Advanced Modpack Support",
        "Custom Domain",
        "Server Manager Access",
        "Dedicated Resources",
        "24/7 Priority Support",
      ],
      popular: false,
      buttonLink: "/order/minecraft/enterprise",
    },
  ]

  // Minecraft-specific features
  const minecraftFeatures = [
    {
      icon: "shield",
      title: "Plugin Support",
      description:
        "Easy installation of popular plugins like Essentials, WorldEdit, and PermissionsEx to enhance your Minecraft server experience.",
    },
    {
      icon: "zap",
      title: "Modpack Support",
      description:
        "Run popular modpacks like FTB, Tekkit, and SkyFactory with our optimized servers designed for modded Minecraft.",
    },
    {
      icon: "clock",
      title: "Instant Setup",
      description:
        "Get your Minecraft server up and running in less than 60 seconds with our automated deployment system.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#010901]">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Minecraft Servers</h1>
            <p className="mb-8 text-xl text-gray-400">
              High-performance Minecraft servers with easy plugin installation, modpack support, and instant setup.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing plans={minecraftPlans} />

      {/* Features Section */}
      <FeaturesSection features={minecraftFeatures} />

      {/* Discord CTA */}
      <DiscordCTA />
    </div>
  )
}
