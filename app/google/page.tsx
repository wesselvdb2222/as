import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import { Check } from "lucide-react"
import Link from "next/link"
import Pricing from "@/components/pricing"

export const metadata = {
  title: "Google Service - AllSourced",
  description: "High-performance dedicated servers with full hardware control and enterprise-grade reliability.",
}

export default function DedicatedPage() {
  // Dedicated server plans data
  // Dedicated server plans data
  const dedicatedPlans = [
    {
      name: "GMC Approval",
      price: "€750.00",
      period: "one-time",
      description: "Merchant Center Approval",
      features: [
        "Pay after approval",
        "99.5% Approval Rate",
        "Google Merchant Center",
        "Dedicated Support",
      ],
      popular: true,
      buttonLink: "https://api.whatsapp.com/send?phone=31647415437&text=Hi%2C%0A%0AI%27m%20interested%20in%20a%20GMC%20Approval.",
      buttonCta: "Contact Us",
    },
    {
      name: "Media Buyer",
      price: "€1500",
      period: "per month",
      description: "Scalable media buying solutions for Google",
      features: [
        "Google Ads Management",
        "Scalable Solutions",
        "Dedicated Media Buyer",
        "Performance Optimization",
      ],
      popular: false,
      buttonLink: "https://api.whatsapp.com/send?phone=31647415437&text=Hi%2C%0A%0AI%27m%20interested%20in%20the%20email%20marketing%20agency.",
      buttonCta: "Contact Us",
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
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Google Services</h1>
            <p className="mb-8 text-xl text-gray-400">
              Explore Services for Google Services.
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
