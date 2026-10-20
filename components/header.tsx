"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Events", href: "#events" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? "top-3 px-4 sm:px-6" : "top-0 px-0"
      }`}
    >
      {/* MOBILE */}
      <div
        className={`mx-auto transition-all duration-500 ease-out md:hidden ${
          scrolled ? "max-w-[340px]" : "max-w-none"
        }`}
      >
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            scrolled
              ? "rounded-[22px] border border-black/10 bg-white/95 text-black shadow-[0_12px_36px_rgba(0,0,0,0.14)] backdrop-blur-xl"
              : "border border-transparent bg-transparent text-white shadow-none"
          }`}
        >
          <nav
            className={`flex items-center justify-between transition-all duration-500 ease-out ${
              scrolled ? "h-[56px] px-5" : "h-[76px] px-6"
            }`}
          >
            <Link
              href="/"
              onClick={scrollToTop}
              className={`font-semibold uppercase tracking-[0.22em] transition-all duration-500 ease-out ${
                scrolled ? "text-[0.94rem]" : "text-[1.08rem]"
              }`}
            >
              SLYDEIN
            </Link>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`grid place-items-center transition-all duration-500 ease-out active:scale-95 ${
                scrolled
                  ? "h-9 w-9 rounded-[10px] border border-black/10 bg-white text-black"
                  : "h-11 w-11 rounded-[12px] border border-white/35 bg-black/10 text-white backdrop-blur-sm"
              }`}
            >
              {mobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <line x1="6" y1="9" x2="18" y2="9" />
                  <line x1="6" y1="15" x2="18" y2="15" />
                </svg>
              )}
            </button>
          </nav>

          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
              mobileMenuOpen
                ? "max-h-[430px] border-t border-black/10 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4">
              <div className="rounded-[18px] border border-black/8 bg-[#fafafa] p-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-[0.98rem] text-black/65 transition hover:bg-black/[0.04] hover:text-black"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="my-2 px-3">
                  <ThemeToggle />
                </div>

                <a
                  href="https://tickets.slydein.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 flex h-11 w-full items-center justify-center rounded-[10px] bg-[#5E1850] text-sm font-semibold text-white"
                >
                  Get tickets
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div
        className={`mx-auto hidden transition-all duration-500 ease-out md:block ${
          scrolled ? "max-w-[1240px]" : "max-w-none"
        }`}
      >
        <div
          className={`transition-all duration-500 ease-out ${
            scrolled
              ? "rounded-[22px] border border-black/10 bg-white/94 text-black shadow-[0_12px_40px_rgba(0,0,0,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-[#111111]/94 dark:text-white"
              : "border border-transparent bg-transparent text-white shadow-none"
          }`}
        >
          <nav
            className={`flex items-center justify-between transition-all duration-500 ease-out ${
              scrolled ? "h-[64px] px-8 lg:px-10" : "h-[86px] px-10 lg:px-14"
            }`}
          >
            <Link
              href="/"
              onClick={scrollToTop}
              className={`font-semibold uppercase tracking-[0.18em] transition-all duration-500 ease-out ${
                scrolled ? "text-lg" : "text-xl"
              }`}
            >
              SLYDEIN
            </Link>

            <ul
              className={`flex items-center gap-8 text-sm transition-colors duration-500 lg:gap-10 ${
                scrolled ? "text-black/65 dark:text-white/65" : "text-white/80"
              }`}
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      scrolled
                        ? "hover:text-black dark:hover:text-white"
                        : "hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <div className={scrolled ? "block" : "hidden"}>
                <ThemeToggle />
              </div>
              <a
                href="https://tickets.slydein.com"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-500 ease-out hover:-translate-y-0.5 ${
                  scrolled
                    ? "h-10 bg-[#5E1850] px-5 text-white hover:bg-[#741f64]"
                    : "h-11 border border-white/45 bg-black/10 px-6 text-white backdrop-blur-sm hover:bg-white hover:text-black"
                }`}
              >
                Get tickets
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
