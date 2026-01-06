"use client"

import { useState, useEffect } from "react"
import { ServerStatusOverview } from "./overview"
import { ServerStatusDetails } from "./details"
import { ServerStatusHistory } from "./history"
import { ServerStatusMap } from "./map"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ServerStatusData } from "@/lib/server-status-data"

interface ServerStatusDashboardProps {
  data: ServerStatusData
}

export function ServerStatusDashboard({ data }: ServerStatusDashboardProps) {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update random server metrics to simulate real-time changes
      const updatedData = { ...data }

      // Update random server load
      const randomServerIndex = Math.floor(Math.random() * updatedData.servers.length)
      const randomServer = updatedData.servers[randomServerIndex]

      // Randomly update CPU load (with some constraints to make it realistic)
      const currentCpuLoad = randomServer.metrics.cpu.current
      const cpuChange = Math.random() * 10 - 5 // -5 to +5 change
      let newCpuLoad = currentCpuLoad + cpuChange
      newCpuLoad = Math.max(5, Math.min(95, newCpuLoad)) // Keep between 5% and 95%

      // Update memory usage similarly
      const currentMemoryUsage = randomServer.metrics.memory.current
      const memoryChange = Math.random() * 8 - 4 // -4 to +4 change
      let newMemoryUsage = currentMemoryUsage + memoryChange
      newMemoryUsage = Math.max(10, Math.min(90, newMemoryUsage)) // Keep between 10% and 90%

      // Update network traffic
      const currentNetwork = randomServer.metrics.network.current
      const networkChange = Math.random() * 20 - 5 // More likely to increase than decrease
      let newNetwork = currentNetwork + networkChange
      newNetwork = Math.max(5, newNetwork) // Keep above 5 Mbps

      // Apply the updates
      updatedData.servers[randomServerIndex].metrics.cpu.current = Math.round(newCpuLoad)
      updatedData.servers[randomServerIndex].metrics.memory.current = Math.round(newMemoryUsage)
      updatedData.servers[randomServerIndex].metrics.network.current = Math.round(newNetwork)

      setLastUpdated(new Date())
    }, 5000)

    return () => clearInterval(interval)
  }, [data])

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <ServerStatusOverview data={data} lastUpdated={lastUpdated} />

      {/* Server List - Moved higher up */}
      <div className="mt-4">
        <ServerStatusDetails servers={data.servers} />
      </div>

      {/* Tabs for History and Map */}
      <Tabs defaultValue="history" className="w-full mt-8">
        <TabsList className="grid w-full grid-cols-2 bg-[#010901] border border-green-500/20 rounded-lg h-auto">
          <TabsTrigger
            value="history"
            className="py-3 data-[state=active]:bg-green-500/10 data-[state=active]:text-green-400 rounded-md"
          >
            Performance History
          </TabsTrigger>
          <TabsTrigger
            value="map"
            className="py-3 data-[state=active]:bg-green-500/10 data-[state=active]:text-green-400 rounded-md"
          >
            Global Map
          </TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="mt-6">
          <ServerStatusHistory servers={data.servers} />
        </TabsContent>

        <TabsContent value="map" className="mt-6">
          <ServerStatusMap servers={data.servers} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
