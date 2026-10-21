"use client"

import { useEffect, useRef, useState } from "react"
import { CalendarDays, Users, Music2, TicketCheck } from "lucide-react"
import { HighlightedText } from "./highlighted-text"

const services = [
  { title: "Event Planning & Coordination", description: "From timelines and logistics to vendors and on-the-night execution, we help bring the full experience together.", icon: CalendarDays },
  { title: "Guest Management", description: "Guest lists, RSVP tracking and attendee coordination designed to keep the experience smooth from entry to exit.", icon: Users },
  { title: "Entertainment Booking", description: "DJs, performers and entertainment options selected to match the energy and identity of each event.", icon: Music2 },
  { title: "Ticketing & Event Discovery", description: "A simple way for guests to discover upcoming experiences, secure tickets and know where the next night is happening.", icon: TicketCheck },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute("data-index"))
        if (entry.isIntersecting) setVisibleItems((prev) => [...new Set([...prev, index])])
      })
    }, { threshold: 0.2 })
    itemRefs.current.forEach((ref) => ref && observer.observe(ref))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">What We Do</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            We create the
            <br />
            <HighlightedText>whole experience</HighlightedText>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            SlydeIn goes beyond selling tickets. We help shape the planning, people, entertainment and energy behind memorable events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((area, index) => {
            const Icon = area.icon
            return (
              <div key={area.title} ref={(el) => { itemRefs.current[index] = el }} data-index={index} className={`relative pl-8 border-l border-border transition-all duration-700 ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

