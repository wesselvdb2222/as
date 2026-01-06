"use client"

import { Star } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function VideoSection() {
  return (
    <section className="py-20 relative">
      <div className="container px-4 mx-auto">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 mb-4">
        <span>Video</span>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Watch Our Introduction</h2>
        <p className="text-gray-400">
        See what makes our agency services stand out. Watch our short video below.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="relative w-full max-w-3xl aspect-video">
        {/* Purple shadow box */}
        <div className="absolute inset-0 rounded-lg pointer-events-none" style={{
          boxShadow: "0 8px 40px 0 rgba(168, 85, 247, 0.5), 0 0 0 8px rgba(168,85,247,0.15)"
        }} />
        {/* Video box */}
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg border-0 bg-[#010901]/70 backdrop-blur-md">
          <iframe
          src="https://player.vimeo.com/video/1102347545?h=8e35e26d04&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="AS - #1"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          ></iframe>
        </div>
        </div>
      </div>
      </div>
    </section>
  )
}
