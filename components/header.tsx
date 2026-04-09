"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Cloud,
  Building2,
  HelpCircle,
  Server,
  Database,
  Users,
  Activity,
  FileText,
  Code,
  AlignJustify,
  Package,
  Facebook,
  Mail,
  UserRoundSearch,
} from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { SiFacebook, SiGoogleads, SiGmail } from "react-icons/si"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Hardcoded navigation data
  const brand = {
    name: "AllSourced",
    highlightedText: "",
    logo: "/images/logo.svg",
    alt: "AllSourced Logo",
  }

  const navigation = [
    {
      text: "Facebook",
      type: "link",
      href: "/meta",
      icon: <SiFacebook className="w-3.5 h-3.5 mr-1.5" />,
    },
    {
      text: "Email Marketing",
      type: "link",
      href: "/email",
      icon: <SiGmail className="w-3.5 h-3.5 mr-1.5" />,
    },
    {
      text: "Google",
      type: "link",
      href: "/google",
      icon: <SiGoogleads className="w-3.5 h-3.5 mr-1.5" />,
    },
    {
      text: "Suppliers",
      type: "link",
      href: "https://api.whatsapp.com/send?phone=31647415437&text=Hi%2C%0A%0AI%27m%20interested%20in%20the%20suppliers.",
      icon: <Package className="w-3.5 h-3.5 mr-1.5" />,
    },
    {
      text: "Help",
      type: "dropdown",
      icon: <HelpCircle className="w-4 h-4 mr-2" />,
      items: [
        {
          text: "Docs",
          href: "https://docs.allsourced.agency",
          icon: <FileText className="w-4 h-4 mr-2" />,
        },
        {
          text: "Support",
          href: "https://api.whatsapp.com/send/?phone=31647415437&text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.&type=phone_number&app_absent=0",
          icon: <UserRoundSearch className="w-4 h-4 mr-2" />,
        },
      ],
    },
  ]

  const buttons = [
    {
      text: "Login",
      href: "https://go.allsourced.agency/customer-portal",
      variant: "link",
    },
    {
      text: "Book a call",
      href: "https://calendly.com/mauricedeleeuw5/30min",
      variant: "primary",
      icon: "ChevronRight",
    },
  ]

  const mobileMenu = {
    showMobileMenu: true,
    mobileBreakpoint: "lg",
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToHostingOptions = (e: React.MouseEvent) => {
    e.preventDefault()

    // Check if we're already on the home page
    const isHomePage = window.location.pathname === "/"

    if (isHomePage) {
      // If on home page, just scroll to the section
      const hostingSection = document.getElementById("hosting-options")
      if (hostingSection) {
        hostingSection.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If on another page, navigate to home page with a hash
      window.location.href = "/#hosting-options"
    }

    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-primary-500/20 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto relative">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Image src={brand.logo || "/placeholder.svg"} alt={brand.alt} width={53} height={29} />
          </div>
          <span className="text-xl font-bold text-white">
            {brand.name.replace(brand.highlightedText, "")}
            <span className="text-primary-400">{brand.highlightedText}</span>
          </span>
        </Link>

        <nav className="hidden lg:!flex md:!flex items-center gap-8 absolute left-1/2 -translate-x-1/2" style={{ display: "none" }}>
          {navigation.map((item, index) => {
            if (item.type === "dropdown") {
              return (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-gray-300 hover:text-primary-400 transition-colors relative group outline-none focus:outline-none">
                    <span className="flex items-center">
                      {item.icon}
                      {item.text}
                    </span>
                    <ChevronDown className="h-4 w-4 ml-1" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black/90 backdrop-blur-md border-primary-500/20 p-3 flex flex-col gap-1 min-w-[180px]">
                    {item.items?.map((subItem, subIndex) => (
                      <DropdownMenuItem
                        key={subIndex}
                        asChild
                        className="py-3 hover:bg-primary-500/10 rounded-md focus:bg-primary-500/10 focus:text-primary-400"
                      >
                        <Link
                          href={subItem.href}
                          className="text-gray-300 hover:text-primary-400 cursor-pointer transition-colors w-full flex items-center"
                        >
                          {subItem.icon}
                          {subItem.text}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }
            return (
              <Link
                key={index}
                href={item.href || "#"}
                className="text-gray-300 hover:text-primary-400 transition-colors relative group flex items-center"
              >
                {item.icon}
                {item.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            )
          })}
        </nav>


        {mobileMenu.showMobileMenu && (
          <button
            className="lg:!hidden text-white p-2 rounded-full hover:bg-primary-500/10 transition-colors"
            style={{ display: "block" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:!hidden bg-black/95 backdrop-blur-md border-b border-primary-500/20 animate-fadeIn">
          <div className="container px-4 py-6 mx-auto">
            <nav className="flex flex-col gap-1">
              {navigation.map((item, index) => {
                if (item.type === "dropdown") {
                  return (
                    <div key={index}>
                      <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 px-4 pt-4 pb-2">
                        {item.text}
                      </p>
                      {item.items?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-primary-500/5 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.icon}
                          <span className="text-sm">{subItem.text}</span>
                        </Link>
                      ))}
                    </div>
                  )
                }
                return (
                  <Link
                    key={index}
                    href={item.href || "#"}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-primary-500/5 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="text-sm">{item.text}</span>
                  </Link>
                )
              })}

              {/* CTA onderaan */}
              <div className="pt-4 mt-2 border-t border-primary-500/20">
                <a
                  href="https://api.whatsapp.com/send/?phone=31647415437&text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
