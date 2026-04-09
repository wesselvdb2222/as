"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react"
import { SiInstagram, SiFacebook } from "react-icons/si"

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-primary-500/20 relative">
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(128,90,213,0.5)]"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container px-4 pt-16 pb-8 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5 group">
              <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image src="/images/logo.svg" alt="AllSourced Logo" width={53} height={29} />
              </div>
              <span className="text-xl font-bold text-white">AllSourced</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              All-in-one solutions for your e-commerce business. Ad accounts, email marketing, and more.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/allsourced.agency" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-primary-500/10">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/all.sourced2024/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-primary-500/10">
                <SiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-widest uppercase text-white">Services</h3>
            <ul className="space-y-3">
              {[
                { text: "Meta Ad Accounts", href: "/meta" },
                { text: "Email Marketing", href: "/email" },
                { text: "Google Ads", href: "/google" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors relative group inline-block">
                    {link.text}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-widest uppercase text-white">Company</h3>
            <ul className="space-y-3">
              {[
                { text: "Terms of Service", href: "/terms-of-service" },
                { text: "Privacy Policy", href: "/privacy-policy" },
                { text: "Refund Policy", href: "/refund-policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors relative group inline-block">
                    {link.text}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-widest uppercase text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@allsourced.nl" className="flex items-start gap-3 text-sm text-gray-400 hover:text-primary-400 transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-primary-400" />
                  info@allsourced.nl
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=31647415437&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-gray-400 hover:text-primary-400 transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-primary-400" />
                  +31 6 47415437
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  Keizersgracht 520 H, 1017EK Amsterdam
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-10 border-t border-primary-500/20">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} AllSourced. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Built for e-commerce businesses worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
