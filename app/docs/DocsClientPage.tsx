"use client"

import { useState, useEffect, useRef } from "react"
import { SpaceBackground } from "@/components/space-background"
import { Button } from "@/components/ui/button"
import { ChevronRight, Search, Copy, Check, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function DocsClientPage() {
  const [copied, setCopied] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState("introduction")
  const [searchQuery, setSearchQuery] = useState("")
  const contentRef = useRef<HTMLDivElement>(null)

  // Add scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal")

    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealElements[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active")
        }
      }
    }

    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll() // Check on initial load

    return () => window.removeEventListener("scroll", revealOnScroll)
  }, [])

  // Scroll to top when section changes
  useEffect(() => {
    if (contentRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [activeSection])

  // Documentation sections
  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      subsections: [
        { id: "introduction", title: "Introduction" },
        { id: "quick-start", title: "Quick Start Guide" },
        { id: "account-setup", title: "Account Setup" },
      ],
    },
    {
      id: "game-servers",
      title: "Game Servers",
      subsections: [
        { id: "game-setup", title: "Server Setup" },
        { id: "game-configuration", title: "Game Configuration" },
        { id: "game-mods", title: "Installing Mods" },
      ],
    },
    {
      id: "vps-hosting",
      title: "VPS Hosting",
      subsections: [
        { id: "vps-setup", title: "VPS Setup" },
        { id: "vps-ssh", title: "SSH Access" },
        { id: "vps-scaling", title: "Resource Scaling" },
      ],
    },
    {
      id: "dedicated-servers",
      title: "Dedicated Servers",
      subsections: [
        { id: "dedicated-setup", title: "Server Setup" },
        { id: "dedicated-management", title: "Server Management" },
        { id: "dedicated-monitoring", title: "Monitoring" },
      ],
    },
    {
      id: "api-reference",
      title: "API Reference",
      subsections: [
        { id: "api-authentication", title: "Authentication" },
        { id: "api-servers", title: "Servers API" },
        { id: "api-users", title: "Users API" },
      ],
    },
  ]

  // Function to copy code to clipboard
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  // Filter sections based on search query
  const filteredSections = sections.filter((section) => {
    if (!searchQuery) return true

    const sectionMatch = section.title.toLowerCase().includes(searchQuery.toLowerCase())
    const subsectionMatch = section.subsections.some((sub) =>
      sub.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    return sectionMatch || subsectionMatch
  })

  // Handle sidebar navigation click
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
  }

  // Get current section content
  const renderContent = () => {
    switch (activeSection) {
      case "introduction":
        return (
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              Welcome to YourHost documentation. This guide will help you get started with our hosting services and
              provide detailed information on how to make the most of our platform.
            </p>
            <p className="text-gray-300 mb-4">
              YourHost provides high-performance hosting solutions for various needs, including game servers, VPS
              hosting, and dedicated servers. Our platform is designed to be easy to use while offering powerful
              features for advanced users.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Button className="bg-green-500 hover:bg-green-600 text-black">
                Get Started
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-green-500/20 text-green-400 hover:bg-green-500/10">
                View Examples
              </Button>
            </div>
          </section>
        )

      case "quick-start":
        return (
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Quick Start Guide</h2>
            <p className="text-gray-300 mb-4">Follow these steps to quickly set up your first server on YourHost:</p>
            <ol className="space-y-4 text-gray-300 list-decimal pl-5">
              <li>
                <strong className="text-white">Create an account</strong> - Sign up for a YourHost account if you
                haven't already.
              </li>
              <li>
                <strong className="text-white">Choose a hosting plan</strong> - Select the hosting plan that best fits
                your needs.
              </li>
              <li>
                <strong className="text-white">Configure your server</strong> - Set up your server with the desired
                specifications.
              </li>
              <li>
                <strong className="text-white">Deploy your server</strong> - Launch your server and start using it right
                away.
              </li>
            </ol>

            <div className="mt-6 p-4 bg-black/30 rounded-lg border border-green-500/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Example: Creating a server via API</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `curl -X POST https://api.yourhost.com/servers \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "name": "My Game Server",
  "type": "game",
  "game": "minecraft",
  "plan": "standard"
}'`,
                      "create-server",
                    )
                  }
                  className="text-gray-400 hover:text-green-400"
                  aria-label="Copy code"
                >
                  {copied === "create-server" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <pre className="text-gray-300 text-sm overflow-x-auto p-2">
                {`curl -X POST https://api.yourhost.com/servers \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "name": "My Game Server",
  "type": "game",
  "game": "minecraft",
  "plan": "standard"
}'`}
              </pre>
            </div>
          </section>
        )

      case "account-setup":
        return (
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Account Setup</h2>
            <p className="text-gray-300 mb-4">
              Setting up your account properly is essential for a smooth experience with YourHost. Here's how to
              configure your account settings:
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Security Recommendations</h3>
            <ul className="space-y-2 text-gray-300 list-disc pl-5">
              <li>Enable two-factor authentication for additional security</li>
              <li>Use a strong, unique password</li>
              <li>Regularly review account activity</li>
              <li>Set up IP restrictions for API access</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Billing Information</h3>
            <p className="text-gray-300 mb-4">
              Make sure to add your billing information to avoid any service interruptions. We accept credit cards,
              PayPal, and cryptocurrency payments.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link href="/account/security" className="inline-flex items-center text-green-400 hover:text-green-300">
                Security Settings
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/account/billing" className="inline-flex items-center text-green-400 hover:text-green-300">
                Billing Settings
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/account/api" className="inline-flex items-center text-green-400 hover:text-green-300">
                API Keys
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </section>
        )

      case "game-setup":
        return (
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Game Server Setup</h2>
            <p className="text-gray-300 mb-4">
              Setting up a game server with YourHost is quick and easy. Follow these steps to get your game server up
              and running.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Supported Games</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="p-3 border border-green-500/20 rounded-lg bg-black/30 text-center">
                <span className="text-white">Minecraft</span>
              </div>
              <div className="p-3 border border-green-500/20 rounded-lg bg-black/30 text-center">
                <span className="text-white">Counter-Strike 2</span>
              </div>
              <div className="p-3 border border-green-500/20 rounded-lg bg-black/30 text-center">
                <span className="text-white">ARK</span>
              </div>
              <div className="p-3 border border-green-500/20 rounded-lg bg-black/30 text-center">
                <span className="text-white">Rust</span>
              </div>
              <div className="p-3 border border-green-500/20 rounded-lg bg-black/30 text-center">
                <span className="text-white">Valheim</span>
              </div>
              <div className="p-3 border border-green-500/20 rounded-lg bg-black/30 text-center">
                <span className="text-white">And more...</span>
              </div>
            </div>

            <p className="text-gray-300 mb-4">
              Each game server comes pre-configured with optimal settings, but you can customize them to your needs.
            </p>
          </section>
        )

      case "game-configuration":
        return (
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Game Configuration</h2>
            <p className="text-gray-300 mb-4">
              Customize your game server settings to create the perfect gaming experience for you and your players.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Configuration Options</h3>
            <p className="text-gray-300 mb-4">
              Each game has different configuration options. Here are some common settings you can adjust:
            </p>

            <ul className="space-y-2 text-gray-300 list-disc pl-5">
              <li>
                <strong className="text-white">Server Name</strong> - Set a custom name for your server
              </li>
              <li>
                <strong className="text-white">Player Slots</strong> - Adjust the maximum number of players
              </li>
              <li>
                <strong className="text-white">Game Rules</strong> - Modify gameplay settings
              </li>
              <li>
                <strong className="text-white">Admin Access</strong> - Configure admin permissions
              </li>
              <li>
                <strong className="text-white">Backups</strong> - Set up automatic backups
              </li>
            </ul>

            <div className="mt-6 p-4 bg-black/30 rounded-lg border border-green-500/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Example: Minecraft server.properties</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `# Minecraft server properties
server-name=YourHost Minecraft Server
gamemode=survival
difficulty=normal
max-players=20
view-distance=10
enable-command-block=true
spawn-protection=16
pvp=true
allow-flight=false`,
                      "minecraft-config",
                    )
                  }
                  className="text-gray-400 hover:text-green-400"
                  aria-label="Copy code"
                >
                  {copied === "minecraft-config" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <pre className="text-gray-300 text-sm overflow-x-auto p-2">
                {`# Minecraft server properties
server-name=YourHost Minecraft Server
gamemode=survival
difficulty=normal
max-players=20
view-distance=10
enable-command-block=true
spawn-protection=16
pvp=true
allow-flight=false`}
              </pre>
            </div>
          </section>
        )

      case "game-mods":
        return (
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Installing Mods</h2>
            <p className="text-gray-300 mb-4">
              Enhance your game server with mods and plugins to add new features and functionality.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Mod Installation</h3>
            <p className="text-gray-300 mb-4">
              YourHost makes it easy to install mods on your game server. Here's how:
            </p>

            <ol className="space-y-4 text-gray-300 list-decimal pl-5">
              <li>
                <strong className="text-white">Access your server control panel</strong> - Log in to your YourHost
                account and navigate to your server dashboard
              </li>
              <li>
                <strong className="text-white">Open the Mods section</strong> - Find the Mods or Plugins section in your
                control panel
              </li>
              <li>
                <strong className="text-white">Browse available mods</strong> - Browse our collection of pre-approved
                mods or upload your own
              </li>
              <li>
                <strong className="text-white">Install and activate</strong> - Click Install on your chosen mods, then
                activate them
              </li>
              <li>
                <strong className="text-white">Restart your server</strong> - Restart your server to apply the changes
              </li>
            </ol>

            <div className="mt-6 p-4 bg-black/30 rounded-lg border border-green-500/20">
              <h4 className="text-white font-medium mb-2">Popular Mods by Game</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-green-400 font-medium mb-1">Minecraft</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Essentials</li>
                    <li>• WorldEdit</li>
                    <li>• Vault</li>
                    <li>• PermissionsEx</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-green-400 font-medium mb-1">ARK</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Structures Plus</li>
                    <li>• Super Spyglass</li>
                    <li>• Classic Flyers</li>
                    <li>• Automated Ark</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )

      case "api-authentication":
        return (
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">API Authentication</h2>
            <p className="text-gray-300 mb-4">
              All API requests must be authenticated using an API key. You can generate API keys in your account
              dashboard.
            </p>

            <div className="mt-6 p-4 bg-black/30 rounded-lg border border-green-500/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Example: Authentication Header</span>
                <button
                  onClick={() => copyToClipboard(`Authorization: Bearer YOUR_API_KEY`, "auth-header")}
                  className="text-gray-400 hover:text-green-400"
                  aria-label="Copy code"
                >
                  {copied === "auth-header" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <pre className="text-gray-300 text-sm overflow-x-auto p-2">Authorization: Bearer YOUR_API_KEY</pre>
            </div>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Rate Limiting</h3>
            <p className="text-gray-300 mb-4">
              The API is rate limited to 100 requests per minute per API key. If you exceed this limit, you'll receive a
              429 Too Many Requests response.
            </p>
          </section>
        )

      case "api-servers":
        return (
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Servers API</h2>
            <p className="text-gray-300 mb-4">
              The Servers API allows you to manage your servers programmatically. You can create, update, delete, and
              retrieve information about your servers.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Endpoints</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-green-400 mb-2">List Servers</h4>
                <div className="p-3 bg-black/30 rounded-lg border border-green-500/20">
                  <code className="text-gray-300">GET /api/v1/servers</code>
                </div>
                <p className="text-gray-400 mt-2 text-sm">
                  Returns a list of all servers associated with your account.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-green-400 mb-2">Get Server</h4>
                <div className="p-3 bg-black/30 rounded-lg border border-green-500/20">
                  <code className="text-gray-300">GET /api/v1/servers/{"{server_id}"}</code>
                </div>
                <p className="text-gray-400 mt-2 text-sm">Returns detailed information about a specific server.</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-green-400 mb-2">Create Server</h4>
                <div className="p-3 bg-black/30 rounded-lg border border-green-500/20">
                  <code className="text-gray-300">POST /api/v1/servers</code>
                </div>
                <p className="text-gray-400 mt-2 text-sm">Creates a new server with the specified configuration.</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-green-400 mb-2">Update Server</h4>
                <div className="p-3 bg-black/30 rounded-lg border border-green-500/20">
                  <code className="text-gray-300">PUT /api/v1/servers/{"{server_id}"}</code>
                </div>
                <p className="text-gray-400 mt-2 text-sm">Updates the configuration of an existing server.</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-green-400 mb-2">Delete Server</h4>
                <div className="p-3 bg-black/30 rounded-lg border border-green-500/20">
                  <code className="text-gray-300">DELETE /api/v1/servers/{"{server_id}"}</code>
                </div>
                <p className="text-gray-400 mt-2 text-sm">Deletes a server. This action is irreversible.</p>
              </div>
            </div>
          </section>
        )

      case "api-users":
        return (
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Users API</h2>
            <p className="text-gray-300 mb-4">
              The Users API allows you to manage user accounts and permissions programmatically.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Endpoints</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-green-400 mb-2">Get Current User</h4>
                <div className="p-3 bg-black/30 rounded-lg border border-green-500/20">
                  <code className="text-gray-300">GET /api/v1/users/me</code>
                </div>
                <p className="text-gray-400 mt-2 text-sm">Returns information about the authenticated user.</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-green-400 mb-2">Update User</h4>
                <div className="p-3 bg-black/30 rounded-lg border border-green-500/20">
                  <code className="text-gray-300">PUT /api/v1/users/me</code>
                </div>
                <p className="text-gray-400 mt-2 text-sm">Updates the authenticated user's profile information.</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-green-400 mb-2">List Team Members</h4>
                <div className="p-3 bg-black/30 rounded-lg border border-green-500/20">
                  <code className="text-gray-300">GET /api/v1/team/members</code>
                </div>
                <p className="text-gray-400 mt-2 text-sm">Returns a list of all team members for your organization.</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-green-400 mb-2">Invite Team Member</h4>
                <div className="p-3 bg-black/30 rounded-lg border border-green-500/20">
                  <code className="text-gray-300">POST /api/v1/team/invite</code>
                </div>
                <p className="text-gray-400 mt-2 text-sm">
                  Sends an invitation to join your team to the specified email address.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-green-400 mb-2">Remove Team Member</h4>
                <div className="p-3 bg-black/30 rounded-lg border border-green-500/20">
                  <code className="text-gray-300">DELETE /api/v1/team/members/{"{member_id}"}</code>
                </div>
                <p className="text-gray-400 mt-2 text-sm">Removes a team member from your organization.</p>
              </div>
            </div>
          </section>
        )

      default:
        return (
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Documentation Coming Soon</h2>
            <p className="text-gray-300 mb-4">
              We're currently working on this section of the documentation. Check back soon for updates!
            </p>
            <div className="p-6 border border-green-500/20 rounded-lg bg-black/30 text-center">
              <h3 className="text-xl font-medium text-green-400 mb-2">Coming Soon</h3>
              <p className="text-gray-400">This documentation is under development and will be available shortly.</p>
            </div>
          </section>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#010901] pt-16 pb-16">
      <SpaceBackground />

      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-8 text-center reveal">
          <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-4">
            <span>Documentation</span>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">YourHost Documentation</h1>
          <p className="text-gray-400 md:text-lg">
            Comprehensive guides and documentation to help you get the most out of our hosting services.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mt-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search documentation..."
              className="pl-10 bg-[#010901]/70 border-green-500/20 focus:border-green-500/50 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="sticky top-24 p-4 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md">
              <h3 className="mb-4 text-lg font-medium text-white">Documentation</h3>
              <nav className="space-y-1">
                {filteredSections.map((section) => (
                  <div key={section.id} className="mb-4">
                    <button
                      onClick={() => handleNavClick(section.subsections[0].id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        section.subsections.some((sub) => sub.id === activeSection)
                          ? "bg-green-500/20 text-green-400"
                          : "text-gray-300 hover:bg-green-500/10 hover:text-green-400"
                      }`}
                    >
                      {section.title}
                    </button>

                    <div className="mt-2 ml-4 space-y-1 border-l border-green-500/20 pl-2">
                      {section.subsections.map((subsection) => (
                        <button
                          key={subsection.id}
                          onClick={() => handleNavClick(subsection.id)}
                          className={`block w-full text-left px-3 py-1 text-sm transition-colors ${
                            activeSection === subsection.id
                              ? "text-green-400 font-medium"
                              : "text-gray-400 hover:text-green-400"
                          }`}
                        >
                          {subsection.title}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 lg:col-span-4" ref={contentRef}>
            <div className="p-6 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md">
              <div className="space-y-8 reveal">{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
