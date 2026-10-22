import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Instagram, MapPin } from "lucide-react"

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20.25 11.7a8.25 8.25 0 0 1-12.15 7.27L3.75 20.1l1.18-4.2A8.25 8.25 0 1 1 20.25 11.7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.15 7.55c.22-.5.45-.51.66-.52h.56c.16 0 .39.06.5.36l.7 1.68c.08.2.04.37-.08.55l-.55.72c-.1.14-.2.27-.08.47.35.61.81 1.16 1.36 1.62.54.45 1.14.81 1.78 1.06.2.08.34.04.47-.11l.73-.86c.14-.16.31-.2.5-.13l1.73.82c.22.1.37.2.42.34.06.15.06.85-.2 1.49-.27.65-1.56 1.24-2.14 1.3-.55.06-1.24.09-2.02-.15a8.5 8.5 0 0 1-2.06-.93 10.4 10.4 0 0 1-3.28-2.95c-.93-1.24-1.45-2.62-1.46-3.65 0-.66.22-1.04.46-1.11Z"
        fill="currentColor"
      />
    </svg>
  )
}

function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5 4.5 19 19.5M19 4.5 5 19.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ThreadsIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M17.7 8.2c-.8-2.7-2.8-4.2-5.7-4.2-4.1 0-7 3-7 8s2.9 8 7 8c3.8 0 6.5-2.3 6.5-5.5 0-2.8-2-4.5-5.2-4.5-2.8 0-4.8 1.3-4.8 3.3 0 1.8 1.5 3.1 3.6 3.1 2.8 0 4.6-2 4.6-5.2 0-3.8-2.3-6.2-6-6.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#5E1850] text-white">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-12 md:px-10 md:py-14 lg:px-14">
        <div className="grid gap-12 border-b border-white/16 pb-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#F3C96A]">Stay in the loop</p>
            <h2 className="max-w-[12ch] text-[clamp(2.35rem,4.2vw,4.4rem)] font-medium leading-[0.94] tracking-[-0.045em]">
              Be there before the story starts.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:justify-self-end lg:max-w-xl">
            <p className="max-w-md text-sm leading-6 text-white/72 sm:text-base">
              Ticket drops, new dates and SlydeIn moments — straight to you before the timeline catches up.
            </p>
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <a
                href="https://egotickets.com/events/slyde-in-houseparty-7da4146a"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-[#F3C96A] px-5 py-3 text-xs font-semibold uppercase tracking-[0.17em] text-[#3b0d32] transition hover:-translate-y-0.5"
              >
                Get tickets
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="https://www.instagram.com/theslydeinparty/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/78 transition hover:text-[#F3C96A]">
                <Instagram className="h-4 w-4" /> Follow on Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 py-10 md:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
          <div>
            <Image
              src="/slydein-footer-logo.png"
              alt="SlydeIn — Africa's Biggest Houseparty"
              width={375}
              height={130}
              className="h-auto w-[220px] object-contain sm:w-[250px]"
            />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
              Africa&apos;s biggest houseparty — built around music, culture, style and unforgettable energy.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#F3C96A]">Explore</p>
            <div className="space-y-3 text-sm text-white/78">
              <Link href="#events" className="block transition hover:text-white">Events</Link>
              <Link href="#faq" className="block transition hover:text-white">FAQ</Link>
              <a href="https://egotickets.com/events/slyde-in-houseparty-7da4146a" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-white">
                Tickets <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#F3C96A]">Connect</p>
            <div className="space-y-3 text-sm text-white/78">
              <a href="https://wa.me/233545500006" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
              <a href="https://www.instagram.com/theslydeinparty/" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href="https://x.com/slydeinparty" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white">
                <XIcon className="h-4 w-4" /> X / Twitter
              </a>
              <a
                href="https://www.threads.com/@theslydeinparty?xmt=AQG0DfCj0tYJRjBbo4iR9PMjDh2_gucihRuMImO-zJQsCWI"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <ThreadsIcon className="h-4 w-4" /> Threads
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#F3C96A]">Where</p>
            <div className="space-y-3 text-sm text-white/78">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Accra, Ghana</p>
              <p>Houseparty culture, worldwide energy.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/16 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-[10px] uppercase tracking-[0.14em] text-white/45 sm:text-[11px]">
            <p>© 2026 SlydeIn. All rights reserved.</p>
          </div>
          <p className="select-none text-[clamp(3.8rem,10vw,10rem)] font-black uppercase leading-[0.72] tracking-[-0.08em] text-white/10">
            Slyde In
          </p>
        </div>
      </div>
    </footer>
  )
}
