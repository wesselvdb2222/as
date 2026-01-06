"use client"

import { useState } from "react"

interface UptimeGraphProps {
  data: number[]
  average: number
}

export function UptimeGraph({ data, average }: UptimeGraphProps) {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null)

  // Function to get formatted date for a specific day in the past
  const getFormattedDate = (daysAgo: number) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
  }

  return (
    <div className="p-4 rounded-md bg-green-500/5 border border-green-500/10">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-white">30-Day Uptime History</h4>
        <div className="text-sm font-medium text-green-400">{average}% avg</div>
      </div>

      <div className="relative h-24 w-full">
        {/* Grid lines */}
        <div className="absolute inset-0 border-t border-gray-800"></div>
        <div className="absolute inset-0 top-1/2 border-t border-gray-800"></div>
        <div className="absolute inset-0 border-b border-gray-800"></div>

        {/* Bars */}
        <div className="flex items-end justify-between h-full w-full">
          {data.map((value, index) => {
            // Calculate height based on value (99-100% range)
            // Scale to make differences more visible
            const heightPercentage = Math.max(
              ((value - 90) / 10) * 100, // Scale from 90-100% to 0-100%
              2, // Minimum height
            )

            // Determine color based on value
            let barColor = "bg-red-400"
            if (value >= 99.9) barColor = "bg-green-400"
            else if (value >= 99) barColor = "bg-green-300"
            else if (value >= 95) barColor = "bg-yellow-400"
            else if (value >= 90) barColor = "bg-orange-400"

            // Calculate the actual date for this data point
            const daysAgo = data.length - 1 - index
            const formattedDate = getFormattedDate(daysAgo)

            return (
              <div
                key={index}
                className="relative h-full flex-1 mx-[1px]"
                onMouseEnter={() => setHoveredDay(index)}
                onMouseLeave={() => setHoveredDay(null)}
              >
                <div
                  className={`absolute bottom-0 w-full ${barColor} transition-all duration-300 hover:opacity-80`}
                  style={{ height: `${heightPercentage}%` }}
                ></div>

                {/* Tooltip with formatted date */}
                {hoveredDay === index && (
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs py-1 px-2 rounded pointer-events-none whitespace-nowrap z-50">
                    {formattedDate}: {value}% uptime
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <span>{getFormattedDate(data.length - 1)}</span>
        <span>{getFormattedDate(0)}</span>
      </div>
    </div>
  )
}
