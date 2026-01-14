import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import { Check } from "lucide-react"
import Link from "next/link"
import Pricing from "@/components/pricing"

export const metadata = {
  title: "Meta Services - AllSourced",
  description: "High-performance dedicated servers with full hardware control and enterprise-grade reliability.",
}

export default function DedicatedPage() {
  // Dedicated server plans data
  // Dedicated server plans data
  const dedicatedPlans = [
    {
      name: "Agency Ad Account",
      price: "€249.00",
      period: "one-time",
      description: "Relaiable agency ad accounts.",
      features: [
        "5% Topup fee",
        "Dedicated Support",
        "Unlimited Ad Accounts",
        "EU Based",
        "High Performance",
        "No montly costs",
        "Instant Topups",
      ],
      popular: true,
      buttonLink: "https://api.whatsapp.com/send?phone=31647415437&text=Hello%2C%0A%0AI%27m%20interested%20in%20a%20FB%20Agency%20Ad%20Account!",
      buttonCta: "Contact Us",
    },
    {
      name: "Facebook Structure",
      price: "€395.00",
      period: "",
      description: "Protect your pixel with a dedicated Facebook structure.",
      features: [
        "2x Verified Business Manager",
        "5x Reinstated Profiles",
        "Pre-Installed",
        "Installation Support",
      ],
      popular: true,
      buttonLink: "https://api.whatsapp.com/send?phone=31647415437&text=Hello%2C%0A%0AI%27m%20interested%20in%20a%20Facebook%20Structure!",
      buttonCta: "Contact Us",
    },
    {
      name: "Verified Business Manager",
      price: "€125.00",
      period: "per BM",
      description: "Reduced risk of ad account bans",
      features: [
        "Verified badge for increased trust",
        "Higher ad spend limits",
        "Reduced risk of ad account bans",
        "Access to Facebook support",
        "Ability to request ad account reviews",
      ],
      popular: false,
      buttonLink: "https://api.whatsapp.com/send/?phone=31647415437&text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.&type=phone_number&app_absent=0",
      buttonCta: "Contact Us",
    },
    {
      name: "Reinstated Profile",
      price: "€59.00",
      period: "per profile",
      description: "Restore access to Facebook with a profile that has been successfully reinstated.",
      features: [
        "Bypasses previous restrictions or bans",
        "Ready to use for business or advertising",
        "Reduced risk of immediate re-suspension",
        "Can be linked to Business Managers",
        "24/7 Support for setup and troubleshooting",
      ],
      popular: false,
      buttonLink: "https://api.whatsapp.com/send/?phone=31647415437&text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.&type=phone_number&app_absent=0",
      buttonCta: "Contact Us",
    },
    {
      name: "Facebook Page",
      price: "€49.00",
      period: "per page",
      description: "Get acces to a aged Facebook Page for your business needs.",
      features: [
        "Bypasses  restrictions",
        "Ready to use for business or advertising",
        "Reduced risk of immediate re-suspension",
        "Can be linked to Business Managers",
        "24/7 Support for setup and troubleshooting",
      ],
      popular: false,
      buttonLink: "https://api.whatsapp.com/send/?phone=31647415437&text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.&type=phone_number&app_absent=0",
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
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Meta Services</h1>
            <p className="mb-8 text-xl text-gray-400">
              AllSourced provides services for Meta platforms, including custom solutions and dedicated support.
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
