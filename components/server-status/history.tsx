"use client"

import { useState } from "react"
import type { Server } from "@/lib/server-status-data"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ServerStatusHistoryProps {
  servers: Server[]
}

export function ServerStatusHistory({ servers }: ServerStatusHistoryProps) {
  const [selectedServer, setSelectedServer] = useState(servers[0]?.id || "")
  const [timeRange, setTimeRange] = useState("24h")

  const server = servers.find((s) => s.id === selectedServer) || servers[0]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-4">
          <Select value={selectedServer} onValueChange={setSelectedServer}>
            <SelectTrigger className="w-[200px] bg-[#010901] border-green-500/20">
              <SelectValue placeholder="Select server" />
            </SelectTrigger>
            <SelectContent className="bg-[#010901] border-green-500/20">
              {servers.map((server) => (
                <SelectItem key={server.id} value={server.id}>
                  {server.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="text-sm text-gray-400">
            {server?.location} • {server?.type}
          </div>
        </div>

        <div className="flex space-x-2">
          <Button
            variant={timeRange === "24h" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange("24h")}
            className={timeRange === "24h" ? "bg-green-500 hover:bg-green-600" : "border-green-500/20"}
          >
            24 Hours
          </Button>
          <Button
            variant={timeRange === "7d" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange("7d")}
            className={timeRange === "7d" ? "bg-green-500 hover:bg-green-600" : "border-green-500/20"}
          >
            7 Days
          </Button>
          <Button
            variant={timeRange === "30d" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange("30d")}
            className={timeRange === "30d" ? "bg-green-500 hover:bg-green-600" : "border-green-500/20"}
          >
            30 Days
          </Button>
        </div>
      </div>
    </div>
  )
}
