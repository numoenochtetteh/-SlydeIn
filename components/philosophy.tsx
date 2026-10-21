"use client"

import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./highlighted-text"

const experienceItems = [
  { title: "House parties, reimagined", description: "High-energy party experiences designed to bring people together in memorable spaces." },
  { title: "Nightlife worth discovering", description: "A curated guide to standout parties, venues and experiences across Ghana." },
  { title: "Tickets made simple", description: "Find the event, secure your spot and get ready for the night without unnecessary friction." },
  { title: "Culture at the centre", description: "Music, people and atmosphere come first. Every SlydeIn experience is built around the energy of the community." },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute("data-index"))
        if (entry.isIntersecting) setVisibleItems((prev) => [...new Set([...prev, index])])
      })
    }, { threshold: 0.3 })
    itemRefs.current.forEach((ref) => ref && observer.observe(ref))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">The SlydeIn experience</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Nights made to
              <br />
              <HighlightedText>remember</HighlightedText>
            </h2>
            <div className="relative hidden lg:block">
              <img src="/images/exterior.png" alt="SlydeIn event placeholder" className="opacity-90 relative z-10 w-auto" />
            </div>
          </div>

          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              SlydeIn connects people to unforgettable parties and creates event experiences that feel effortless from discovery to the final song.
            </p>
            {experienceItems.map((item, index) => (
              <div key={item.title} ref={(el) => { itemRefs.current[index] = el }} data-index={index} className={`transition-all duration-700 ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

