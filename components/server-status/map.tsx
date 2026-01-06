"use client"

import { useEffect, useRef } from "react"
import type { Server } from "@/lib/server-status-data"

interface ServerStatusMapProps {
  servers: Server[]
}

export function ServerStatusMap({ servers }: ServerStatusMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Map server locations to coordinates
  const locationCoordinates: Record<string, { x: number; y: number }> = {
    "New York": { x: 0.25, y: 0.35 },
    London: { x: 0.45, y: 0.28 },
    Tokyo: { x: 0.82, y: 0.35 },
    Singapore: { x: 0.75, y: 0.55 },
    Frankfurt: { x: 0.5, y: 0.3 },
    Sydney: { x: 0.85, y: 0.75 },
    "San Francisco": { x: 0.15, y: 0.38 },
    Amsterdam: { x: 0.48, y: 0.27 },
    "São Paulo": { x: 0.35, y: 0.65 },
  }

  // Status colors
  const statusColors = {
    operational: "#10b981",
    degraded: "#f59e0b",
    outage: "#ef4444",
    maintenance: "#3b82f6",
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (!container) return

      canvas.width = container.clientWidth
      canvas.height = container.clientWidth * 0.5 // 2:1 aspect ratio for world map
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Draw the map
    const drawMap = () => {
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw world map grid
      ctx.strokeStyle = "#1f2937"
      ctx.lineWidth = 0.5

      // Draw latitude lines
      for (let i = 0; i <= 10; i++) {
        const y = (i / 10) * canvas.height
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw longitude lines
      for (let i = 0; i <= 20; i++) {
        const x = (i / 20) * canvas.width
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw continents (simplified shapes)
      ctx.fillStyle = "#1f2937"

      // North America
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.05, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.25, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.3, canvas.height * 0.5)
      ctx.lineTo(canvas.width * 0.15, canvas.height * 0.6)
      ctx.lineTo(canvas.width * 0.05, canvas.height * 0.4)
      ctx.fill()

      // South America
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.25, canvas.height * 0.5)
      ctx.lineTo(canvas.width * 0.35, canvas.height * 0.5)
      ctx.lineTo(canvas.width * 0.3, canvas.height * 0.85)
      ctx.lineTo(canvas.width * 0.2, canvas.height * 0.7)
      ctx.fill()

      // Europe & Africa
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.4, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.55, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.6, canvas.height * 0.5)
      ctx.lineTo(canvas.width * 0.5, canvas.height * 0.8)
      ctx.lineTo(canvas.width * 0.4, canvas.height * 0.6)
      ctx.lineTo(canvas.width * 0.35, canvas.height * 0.3)
      ctx.fill()

      // Asia
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.55, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.85, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.8, canvas.height * 0.6)
      ctx.lineTo(canvas.width * 0.6, canvas.height * 0.5)
      ctx.fill()

      // Australia
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.75, canvas.height * 0.6)
      ctx.lineTo(canvas.width * 0.9, canvas.height * 0.6)
      ctx.lineTo(canvas.width * 0.85, canvas.height * 0.8)
      ctx.lineTo(canvas.width * 0.7, canvas.height * 0.8)
      ctx.fill()

      // Draw server locations
      servers.forEach((server) => {
        const location = locationCoordinates[server.location]
        if (!location) return

        const x = location.x * canvas.width
        const y = location.y * canvas.height

        // Draw pulse effect
        const pulseRadius = 15
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, pulseRadius)
        gradient.addColorStop(0, `${statusColors[server.status]}80`)
        gradient.addColorStop(1, `${statusColors[server.status]}00`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, pulseRadius, 0, Math.PI * 2)
        ctx.fill()

        // Draw server point
        ctx.fillStyle = statusColors[server.status]
        ctx.beginPath()
        ctx.arc(x, y, 5, 0, Math.PI * 2)
        ctx.fill()

        // Draw server name
        ctx.fillStyle = "#ffffff"
        ctx.font = "12px sans-serif"
        ctx.textAlign = "center"
        ctx.fillText(server.location, x, y - 15)
      })
    }

    // Initial draw
    drawMap()

    // Redraw on resize
    window.addEventListener("resize", drawMap)

    // Animation loop for pulse effect
    let animationFrame: number
    const animate = () => {
      drawMap()
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", drawMap)
      cancelAnimationFrame(animationFrame)
    }
  }, [servers])

  return (
    <div className="p-4 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md">
      <h3 className="mb-4 text-lg font-medium text-white">Global Server Network</h3>

      <div className="relative aspect-[2/1] w-full">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {Object.entries(statusColors).map(([status, color]) => (
          <div key={status} className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
            <span className="text-sm text-gray-400 capitalize">{status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
