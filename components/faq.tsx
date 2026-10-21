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
          <div className="rounded-[28px] bg-[#EDE7DD] p-5 text-black shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
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
                  <div key={faq.question} className="overflow-hidden rounded-[14px] bg-[#F7F3EC]">
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

        {/* TABLET / DESKTOP: premium split FAQ layout */}
        <div className="hidden md:block">
          <div className="overflow-hidden rounded-[34px] border border-black/10 bg-[#EDE7DD] text-black shadow-[0_18px_60px_rgba(41,24,18,0.06)] dark:border-white/10 dark:bg-[#171313] dark:text-white">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col justify-between border-b border-black/10 p-8 lg:min-h-[660px] lg:border-b-0 lg:border-r lg:p-12 xl:p-14 dark:border-white/10">
                <div>
                  <span className="inline-flex rounded-full border border-[#5E1850]/20 bg-[#5E1850]/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#5E1850] dark:border-[#d79bc9]/25 dark:bg-[#d79bc9]/10 dark:text-[#d79bc9]">
                    FAQ
                  </span>

                  <h2 className="mt-8 max-w-[8ch] text-[4.6rem] font-medium leading-[0.93] tracking-[-0.06em] lg:text-[5.2rem] xl:text-[5.8rem]">
                    Questions
                    <br />
                    <span className="font-serif italic font-normal">&amp; Answers</span>
                  </h2>
                </div>

                <div className="mt-12 max-w-sm lg:mt-16">
                  <p className="text-base leading-7 text-black/58 dark:text-white/58">
                    Everything you need to know before you SlydeIn — tickets, venues, private events, partnerships and more.
                  </p>
                  <div className="mt-7 h-px w-20 bg-[#5E1850]/45" />
                </div>
              </div>

              <div className="p-6 lg:p-8 xl:p-10">
                <div className="space-y-3">
                  {faqs.map((faq, index) => {
                    const isOpen = openIndex === index
                    return (
                      <div
                        key={faq.question}
                        className={`overflow-hidden rounded-[20px] border transition-all duration-300 ${
                          isOpen
                            ? "border-[#5E1850]/30 bg-[#FBF8F2] shadow-[0_12px_34px_rgba(94,24,80,0.08)] dark:border-[#d79bc9]/30 dark:bg-white/[0.06]"
                            : "border-black/[0.07] bg-[#F7F3EC] hover:-translate-y-0.5 hover:border-[#5E1850]/20 dark:border-white/[0.08] dark:bg-white/[0.035]"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="group flex w-full items-center justify-between gap-8 px-6 py-6 text-left lg:px-7 lg:py-7"
                          aria-expanded={isOpen}
                        >
                          <span className="text-[1.05rem] font-medium leading-6 tracking-[-0.015em] lg:text-[1.08rem]">
                            {faq.question}
                          </span>

                          <span
                            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                              isOpen
                                ? "rotate-45 border-[#5E1850] bg-[#5E1850] text-white"
                                : "border-[#5E1850]/35 bg-transparent text-[#5E1850] group-hover:bg-[#5E1850] group-hover:text-white"
                            }`}
                          >
                            <Plus className="h-5 w-5" strokeWidth={1.8} />
                          </span>
                        </button>

                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="max-w-2xl px-6 pb-7 pr-24 text-[0.98rem] leading-7 text-black/58 lg:px-7 lg:pb-8 dark:text-white/58">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

