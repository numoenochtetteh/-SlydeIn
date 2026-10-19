"use client"

import { ArrowUpRight } from "lucide-react"
import { LazyVideo } from "@/components/lazy-video"

const experiences = [
  {
    title: "SlydeIn House Party",
    meta: "Signature experience · Accra",
    desc: "The signature SlydeIn energy — music, people, fashion and moments that stay with you after the night ends.",
    video: "/videos/slydein-event-1.mp4",
    poster: "/videos/slydein-event-1.jpg",
    accent: "from-[#ff7b54]/18",
  },
  {
    title: "Culture in Motion",
    meta: "Community · Ghana",
    desc: "A closer look at the style, people and culture that make every SlydeIn night feel bigger than a party.",
    video: "/videos/slydein-event-2.mp4",
    poster: "/videos/slydein-event-2.jpg",
    accent: "from-[#7c5cff]/18",
  },
]

export function Projects() {
  return (
    <section id="events" className="relative overflow-hidden bg-background py-20 text-foreground md:py-24">
      <div className="pointer-events-none absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[#ff8a5b]/7 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] bottom-16 h-80 w-80 rounded-full bg-[#5E1850]/8 blur-3xl" />

      <div className="container relative mx-auto px-6 md:px-12">
        <div className="mb-10 max-w-4xl md:mb-12">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#5e1850] dark:text-[#d79bc9]">
            The SlydeIn journal
          </p>
          <h2 className="max-w-[10ch] text-[2.6rem] font-black uppercase leading-[0.88] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
            Featured experiences worth remembering.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((event) => (
            <article
              key={event.title}
              className="group overflow-hidden border border-border bg-card text-card-foreground shadow-[0_10px_40px_rgba(0,0,0,0.03)] dark:shadow-none"
            >
              <div className="relative h-[280px] overflow-hidden bg-black sm:h-[320px] lg:h-[340px]">
                <LazyVideo
                  src={event.video}
                  poster={event.poster}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-black/0 to-black/5" />
                <div className={`absolute inset-0 bg-gradient-to-br ${event.accent} via-transparent to-transparent`} />

                <h3 className="absolute left-6 top-6 max-w-[82%] text-[1.45rem] font-black uppercase leading-[0.93] tracking-[-0.045em] text-white sm:left-7 sm:top-7 sm:text-[1.75rem] lg:text-[2rem]">
                  {event.title}
                </h3>

                <div className="absolute inset-x-6 bottom-5 flex items-end justify-between gap-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/82 sm:inset-x-7 sm:bottom-6 sm:text-[10px]">
                  <span>{event.meta}</span>
                  <span>2026</span>
                </div>
              </div>

              <div className="flex min-h-[150px] flex-col justify-between gap-6 p-6 sm:p-7">
                <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-[0.95rem]">
                  {event.desc}
                </p>
                <a
                  href="https://tickets.slydein.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group/link ml-auto inline-flex items-center gap-2 bg-[#5e1850] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#741f64] dark:bg-[#d79bc9] dark:text-[#1a0b17] dark:hover:bg-white"
                >
                  Explore experience
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
