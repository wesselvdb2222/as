import { SpaceBackground } from "@/components/space-background"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Zap,
  Clock,
  ChevronRight,
  Globe,
  Server,
  Users,
  Rocket,
  Target,
  Award,
  Cpu,
  Network,
  Wifi,
  Lock,
  BarChart,
  HeartHandshake,
} from "lucide-react"

export const metadata = {
  title: "About Us - YourHost",
  description: "Learn about YourHost, our mission, values, and the team behind our hosting services.",
}

export default function AboutUsPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Alex has over 15 years of experience in the hosting industry and founded YourHost with a vision to provide next-generation hosting solutions.",
      image: "/confident-tech-leader.png",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Sarah leads our technical team and oversees the development and maintenance of our infrastructure and services.",
      image: "/tech-cto-portrait.png",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Customer Support",
      bio: "Michael ensures that our customers receive the best possible support and assistance with their hosting needs.",
      image: "/confident-support-manager.png",
    },
  ]

  // Data centers data with more detailed information
  const dataCenters = [
    {
      location: "New York",
      region: "North America",
      specs: {
        network: "10 Tbps Network Capacity",
        power: "N+1 Power Redundancy",
        cooling: "Advanced Cooling Systems",
      },
      latency: "< 20ms to East Coast US",
      icon: <Server className="w-10 h-10 text-green-400" />,
      flagImage: "/usa-flag.png",
    },
    {
      location: "San Francisco",
      region: "North America",
      specs: {
        network: "8 Tbps Network Capacity",
        power: "2N Power Redundancy",
        cooling: "Eco-friendly Cooling",
      },
      latency: "< 25ms to West Coast US",
      icon: <Server className="w-10 h-10 text-green-400" />,
      flagImage: "/usa-flag.png",
    },
    {
      location: "London",
      region: "Europe",
      specs: {
        network: "12 Tbps Network Capacity",
        power: "2N+1 Power Redundancy",
        cooling: "Liquid Cooling Technology",
      },
      latency: "< 15ms to Western Europe",
      icon: <Globe className="w-10 h-10 text-green-400" />,
      flagImage: "/uk-flag.png",
    },
    {
      location: "Frankfurt",
      region: "Europe",
      specs: {
        network: "15 Tbps Network Capacity",
        power: "N+2 Power Redundancy",
        cooling: "Advanced Cooling Systems",
      },
      latency: "< 10ms to Central Europe",
      icon: <Globe className="w-10 h-10 text-green-400" />,
      flagImage: "/germany-flag.png",
    },
    {
      location: "Tokyo",
      region: "Asia Pacific",
      specs: {
        network: "14 Tbps Network Capacity",
        power: "2N Power Redundancy",
        cooling: "High-efficiency Cooling",
      },
      latency: "< 20ms to Japan",
      icon: <Globe className="w-10 h-10 text-green-400" />,
      flagImage: "/japan-flag.png",
    },
    {
      location: "Singapore",
      region: "Asia Pacific",
      specs: {
        network: "10 Tbps Network Capacity",
        power: "N+1 Power Redundancy",
        cooling: "Energy-efficient Cooling",
      },
      latency: "< 15ms to Southeast Asia",
      icon: <Globe className="w-10 h-10 text-green-400" />,
      flagImage: "/singapore-flag.png",
    },
  ]

  return (
    <div className="min-h-screen bg-[#010901]">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-4">
                <Rocket className="w-4 h-4 mr-1" />
                <span>Our Story</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">About YourHost</h1>
              <p className="text-xl text-gray-300">
                We're a team of passionate gamers and tech enthusiasts dedicated to providing the highest quality
                hosting solutions for gaming communities worldwide.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-lg border border-green-500/20">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="text-white">Founded in 2018</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-lg border border-green-500/20">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-white">50+ Team Members</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-lg border border-green-500/20">
                  <Globe className="w-5 h-5 text-green-400" />
                  <span className="text-white">Global Presence</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative z-10 rounded-lg border border-green-500/20 shadow-[0_0_25px_rgba(16,185,129,0.3)] overflow-hidden">
                <Image
                  src="/server-room-maintenance.png"
                  alt="YourHost Team"
                  width={600}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm">Our state-of-the-art data center in New York</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 relative">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md hover:border-green-400/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300 mr-4">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300">
                To provide reliable, high-performance hosting solutions that empower gaming communities and businesses
                to establish and grow their online presence. We believe that everyone deserves access to fast, secure,
                and scalable hosting services at affordable prices.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Deliver unmatched performance and reliability</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Provide exceptional customer support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Offer transparent and fair pricing</span>
                </li>
              </ul>
            </div>
            <div className="p-8 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md hover:border-green-400/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300 mr-4">
                  <Rocket className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300">
                To become the leading hosting provider for gaming communities worldwide, known for exceptional
                performance, reliability, and customer service. We aim to continuously innovate and improve our
                infrastructure to meet the evolving needs of gamers and developers.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Lead the industry in hosting technology</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Expand our global network of data centers</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Build lasting relationships with our customers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-4">
              <Users className="w-4 h-4 mr-1" />
              <span>Meet The Team</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Our Leadership Team</h2>
            <p className="text-gray-400">
              Our experienced team of industry veterans is dedicated to providing the best hosting experience for our
              customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md hover:border-green-400/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-2 border-green-500/30 group-hover:border-green-400/50 transition-all duration-300">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-green-400 mb-4">{member.role}</p>
                <p className="text-gray-300">{member.bio}</p>
                <div className="flex justify-center mt-4 space-x-3">
                  <a href="#" className="p-2 rounded-full bg-green-500/10 hover:bg-green-500/20 transition-colors">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 rounded-full bg-green-500/10 hover:bg-green-500/20 transition-colors">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="p-2 rounded-full bg-green-500/10 hover:bg-green-500/20 transition-colors">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Centers Section */}
      <section className="py-16 relative bg-black/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-4">
              <Server className="w-4 h-4 mr-1" />
              <span>Global Infrastructure</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Our Data Centers</h2>
            <p className="text-gray-400">
              We operate state-of-the-art data centers in strategic locations around the world to ensure low latency and
              high availability for our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataCenters.map((center, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md hover:border-green-400/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full border border-green-500/30">
                    <Image
                      src={center.flagImage || "/placeholder.svg"}
                      alt={`${center.location} Flag`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{center.location}</h3>
                    <p className="text-green-400">{center.region}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Network className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{center.specs.network}</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{center.specs.power}</span>
                  </div>
                  <div className="flex items-center">
                    <Cpu className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{center.specs.cooling}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-green-500/20">
                  <div className="flex items-center">
                    <Wifi className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-white">
                      Latency: <span className="text-green-400">{center.latency}</span>
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-500/20 text-green-400 hover:bg-green-500/10"
                  >
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <BarChart className="w-8 h-8 text-green-400 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-white">Network Performance</h3>
                  <p className="text-gray-300">Our global network is optimized for low latency and high throughput</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99.99%</div>
                  <div className="text-green-400 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">69 Tbps</div>
                  <div className="text-green-400 text-sm">Total Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">6</div>
                  <div className="text-green-400 text-sm">Data Centers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DDoS Protection Section */}
      <section className="py-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md hover:border-green-400/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="p-4 rounded-full bg-green-500/10 mb-4 md:mb-0 md:mr-6">
                  <Shield className="w-16 h-16 text-green-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Advanced DDoS Protection by YourDddosProtection
                  </h2>
                  <p className="text-gray-300">
                    Our infrastructure is secured with enterprise-grade DDoS protection by Cosmic Guard, ensuring your
                    servers remain online even during the most sophisticated attacks. We utilize multi-layer filtering
                    and traffic scrubbing to neutralize threats before they reach your resources.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 border border-green-500/20 rounded-lg bg-black/30 hover:bg-black/50 transition-colors group">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300 mr-3">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-medium text-white">Layer 3/4 & 7 Protection</h3>
                  </div>
                  <p className="text-gray-400">Up to 5Tbps capacity to handle even the largest volumetric attacks</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>TCP/UDP Flood Protection</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>SYN Flood Mitigation</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>HTTP/S Attack Defense</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 border border-green-500/20 rounded-lg bg-black/30 hover:bg-black/50 transition-colors group">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300 mr-3">
                      <Zap className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-medium text-white">Automatic Mitigation</h3>
                  </div>
                  <p className="text-gray-400">Near-zero latency impact with intelligent traffic analysis</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>Real-time Traffic Analysis</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>AI-powered Threat Detection</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>Instant Response System</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 border border-green-500/20 rounded-lg bg-black/30 hover:bg-black/50 transition-colors group">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300 mr-3">
                      <Clock className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-medium text-white">24/7 Security Monitoring</h3>
                  </div>
                  <p className="text-gray-400">Continuous monitoring by our dedicated network operations team</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>Round-the-clock Surveillance</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>Proactive Threat Hunting</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      <span>Incident Response Team</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                <div className="flex items-center">
                  <Lock className="w-5 h-5 text-green-400 mr-3" />
                  <p className="text-white">
                    <span className="font-bold">Security Guarantee:</span>
                    <span className="text-gray-300">
                      {" "}
                      We offer a 100% uptime SLA against DDoS attacks with automatic mitigation at no additional cost.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-4">
              <HeartHandshake className="w-4 h-4 mr-1" />
              <span>Join Us Today</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Partner with a team that's passionate about your success
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Experience the difference of working with a hosting provider that truly understands the needs of gamers
              and developers. Our team is ready to support your journey.
            </p>
            <Button className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-black font-bold transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] px-8 py-6 text-lg">
              <span className="relative z-10 flex items-center">
                Choose a plan
                <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
