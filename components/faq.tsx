"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useEffect } from "react"

export default function FAQ() {
  // Hardcoded FAQ data
  const faq = {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    description: "Answers to common questions about our ecommerce agency and the wide range of services we offer.",
items: [
  {
    question: "What exactly are agency ad accounts and why do dropshippers need them?",
    answer:
      "Our agency ad accounts are verified Meta Business Manager ad accounts owned and managed through our agency. They provide higher spending limits, reduced risk of bans, faster support, and better stability for dropshipping businesses that rely heavily on ads.",
  },
  {
    question: "Is it safe to run my store ads on your Meta ad accounts?",
    answer:
      "Yes. Our ad accounts are fully compliant, monitored daily, and managed by Meta advertising experts. We also help prevent policy issues to keep accounts stable and active.",
  },
  {
    question: "Do I get full access to the Meta ad account?",
    answer:
      "You receive partner access through our agency Business Manager so you can run ads, track performance, and scale while we maintain ownership and security of the account.",
  },
  {
    question: "What happens if a Meta ad account gets restricted?",
    answer:
      "We handle the appeal process, communicate with Meta support, and move you to a backup account if needed, so your ads experience minimal downtime.",
  },
  {
    question: "Can you also provide backup or multiple ad accounts?",
    answer:
      "Yes. We can provide additional or backup Meta ad accounts depending on your scaling needs and risk profile.",
  },
  {
    question: "What email marketing services do you offer for dropshipping stores?",
    answer:
      "We provide full email marketing management including campaign setup, Klaviyo/Omnisend flows, newsletter creation, segmentation, A/B testing, SMS integration, and revenue optimization.",
  },
  {
    question: "How fast can you set up email automations like abandoned cart and post-purchase flows?",
    answer:
      "Most email flows can be implemented within 24–72 hours, depending on complexity. Our team ensures they are optimized to generate maximum revenue.",
  },
  {
    question: "Can your developers build or customize anything in my store?",
    answer:
      "Yes. We have in-house coders and ecommerce experts who can build custom apps, landing pages, theme customizations, automations, tracking integrations (like Meta Pixel, TikTok, GA4), and API connections.",
  },
  {
    question: "Do you help with tracking, pixels, and conversion optimization?",
    answer:
      "Absolutely. We implement and optimize Meta Pixel, Conversion API, event tracking, analytics dashboards, and other tools to ensure accurate data and improved ad performance.",
  },
  {
    question: "Do you offer support outside of ads and email marketing?",
    answer:
      "Yes. Our team supports dropshippers in all areas including scaling strategy, technical development, creative guidance, CRM, deliverability, automation, and troubleshooting.",
  },
  {
    question: "How does pricing work for your services?",
    answer:
      "We offer fixed packages for ad accounts and email marketing, as well as custom pricing for development work and scaling support. Pricing depends on your business size and needs.",
  },
  {
    question: "How quickly can I start running ads after getting an agency ad account?",
    answer:
      "You can usually launch campaigns within 24 hours after onboarding and approval. Our team assists you with setup to ensure a smooth start.",
  },
  {
    question: "Do you work with complete beginners in dropshipping?",
    answer:
      "Yes. We guide both beginners and advanced dropshippers. Whether you're launching your first store or scaling to 6–7 figures, we provide hands-on expert support.",
  },
]
  }

  const [openItem, setOpenItem] = useState<string | null>(null)

  // Add scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal")

    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealElements[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active")
        }
      }
    }

    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll() // Check on initial load

    return () => window.removeEventListener("scroll", revealOnScroll)
  }, [])

  return (
    <section className="py-20 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center reveal">
          <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 mb-4">
            <span>{faq.badge}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{faq.title}</h2>
          <p className="text-gray-400">{faq.description}</p>
        </div>

        <div className="grid grid-cols-1 max-w-3xl mx-auto">
          <div className="w-full reveal-stagger">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={openItem || undefined}
              onValueChange={(value) => setOpenItem(value)}
            >
              {faq.items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-primary-500/20 overflow-hidden group faq-item mb-3"
                >
                  <AccordionTrigger className="text-white hover:text-primary-400 transition-all duration-300 py-6 group-hover:bg-primary-500/5 px-4 rounded-t-lg faq-trigger">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 bg-black/50 backdrop-blur-md px-4 py-6 rounded-b-lg faq-content">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
