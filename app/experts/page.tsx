import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import { Check } from "lucide-react"
import Link from "next/link"
import Pricing from "@/components/pricing"

export const metadata = {
  title: "Email Services - AllSourced",
  description: "High-performance dedicated servers with full hardware control and enterprise-grade reliability.",
}

export default function DedicatedPage() {
  // Dedicated server plans data
  // Dedicated server plans data
  const dedicatedPlans = [
    {
      name: "Shopify Coder",
      description: "Reliable Shopify coder.",
      features: [
      ],
      popular: true,
      buttonLink: "https://api.whatsapp.com/send?phone=31647415437&text=Hey%2C%20I%27m%20looking%20for%20a%20Shopify%20Coder.",
      buttonCta: "Contact",
    },
  ]

  // Dedicated server-specific features
  const dedicatedFeatures = [
    {
      icon: "shield",
      title: "Full Hardware Control",
      description:
        "Complete control over your dedicated hardware with no resource sharing, giving you maximum performance and reliability for your applications.",
    },
    {
      icon: "zap",
      title: "Enterprise Hardware",
      description:
        "Top-tier server hardware from leading manufacturers, featuring the latest processors, NVMe SSDs, and high-speed networking components.",
    },
    {
      icon: "clock",
      title: "Custom Configurations",
      description:
        "Tailor your server to your exact specifications with custom hardware configurations, RAID setups, and specialized networking options.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#010901]">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Find Experts</h1>
            <p className="mb-8 text-xl text-gray-400">
              AllSourced has a team of experts ready to help you with your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
    <Pricing plans={dedicatedPlans} />

      {/* Discord CTA */}
      <DiscordCTA />
    </div>
  )
}
