import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import Pricing from "@/components/pricing"

export const metadata = {
  title: "Discord Bot Hosting - YourHost",
  description: "Reliable Discord bot hosting with 24/7 uptime and easy deployment for your custom bots.",
}

export default function DiscordBotPage() {
  // Discord bot hosting plans
  const discordBotPlans = [
    {
      name: "Basic",
      price: "$3.99",
      period: "per month",
      description: "Perfect for simple Discord bots",
      features: [
        "512MB RAM",
        "SSD Storage",
        "24/7 Uptime",
        "Automated Backups",
        "Node.js Support",
        "Python Support",
        "24/7 Support",
      ],
      popular: false,
      buttonText: "Get Started",
      buttonLink: "/order/discordbot/basic",
    },
    {
      name: "Standard",
      price: "$7.99",
      period: "per month",
      description: "Ideal for medium-sized Discord bots",
      features: [
        "1GB RAM",
        "SSD Storage",
        "24/7 Uptime",
        "Automated Backups",
        "Node.js Support",
        "Python Support",
        "Database Support",
        "24/7 Priority Support",
      ],
      popular: true,
      buttonText: "Get Started",
      buttonLink: "/order/discordbot/standard",
    },
    {
      name: "Premium",
      price: "$14.99",
      period: "per month",
      description: "For complex Discord bots with high usage",
      features: [
        "2GB RAM",
        "SSD Storage",
        "24/7 Uptime",
        "Automated Backups",
        "Node.js Support",
        "Python Support",
        "Database Support",
        "Multiple Bot Support",
        "24/7 Priority Support",
      ],
      popular: false,
      buttonText: "Get Started",
      buttonLink: "/order/discordbot/premium",
    },
  ]

  // Discord bot-specific features
  const discordBotFeatures = [
    {
      icon: "shield",
      title: "24/7 Uptime",
      description:
        "Keep your Discord bot online around the clock with our reliable hosting infrastructure and automatic restart on failure.",
    },
    {
      icon: "zap",
      title: "Multiple Languages",
      description:
        "Support for popular bot development languages including Node.js, Python, Java, and more to fit your development preferences.",
    },
    {
      icon: "clock",
      title: "Easy Deployment",
      description:
        "Deploy your Discord bot with a few clicks using our simple control panel or connect directly to GitHub for automatic deployments.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#010901]">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Discord Bot Hosting</h1>
            <p className="mb-8 text-xl text-gray-400">
              Reliable Discord bot hosting with 24/7 uptime, multiple language support, and easy deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing plans={discordBotPlans} />

      {/* Features Section */}
      <FeaturesSection features={discordBotFeatures} />

      {/* Discord CTA */}
      <DiscordCTA />
    </div>
  )
}
