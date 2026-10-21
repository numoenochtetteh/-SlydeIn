"use client"

import { Instagram } from "lucide-react"
import { LazyVideo } from "@/components/lazy-video"

const experiences = [
  {
    title: "SlydeIn House Party",
    meta: "Signature experience · Accra",
    desc: "The signature SlydeIn energy — music, people, fashion and moments that stay with you after the night ends.",
    video: "/videos/slydein-event-1.mp4",
    poster: "/videos/slydein-event-1.jpg",
    index: "01",
  },
  {
    title: "Culture in Motion",
    meta: "Community · Ghana",
    desc: "A closer look at the style, people and culture that make every SlydeIn night feel bigger than just another party.",
    video: "/videos/slydein-event-2.mp4",
    poster: "/videos/slydein-event-2.jpg",
    index: "02",
  },
]

const displayFont = {
  fontFamily:
    '"Arial Black", Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
  fontWeight: 900,
  fontStretch: "condensed",
}

export function Projects() {
  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-[#F3EEE4] py-16 text-black dark:bg-[#151213] dark:text-white md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Editorial heading */}
        <div className="mb-10 grid gap-7 lg:mb-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#5E1850] dark:text-[#d79bc9] sm:text-[11px]">
              The SlydeIn journal
            </p>

            <h2 className="max-w-[14ch] text-[2.35rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-[3rem] lg:text-[4rem] xl:text-[4.5rem]">
              Featured experiences worth remembering.
            </h2>
          </div>

          <div className="max-w-md lg:justify-self-end lg:pb-2">
            <p className="text-[0.95rem] leading-7 text-black/60 dark:text-white/60 sm:text-base">
              A closer look at the nights, people and moments that make SlydeIn more than just another party.
            </p>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5E1850] transition hover:gap-3 dark:text-[#d79bc9]"
            >
              Explore experiences on Instagram
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Feature stories */}
        <div className="space-y-8 lg:space-y-10">
          {experiences.map((event, index) => (
            <article
              key={event.title}
              className={`grid overflow-hidden border border-black/10 bg-[#F8F4EC] dark:border-white/10 dark:bg-[#1d191b] lg:min-h-[460px] lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="group relative min-h-[320px] overflow-hidden bg-black sm:min-h-[390px] lg:min-h-full">
                <LazyVideo
                  src={event.video}
                  poster={event.poster}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-black/10" />


                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white/80 sm:inset-x-6 sm:bottom-6 sm:text-[10px]">
                  <span>{event.meta}</span>
                  <span>2026</span>
                </div>
              </div>

              <div className="flex min-h-[340px] flex-col justify-between p-6 sm:p-8 lg:min-h-full lg:p-10 xl:p-12">
                <div>
                  <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.26em] text-[#5E1850] dark:text-[#d79bc9]">
                    Featured experience
                  </p>

                  <h3
                    className="max-w-[9ch] uppercase text-[2.25rem] leading-[0.9] tracking-[-0.055em] sm:text-[2.75rem] lg:text-[3.35rem] xl:text-[3.7rem]"
                    style={displayFont}
                  >
                    {event.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-[0.96rem] leading-7 text-black/60 dark:text-white/62 sm:text-base">
                    {event.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-end justify-between gap-5 border-t border-black/10 pt-6 dark:border-white/10">
                  <p className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-black/35 dark:text-white/35 sm:block">
                    SlydeIn / Accra
                  </p>

                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group/link ml-auto inline-flex items-center gap-3 bg-[#5E1850] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#741f64]"
                  >
                    Explore experiences
                    <Instagram className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

