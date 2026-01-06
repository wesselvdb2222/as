import { ServerStatusDashboard } from "@/components/server-status/dashboard"
import { SpaceBackground } from "@/components/space-background"
import { serverStatusData } from "@/lib/server-status-data"

export const metadata = {
  title: "Server Status - CosmicHost",
  description: "Real-time status and performance metrics for all CosmicHost servers.",
}

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#010901] pt-16 pb-16">
      <SpaceBackground />
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-4">
            <span>Live Status</span>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">Server Status Dashboard</h1>
          <p className="text-gray-400 md:text-lg">
            Monitor the real-time performance and status of our global server infrastructure.
          </p>
        </div>

        <ServerStatusDashboard data={serverStatusData} />
      </div>
    </div>
  )
}
