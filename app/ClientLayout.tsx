"use client"

import type React from "react"
import { useEffect } from "react"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Add this useEffect hook to handle hash navigation
  useEffect(() => {
    // Function to handle hash navigation
    const handleHashNavigation = () => {
      const hash = window.location.hash
      if (hash) {
        // Remove the # character
        const id = hash.substring(1)
        // Find the element with the id
        const element = document.getElementById(id)
        // If the element exists, scroll to it
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" })
          }, 100) // Small delay to ensure the page is fully loaded
        }
      }
    }

    // Call the function when the component mounts
    handleHashNavigation()

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashNavigation)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("hashchange", handleHashNavigation)
    }
  }, [])

  return <>{children}</>
}
