"use client"

import { useState } from "react"
import { content } from "@/src/lib/content"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="faq" className="py-20 bg-kisa-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-center mb-16 text-balance text-kisa-text">Vanliga frågor</h2>

        <div className="space-y-4">
          {content.faq.map((item, index) => (
            <div key={index} className="bg-kisa-text/5 border border-kisa-text/10 rounded-lg">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-kisa-text/10 focus:outline-none focus:ring-2 focus:ring-kisa-text/20 rounded-lg text-kisa-text"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-pretty">{item.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform text-kisa-text ${openItems.includes(index) ? "rotate-180" : ""}`}
                />
              </button>
              {openItems.includes(index) && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-4 text-kisa-text/70 text-pretty"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
