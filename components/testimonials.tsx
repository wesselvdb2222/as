"use client"

import { Star } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function Testimonials() {
  // Hardcoded testimonials data
  const testimonials = {
    badge: "Testimonials",
    title: "What Our Customers Say",
    description: "Don't just take our word for it. Here's what our customers have to say about our hosting services.",
    intervalDuration: 5000,
    items: [
      {
        content:
          "Really good agency! Not overpriced like many agencies and top quality. Really gained a lifetime partner here! Appreciate it guys.",
        rating: 5,
        image: "https://user-images.trustpilot.com/686994372f2478d94a3a4795/73x73.png",
      },
      {
        content:
          "Easily the best agency in eCommerce. No matter what level you’re at, they go all in to help you in every way possible. Great service service, great communication, and always on point. Highly recommend!",
        rating: 5,
        image: "https://user-images.trustpilot.com/67d6c4207062e8c800d4ae6b/73x73.png",
      },
      {
        content:
          "Great products, with very good service. I would highly recommend to buying assets from these guys. :)",
        rating: 5,
        image: "https://user-images.trustpilot.com/6719126942b07d122ce67555/73x73.png",
      },
    ],
  }

  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const intervalDuration = testimonials.intervalDuration || 5000 // 5 seconds per testimonial

  useEffect(() => {
    // Reset progress when active index changes
    setProgress(0)

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Start progress animation
    const startTime = Date.now()

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = (elapsed / intervalDuration) * 100

      if (newProgress >= 100) {
        // Move to next testimonial
        setActiveIndex((current) => (current + 1) % testimonials.items.length)
      } else {
        setProgress(newProgress)
      }
    }, 16) // Update approximately every frame for smooth animation

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [activeIndex, testimonials.items.length, intervalDuration])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="py-20 relative">
      <div className="container px-4 mx-auto">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 mb-4">
        <span>{testimonials.badge}</span>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{testimonials.title}</h2>
        <p className="text-gray-400">{testimonials.description}</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.items.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className="p-8 border rounded-lg border-primary-500/20 bg-[#010901]/70 backdrop-blur-md hover:bg-primary-500/5 hover:border-primary-400/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-32 h-32 overflow-hidden rounded-lg bg-primary-500/10 flex-shrink-0">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt="Testimonial"
                width={128}
                height={128}
                className="object-cover"
              />
              </div>
              <div className="flex-1">
              {/* Trustpilot stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 24 24"
                  className={`w-5 h-5 mr-1 ${
                  i < testimonial.rating
                    ? "text-[#00B67A] fill-[#00B67A]"
                    : "text-gray-600"
                  }`}
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                ))}
              </div>
              <p className="text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </div>
            </div>
            </div>
          </div>
          ))}
        </div>
        </div>
        <div className="flex justify-center mt-6">
          <a
            href="https://www.trustpilot.com/review/allsourced.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <g>
                <path
                  d="M12.001 2l2.09 6.43h6.76l-5.47 3.98 2.09 6.43-5.47-3.98-5.47 3.98 2.09-6.43-5.47-3.98h6.76L12.001 2z"
                  fill="#00B67A"
                />
                <circle cx="19" cy="19" r="3" fill="#00B67A" />
              </g>
            </svg>
            <span className="font-semibold">Trustpilot</span>
          </a>
        </div>
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-3">
              {testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="relative w-16 h-1 rounded-full bg-gray-600 overflow-hidden"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {index === activeIndex && (
                    <div
                      className="absolute top-0 left-0 h-full bg-primary-400 transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    ></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
