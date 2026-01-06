"use client"

import type React from "react"

import { useState } from "react"
import type { Server } from "@/lib/server-status-data"
import { CheckCircle, AlertTriangle, XCircle, Clock, ChevronDown, Cpu, HardDrive, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { UptimeGraph } from "./uptime-graph"
import { Progress } from "@/components/ui/progress"

// Update the ServerStatusDetails component to remove maintenanceEvents props
interface ServerStatusDetailsProps {
  servers: Server[]
}

export function ServerStatusDetails({ servers }: ServerStatusDetailsProps) {
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
  const [locationFilter, setLocationFilter] = useState<string | null>(null)

  // Get unique locations for filter
  const locations = Array.from(new Set(servers.map((server) => server.location)))

  // Get unique categories for filter
  const categories = Array.from(new Set(servers.map((server) => server.category)))

  // Filter servers based on filters
  const filteredServers = servers.filter((server) => {
    const matchesStatus = statusFilter ? server.status === statusFilter : true
    const matchesLocation = locationFilter ? server.location === locationFilter : true
    const matchesCategory = categoryFilter ? server.category === categoryFilter : true

    return matchesStatus && matchesLocation && matchesCategory
  })

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white mb-4">Server Status</h2>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4">
        <div className="flex flex-wrap gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-green-500/20 text-white">
                Status: {statusFilter || "All"}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#010901] border-green-500/20">
              <DropdownMenuItem onClick={() => setStatusFilter(null)}>All</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("operational")}>Operational</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("degraded")}>Degraded</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("outage")}>Outage</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("maintenance")}>Maintenance</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-green-500/20 text-white">
                Category: {categoryFilter || "All"}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#010901] border-green-500/20">
              <DropdownMenuItem onClick={() => setCategoryFilter(null)}>All</DropdownMenuItem>
              {categories.map((category) => (
                <DropdownMenuItem key={category} onClick={() => setCategoryFilter(category)}>
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-green-500/20 text-white">
                Location: {locationFilter || "All"}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#010901] border-green-500/20">
              <DropdownMenuItem onClick={() => setLocationFilter(null)}>All</DropdownMenuItem>
              {locations.map((location) => (
                <DropdownMenuItem key={location} onClick={() => setLocationFilter(location)}>
                  {location}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="space-y-4">
        {filteredServers.length === 0 ? (
          <div className="text-center py-12 text-gray-400">No servers match your filter criteria</div>
        ) : (
          filteredServers.map((server) => <ServerCard key={server.id} server={server} />)
        )}
      </div>
    </div>
  )
}

// Replace the ServerCard component with a simplified version

function ServerCard({ server }: { server: Server }) {
  const [expanded, setExpanded] = useState(false)

  const statusIcons = {
    operational: <CheckCircle className="w-5 h-5 text-green-400" />,
    degraded: <AlertTriangle className="w-5 h-5 text-yellow-400" />,
    outage: <XCircle className="w-5 h-5 text-red-400" />,
    maintenance: <Clock className="w-5 h-5 text-blue-400" />,
  }

  const statusColors = {
    operational: "text-green-400",
    degraded: "text-yellow-400",
    outage: "text-red-400",
    maintenance: "text-blue-400",
  }

  const statusLabels = {
    operational: "Operational",
    degraded: "Degraded Performance",
    outage: "Service Outage",
    maintenance: "Scheduled Maintenance",
  }

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div
      className={`border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-green-400/30 ${
        expanded ? "hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]" : "hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
      }`}
    >
      <div className="p-4 flex items-center justify-between cursor-pointer" onClick={toggleExpanded}>
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10">
            {statusIcons[server.status]}
          </div>

          <div>
            <h3 className="font-medium text-white">{server.name}</h3>
            <div className="flex items-center text-sm">
              <span className={`${statusColors[server.status]}`}>{statusLabels[server.status]}</span>
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-gray-400">{server.location}</span>
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-gray-400">{server.category}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right hidden md:block">
            <div className="text-sm text-gray-400">{server.type}</div>
            <div className="text-sm text-gray-400">ID: {server.id}</div>
          </div>

          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform duration-500 ${expanded ? "transform rotate-180" : ""}`}
          />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 border-t border-green-500/10 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <MetricCard
              icon={<Cpu className="w-4 h-4" />}
              title="CPU Load"
              current={server.metrics.cpu.current}
              max={server.metrics.cpu.max}
              unit="%"
              warningThreshold={70}
              criticalThreshold={90}
            />

            <MetricCard
              icon={<HardDrive className="w-4 h-4" />}
              title="Memory Usage"
              current={server.metrics.memory.current}
              max={server.metrics.memory.max}
              unit="%"
              warningThreshold={75}
              criticalThreshold={90}
            />

            <MetricCard
              icon={<Network className="w-4 h-4" />}
              title="Network Traffic"
              current={server.metrics.network.current}
              max={server.metrics.network.max}
              unit="Mbps"
              warningThreshold={70}
              criticalThreshold={90}
            />
          </div>

          <div className="mt-4 mb-4">
            <UptimeGraph data={server.uptimeHistory.last30Days} average={server.uptimeHistory.average} />
          </div>

          <div className="mt-4 text-sm text-gray-400">
            <div className="flex justify-between">
              <span>Last reboot: {server.lastReboot}</span>
              <span>Uptime: {server.uptime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface MetricCardProps {
  icon: React.ReactNode
  title: string
  current: number
  max: number
  unit: string
  warningThreshold: number
  criticalThreshold: number
}

function MetricCard({ icon, title, current, max, unit, warningThreshold, criticalThreshold }: MetricCardProps) {
  const percentage = (current / max) * 100

  let progressColor = "bg-green-400"
  if (percentage >= criticalThreshold) {
    progressColor = "bg-red-400"
  } else if (percentage >= warningThreshold) {
    progressColor = "bg-yellow-400"
  }

  return (
    <div className="p-3 rounded-md bg-green-500/5 border border-green-500/10">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          {icon}
          <span>{title}</span>
        </div>
        <span className="text-sm font-medium text-white">
          {current}
          {unit} / {max}
          {unit}
        </span>
      </div>

      <Progress value={percentage} className="h-2 bg-gray-800" indicatorClassName={progressColor} />
    </div>
  )
}
