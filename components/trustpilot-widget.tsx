"use client"

import { useState } from "react"
import Image from "next/image"

const REVIEWS = [
  {
    title: "Uitstekende service",
    body: "Uitstekende service, als je iets op gebied van ecom nodig hebt raad ik je deze partij aan. Reageren snel met goede oplossingen.",
    author: "Rick Houwen",
    date: "1 week ago",
    rating: 5,
  },
  {
    title: "Erg goede klantenservice",
    body: "Erg goede klantenservice, reageert snel en helpt waarbij nodig is! Als iemand een facebook ad account nodig heeft of structuur is dit zeker een aanrader👌🏽",
    author: "Charif Fares",
    date: "2 weeks ago",
    rating: 5,
  },
  {
    title: "Top top top service",
    body: "Top top top service, ze hebben me enorm goed geholpen met het opzetten van m'n Facebook structuur. Ze reageren binnen 1 min op al je berichten. De beste voor het halen van je Facebook structuur etc.",
    author: "Roop Verma",
    date: "3 weeks ago",
    rating: 5,
  },
  {
    title: "Super snel en betaalbaar!",
    body: "Ik had snel een nieuw ad account nodig en ging voor Allsourced. Ze hebben me meteen geholpen en voor ik het wist, was ik weer live.",
    author: "Sem",
    date: "1 month ago",
    rating: 5,
  },
  {
    title: "Great Service",
    body: "Great products, quick communication and fantastic service. 5/5.",
    author: "Thijs Bastiaans",
    date: "1 month ago",
    rating: 5,
  },
  {
    title: "Great assets & service",
    body: "Great products, with very good service. I would highly recommend to buying assets from these guys. :)",
    author: "Hens Boer",
    date: "1 month ago",
    rating: 5,
  },
]

function TpStars({ count = 5, size = "md" }: { count?: number; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-7 h-7" }
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className={`${sizes[size]} flex items-center justify-center ${i < count ? "bg-[#00b67a]" : "bg-gray-600"}`}>
          <svg viewBox="0 0 24 24" fill="white" className="w-3/4 h-3/4">
            <path d="M12 2l2.9 8.9H24l-7.5 5.5 2.9 8.9L12 20l-7.4 5.3 2.9-8.9L0 10.9h9.1z" />
          </svg>
        </div>
      ))}
    </div>
  )
}

function TrustpilotLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 24 24" fill="#00b67a" className="w-5 h-5">
        <path d="M12 2l2.9 8.9H24l-7.5 5.5 2.9 8.9L12 20l-7.4 5.3 2.9-8.9L0 10.9h9.1z" />
      </svg>
      <span className="font-semibold text-gray-900 text-sm tracking-wide">Trustpilot</span>
    </div>
  )
}

export default function TrustpilotWidget() {
  const [page, setPage] = useState(0)
  const perPage = 3
  const maxPage = Math.ceil(REVIEWS.length / perPage) - 1
  const visible = REVIEWS.slice(page * perPage, page * perPage + perPage)

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row">

        {/* Left — summary */}
        <div className="flex flex-col items-center justify-center gap-3 px-8 py-8 border-b md:border-b-0 md:border-r border-gray-200 min-w-[180px]">
          <p className="text-gray-900 font-bold text-xl">Excellent</p>
          <TpStars size="lg" />
          <p className="text-xs text-gray-500 text-center">
            Based on <a href="https://nl.trustpilot.com/review/allsourced.nl?languages=all" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline cursor-pointer hover:text-[#00b67a] transition-colors">53 reviews</a>
          </p>
          <TrustpilotLogo />
        </div>

        {/* Right — review cards */}
        <div className="flex flex-1 items-center gap-1 px-2 py-6 overflow-hidden relative">

          {/* Prev */}
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="shrink-0 w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-400 transition disabled:opacity-20"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Cards */}
          <div className="flex flex-1 gap-3 overflow-hidden">
            {visible.map((r, i) => (
              <div key={i} className="flex-1 min-w-0 flex flex-col gap-2 px-3 py-3 rounded-lg bg-gray-50 border border-gray-200">
                <TpStars size="sm" count={r.rating} />
                <p className="text-gray-900 text-sm font-semibold truncate">{r.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{r.body}</p>
                <p className="text-gray-400 text-xs mt-auto">{r.author}, <span>{r.date}</span></p>
              </div>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
            disabled={page === maxPage}
            className="shrink-0 w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-400 transition disabled:opacity-20"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

    </div>
  )
}
