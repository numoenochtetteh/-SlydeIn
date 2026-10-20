"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"

const faqs = [
  {
    question: "How do I get tickets for a SlydeIn event?",
    answer:
      "Use the ticket link on the website to view available events and secure your ticket online. Your event details and ticket information will be provided after purchase.",
  },
  {
    question: "Where does SlydeIn host events?",
    answer:
      "SlydeIn focuses on standout nightlife and party experiences in Ghana, with locations depending on each event. Upcoming event details will show the confirmed venue and city.",
  },
  {
    question: "Can SlydeIn help plan a private event?",
    answer:
      "Yes. SlydeIn can support event planning, guest management, entertainment booking and logistics for selected private and branded experiences.",
  },
  {
    question: "Are ticket prices transparent?",
    answer:
      "Yes. The ticketing page displays the available ticket type and price for each event before you complete your purchase.",
  },
  {
    question: "How can I contact the team?",
    answer: "You can reach SlydeIn through WhatsApp on +233 54 550 0006.",
  },
  {
    question: "Can I partner with SlydeIn?",
    answer: "Yes. Brand, venue, entertainment and event partnership enquiries are welcome.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        {/* PHONE ONLY: Viral-style FAQ */}
        <div className="mx-auto max-w-[430px] md:hidden">
          <div className="rounded-[28px] bg-[#f8f8f6] p-5 text-black shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
            <div className="mb-9">
              <span className="inline-flex rounded-[9px] bg-black/[0.045] px-3 py-2 text-sm font-medium">
                Questions
              </span>

              <h2 className="mt-6 text-[2.25rem] font-medium leading-[1.03] tracking-[-0.05em]">
                Frequently
                <br />
                Asked <span className="font-serif italic">Questions</span>
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                return (
                  <div key={faq.question} className="overflow-hidden rounded-[14px] bg-[#f0efec]">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-start justify-between gap-4 px-4 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="max-w-[82%] text-[0.96rem] font-medium leading-6">{faq.question}</span>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] bg-[#5E1850] text-white">
                        {isOpen ? <X className="h-4 w-4" strokeWidth={2} /> : <Plus className="h-4 w-4" strokeWidth={2} />}
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-5 pr-14 text-sm leading-6 text-black/55">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* TABLET / DESKTOP: restore the old FAQ layout */}
        <div className="hidden md:block">
          <div className="mb-16 max-w-3xl">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">FAQ</p>
            <h2 className="mb-6 text-6xl font-medium leading-[1.15] tracking-tight text-balance lg:text-7xl">
              Questions &amp; Answers
            </h2>
          </div>

          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div key={faq.question} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                      {faq.question}
                    </span>
                    <Plus
                      className={`h-6 w-6 shrink-0 text-[#5E1850] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pb-6 pr-12 leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
