import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import { Check } from "lucide-react"
import Link from "next/link"
import Pricing from "@/components/pricing"

export const metadata = {
  title: "VPS Hosting - YourHost",
  description: "High-performance VPS hosting solutions with full root access and dedicated resources.",
}

export default function VPSPage() {
  // VPS plans data
  const vpsPlans = [
    {
      name: "Starter VPS",
      price: "$5.99",
      period: "per month",
      description: "Perfect for small websites and applications",
      features: [
        "1 vCPU Core",
        "2GB RAM",
        "20GB SSD Storage",
        "1TB Bandwidth",
        "1 IPv4 Address",
        "Full Root Access",
        "24/7 Support",
      ],
      popular: false,
      buttonLink: "/order/vps/starter",
    },
    {
      name: "Basic VPS",
      price: "$9.99",
      period: "per month",
      description: "For personal projects and small businesses",
      features: [
        "1 vCPU Core",
        "4GB RAM",
        "40GB SSD Storage",
        "2TB Bandwidth",
        "1 IPv4 Address",
        "Full Root Access",
        "Basic DDoS Protection",
        "24/7 Support",
      ],
      popular: false,
      buttonLink: "/order/vps/basic",
    },
    {
      name: "Professional VPS",
      price: "$14.99",
      period: "per month",
      description: "Ideal for growing businesses and applications",
      features: [
        "2 vCPU Cores",
        "6GB RAM",
        "60GB SSD Storage",
        "3TB Bandwidth",
        "1 IPv4 Address",
        "Full Root Access",
        "DDoS Protection",
        "24/7 Priority Support",
      ],
      popular: true,
      buttonLink: "/order/vps/professional",
    },
    {
      name: "Business VPS",
      price: "$24.99",
      period: "per month",
      description: "For high-traffic websites and resource-intensive applications",
      features: [
        "4 vCPU Cores",
        "8GB RAM",
        "100GB SSD Storage",
        "5TB Bandwidth",
        "1 IPv4 Address",
        "Full Root Access",
        "DDoS Protection",
        "Automated Backups",
        "24/7 Priority Support",
      ],
      popular: false,
      buttonLink: "/order/vps/business",
    },
    {
      name: "Enterprise VPS",
      price: "$39.99",
      period: "per month",
      description: "For enterprise applications requiring high performance",
      features: [
        "6 vCPU Cores",
        "16GB RAM",
        "200GB SSD Storage",
        "8TB Bandwidth",
        "2 IPv4 Addresses",
        "Full Root Access",
        "Advanced DDoS Protection",
        "Daily Automated Backups",
        "24/7 Priority Support",
        "Dedicated Account Manager",
      ],
      popular: false,
      buttonLink: "/order/vps/enterprise",
    },
    {
      name: "Ultimate VPS",
      price: "$59.99",
      period: "per month",
      description: "Our most powerful VPS solution for demanding workloads",
      features: [
        "8 vCPU Cores",
        "32GB RAM",
        "400GB SSD Storage",
        "10TB Bandwidth",
        "3 IPv4 Addresses",
        "Full Root Access",
        "Advanced DDoS Protection",
        "Hourly Automated Backups",
        "24/7 Priority Support",
        "Dedicated Account Manager",
        "Performance Optimization",
      ],
      popular: false,
      buttonLink: "/order/vps/ultimate",
    },
  ]

  // VPS-specific features
  const vpsFeatures = [
    {
      icon: "shield",
      title: "Full Root Access",
      description:
        "Complete control over your server with root access, allowing you to install any software and configure your environment exactly how you need it.",
    },
    {
      icon: "zap",
      title: "Instant Scaling",
      description:
        "Easily upgrade your resources as your needs grow. Scale your CPU, RAM, and storage with just a few clicks without any downtime.",
    },
    {
      icon: "clock",
      title: "SSD Storage",
      description:
        "All our VPS plans come with high-performance SSD storage, providing faster read/write speeds and improved reliability for your applications.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#010901]">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Virtual Private Servers</h1>
            <p className="mb-8 text-xl text-gray-400">
              High-performance VPS hosting with dedicated resources, full root access, and instant scaling capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
    <Pricing plans={vpsPlans} />

      {/* Features Section */}
      <FeaturesSection features={vpsFeatures} />

      {/* Discord CTA */}
      <DiscordCTA />
    </div>
  )
}
