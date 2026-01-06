import { SpaceBackground } from "@/components/space-background"
import FeaturesSection from "@/components/features-section"
import DiscordCTA from "@/components/discord-cta"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Game Servers - YourHost",
  description: "High-performance game servers with low latency and easy setup for all your favorite games.",
}

export default function GameServersPage() {
  // Game server options
  const gameOptions = [
    {
      name: "Minecraft",
      description: "Host your own Minecraft server with mods, plugins, and custom configurations.",
      image: "/images/minecraft.webp",
      href: "/gameservers/minecraft",
    },
    {
      name: "Rust",
      description: "Create your Rust server with custom maps, mods, and advanced configuration options.",
      image: "/images/rust.png",
      href: "/gameservers/rust",
    },
    {
      name: "FiveM",
      description: "Build your GTA V roleplay community with a customized FiveM server.",
      image: "/images/fivem.webp",
      href: "/gameservers/fivem",
    },
    {
      name: "Discord Bot",
      description: "Host your Discord bot with 24/7 uptime and reliable performance.",
      image: "/images/discordbot.webp",
      href: "/gameservers/discordbot",
    },
  ]

  // Game server-specific features
  const gameFeatures = [
    {
      icon: "shield",
      title: "DDoS Protection",
      description:
        "Our game servers come with enterprise-grade DDoS protection to ensure your gameplay is never interrupted by malicious attacks.",
    },
    {
      icon: "zap",
      title: "Low Latency Network",
      description:
        "Optimized network infrastructure with multiple global locations to provide the lowest possible latency for smooth gameplay.",
    },
    {
      icon: "clock",
      title: "One-Click Installation",
      description:
        "Get your game server up and running in minutes with our easy-to-use control panel and one-click game installations.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#010901]">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Game Servers</h1>
            <p className="mb-8 text-xl text-gray-400">
              High-performance game servers with low latency, DDoS protection, and easy setup for all your favorite
              games.
            </p>
          </div>
        </div>
      </section>

      {/* Game Options Section */}
      <section className="py-16 relative">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {gameOptions.map((game, index) => (
              <Link key={index} href={game.href} className="group">
                <div className="relative overflow-hidden rounded-lg border border-green-500/20 bg-[#010901]/70 backdrop-blur-md hover:border-green-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-[28rem] overflow-hidden">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-white mb-1">{game.name}</h3>
                    <p className="text-green-400">Starting at $4.99</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection features={gameFeatures} />

      {/* Discord CTA */}
      <DiscordCTA />
    </div>
  )
}
