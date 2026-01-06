"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[#010901]">
        <Image src="/images/starbg1.svg" alt="Grid Background" fill className="object-cover opacity-20" priority />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#010901]/50 to-[#010901]"></div>
      <div className="absolute inset-0">
        <StarField />
      </div>
    </div>
  )
}

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Star class
    class Star {
      x: number
      y: number
      size: number
      opacity: number
      pulseSpeed: number
      pulseDirection: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.opacity = Math.random() * 0.5 + 0.3
        this.pulseSpeed = Math.random() * 0.01 + 0.005
        this.pulseDirection = 1
      }

      update() {
        // Pulsing effect
        this.opacity += this.pulseSpeed * this.pulseDirection
        if (this.opacity >= 0.8 || this.opacity <= 0.3) {
          this.pulseDirection *= -1
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create stars
    const starsArray: Star[] = []
    const numberOfStars = Math.min(200, Math.floor((canvas.width * canvas.height) / 10000))

    for (let i = 0; i < numberOfStars; i++) {
      starsArray.push(new Star())
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < starsArray.length; i++) {
        starsArray[i].update()
        starsArray[i].draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
