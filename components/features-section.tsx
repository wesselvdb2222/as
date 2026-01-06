import { Shield, Zap, Clock } from "lucide-react"

interface FeaturesSectionProps {
  features?: {
    icon: "shield" | "zap" | "clock" | string
    title: string
    description: string
  }[]
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  // Default features if none provided
  const defaultFeatures = [
    {
      icon: "shield",
      title: "Maximum Security",
      description:
        "Enterprise-grade security with DDoS protection, regular backups, and advanced firewall configurations to keep your data safe.",
    },
    {
      icon: "zap",
      title: "Lightning Fast Performance",
      description:
        "Powered by the latest hardware and optimized software configurations for blazing fast speeds and minimal latency.",
    },
    {
      icon: "clock",
      title: "99.9% Uptime Guarantee",
      description:
        "Our robust infrastructure ensures your services stay online with redundant systems and 24/7 monitoring.",
    },
  ]

  const displayFeatures = features || defaultFeatures

  // Map icon strings to components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "shield":
        return <Shield className="w-10 h-10 text-green-400" />
      case "zap":
        return <Zap className="w-10 h-10 text-green-400" />
      case "clock":
        return <Clock className="w-10 h-10 text-green-400" />
      default:
        return <Shield className="w-10 h-10 text-green-400" />
    }
  }

  return (
    <section className="py-16 bg-[#010901]/50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {displayFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md hover:border-green-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] transition-all duration-300"
            >
              <div className="p-3 mb-4 rounded-lg bg-green-500/10 w-fit">{getIcon(feature.icon)}</div>
              <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
