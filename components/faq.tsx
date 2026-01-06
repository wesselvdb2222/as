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
        question: "What services does your ecommerce agency provide?",
        answer:
          "We offer end-to-end ecommerce solutions including store setup, custom development, UI/UX design, digital marketing, SEO, integrations, maintenance, and ongoing support. We tailor our services to fit your business needs.",
      },
      {
        question: "Which ecommerce platforms do you work with?",
        answer:
          "We work with all major ecommerce platforms such as Shopify, WooCommerce, Magento, BigCommerce, and custom solutions. Our team can recommend the best platform for your business goals.",
      },
      {
        question: "Do you collaborate with other agencies or partners?",
        answer:
          "Yes, we have a strong network of partners and collaborate with specialists in design, logistics, payment solutions, and more to deliver comprehensive ecommerce projects.",
      },
      {
        question: "Can you help migrate my existing store to a new platform?",
        answer:
          "Absolutely. We handle migrations from any platform, ensuring your data, products, and customer information are transferred securely and efficiently with minimal downtime.",
      },
      {
        question: "How do you ensure the success of my ecommerce project?",
        answer:
          "We follow a proven process: discovery, strategy, design, development, testing, and launch. We also provide ongoing optimization and support to help your business grow.",
      },
      {
        question: "What is your pricing model?",
        answer:
          "Our pricing is flexible and depends on the scope and complexity of your project. We offer both fixed-price packages and custom quotes. Contact us for a free consultation and estimate.",
      },
      {
        question: "How can I get started?",
        answer:
          "Simply reach out to us via our contact form, email, or phone. We'll schedule a call to discuss your needs and propose the best solutions for your ecommerce business.",
      },
    ],
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
