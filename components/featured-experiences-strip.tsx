"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const photos = [
  { src: "/experiences/featured-01.webp", alt: "SlydeIn party crowd dancing" },
  { src: "/experiences/featured-02.webp", alt: "SlydeIn guest dancing at a party" },
  { src: "/experiences/featured-03.webp", alt: "Friends celebrating with sparklers" },
  { src: "/experiences/featured-04.webp", alt: "Guests dancing at a SlydeIn experience" },
  { src: "/experiences/featured-05.webp", alt: "Friends together at a nightlife event" },
  { src: "/experiences/featured-06.webp", alt: "Guests sharing food at a house party" },
  { src: "/experiences/featured-07.webp", alt: "SlydeIn house party guests gathered together" },
]

const rotations = ["-rotate-[3deg]", "rotate-[2.4deg]", "-rotate-[1.5deg]", "rotate-[2deg]", "-rotate-[2.3deg]", "rotate-[1.4deg]", "-rotate-[1.8deg]"]

export function FeaturedExperiencesStrip() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const interactingRef = useRef(false)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let raf = 0
    let last = performance.now()

    const setToMiddleCopy = () => {
      const oneSet = scroller.scrollWidth / 3
      if (oneSet > 0) scroller.scrollLeft = oneSet
    }

    const normalize = () => {
      const oneSet = scroller.scrollWidth / 3
      if (!oneSet) return

      if (scroller.scrollLeft < oneSet * 0.45) {
        scroller.scrollLeft += oneSet
      } else if (scroller.scrollLeft > oneSet * 1.55) {
        scroller.scrollLeft -= oneSet
      }
    }

    const animate = (now: number) => {
      const dt = Math.min(now - last, 32)
      last = now

      if (!interactingRef.current) {
        scroller.scrollLeft += dt * 0.028
        normalize()
      }

      raf = requestAnimationFrame(animate)
    }

    const pause = () => {
      interactingRef.current = true
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = setTimeout(() => {
        interactingRef.current = false
      }, 1800)
    }

    const releaseSoon = () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = setTimeout(() => {
        interactingRef.current = false
      }, 1100)
    }

    const onScroll = () => normalize()

    requestAnimationFrame(setToMiddleCopy)
    raf = requestAnimationFrame(animate)

    scroller.addEventListener("pointerdown", pause, { passive: true })
    scroller.addEventListener("pointerup", releaseSoon, { passive: true })
    scroller.addEventListener("pointercancel", releaseSoon, { passive: true })
    scroller.addEventListener("touchstart", pause, { passive: true })
    scroller.addEventListener("touchend", releaseSoon, { passive: true })
    scroller.addEventListener("wheel", pause, { passive: true })
    scroller.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", setToMiddleCopy)

    return () => {
      cancelAnimationFrame(raf)
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
      scroller.removeEventListener("pointerdown", pause)
      scroller.removeEventListener("pointerup", releaseSoon)
      scroller.removeEventListener("pointercancel", releaseSoon)
      scroller.removeEventListener("touchstart", pause)
      scroller.removeEventListener("touchend", releaseSoon)
      scroller.removeEventListener("wheel", pause)
      scroller.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", setToMiddleCopy)
    }
  }, [])

  const repeated = [...photos, ...photos, ...photos]

  return (
    <section className="overflow-hidden bg-[#F3EEE4] py-12 text-black sm:py-14 lg:py-16">
      <div className="mb-8 flex items-end justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <div>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#5E1850] sm:text-xs">
            Featured experiences
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Nights worth remembering.
          </h2>
        </div>

        <p className="hidden shrink-0 text-right text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#5E1850]/70 sm:block">
          Slyde to see more featured experiences →
        </p>
      </div>

      <p className="mb-7 px-5 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[#5E1850]/70 sm:hidden">
        Slyde to see more featured experiences →
      </p>

      <div
        ref={scrollerRef}
        aria-label="Featured SlydeIn experiences"
        className="no-scrollbar flex cursor-grab touch-pan-x select-none gap-4 overflow-x-auto px-6 pb-9 pt-5 active:cursor-grabbing sm:gap-5 sm:px-10 lg:gap-6 lg:px-14"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {repeated.map((photo, index) => (
          <article
            key={`${photo.src}-${index}`}
            className={`relative shrink-0 ${rotations[index % rotations.length]} w-[250px] sm:w-[285px] lg:w-[330px]`}
          >
            <div className="rounded-[5px] bg-[#1B1419] p-[10px] pb-9 shadow-[0_14px_35px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:-translate-y-1 sm:p-3 sm:pb-10">
              <div className="relative h-[305px] overflow-hidden bg-black sm:h-[350px] lg:h-[405px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 250px, (max-width: 1024px) 285px, 330px"
                  className="pointer-events-none object-cover"
                  draggable={false}
                />
              </div>

              <span
                className="absolute bottom-[11px] left-4 text-[0.68rem] font-black uppercase tracking-[0.13em] text-white/80 sm:bottom-[13px] sm:left-5"
                style={{
                  fontFamily: '"Arial Black", Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                }}
              >
                SLYDEIN
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
