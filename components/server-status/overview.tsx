import type { ServerStatusData } from "@/lib/server-status-data"
import { CheckCircle, AlertTriangle, XCircle, Clock } from "lucide-react"

interface ServerStatusOverviewProps {
  data: ServerStatusData
  lastUpdated: Date
}

export function ServerStatusOverview({ data, lastUpdated }: ServerStatusOverviewProps) {
  // Calculate overall status
  const statusCounts = {
    operational: 0,
    degraded: 0,
    outage: 0,
    maintenance: 0,
  }

  data.servers.forEach((server) => {
    statusCounts[server.status]++
  })

  const totalServers = data.servers.length
  const operationalPercentage = Math.round((statusCounts.operational / totalServers) * 100)

  // Determine overall system status
  let overallStatus = "Fully Operational"
  let statusColor = "bg-green-500"
  let statusIcon = <CheckCircle className="w-5 h-5 text-green-400" />

  if (statusCounts.outage > 0) {
    overallStatus = "Partial Outage"
    statusColor = "bg-red-500"
    statusIcon = <XCircle className="w-5 h-5 text-red-400" />
  } else if (statusCounts.degraded > 0) {
    overallStatus = "Performance Degraded"
    statusColor = "bg-yellow-500"
    statusIcon = <AlertTriangle className="w-5 h-5 text-yellow-400" />
  } else if (statusCounts.maintenance > 0) {
    overallStatus = "Maintenance in Progress"
    statusColor = "bg-blue-500"
    statusIcon = <Clock className="w-5 h-5 text-blue-400" />
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Overall Status Card */}
      <div className="col-span-1 md:col-span-2 p-6 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">System Status</h3>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${statusColor} animate-pulse`}></div>
            <span className="text-sm text-gray-400">Last updated: {lastUpdated.toLocaleTimeString()}</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 mb-4">
          {statusIcon}
          <span className="text-2xl font-bold text-white">{overallStatus}</span>
        </div>

        <div className="grid grid-cols-4 gap-2 mt-4">
          <StatusBadge count={statusCounts.operational} total={totalServers} type="operational" />
          <StatusBadge count={statusCounts.degraded} total={totalServers} type="degraded" />
          <StatusBadge count={statusCounts.outage} total={totalServers} type="outage" />
          <StatusBadge count={statusCounts.maintenance} total={totalServers} type="maintenance" />
        </div>
      </div>

      {/* Uptime Card */}
      <div className="p-6 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md">
        <h3 className="mb-4 text-lg font-bold text-white">Uptime</h3>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-3xl font-bold text-white">{operationalPercentage}%</span>
            <p className="text-sm text-gray-400">Last 30 days</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
            <div
              className="w-12 h-12 rounded-full border-4 border-green-400"
              style={{
                background: `conic-gradient(#10b981 ${operationalPercentage}%, transparent 0)`,
                transform: "rotate(-90deg)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Response Time Card */}
      <div className="p-6 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md">
        <h3 className="mb-4 text-lg font-bold text-white">Avg. Response Time</h3>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-3xl font-bold text-white">{data.averageResponseTime}ms</span>
            <p className="text-sm text-gray-400">Global average</p>
          </div>
          <div className="text-green-400">
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

interface StatusBadgeProps {
  count: number
  total: number
  type: "operational" | "degraded" | "outage" | "maintenance"
}

function StatusBadge({ count, total, type }: StatusBadgeProps) {
  const labels = {
    operational: "Operational",
    degraded: "Degraded",
    outage: "Outage",
    maintenance: "Maintenance",
  }

  const colors = {
    operational: "bg-green-500/10 text-green-400 border-green-500/20",
    degraded: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    outage: "bg-red-500/10 text-red-400 border-red-500/20",
    maintenance: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  }

  return (
    <div className={`text-center p-2 rounded-md ${colors[type]} border`}>
      <div className="text-lg font-bold">{count}</div>
      <div className="text-xs">{labels[type]}</div>
    </div>
  )
}
