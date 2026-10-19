"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Events", href: "#events" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5">
      {/* MOBILE HEADER */}
      <div className="mx-auto md:hidden">
        <div className="overflow-hidden rounded-[22px] border border-black/10 bg-white/96 text-black shadow-[0_12px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl">
          <nav className="flex h-[68px] items-center justify-between px-5">
            <Link
              href="/"
              onClick={scrollToTop}
              className="text-[1.05rem] font-semibold uppercase tracking-[0.22em]"
            >
              SLYDEIN
            </Link>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="grid h-10 w-10 place-items-center rounded-[10px] border border-black/10 bg-white text-black transition active:scale-95"
            >
              {mobileMenuOpen ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
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

      {/* DESKTOP HEADER */}
      <div className="mx-auto hidden max-w-[1120px] md:block">
        <div className="rounded-[22px] border border-black/10 bg-white/95 text-black shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-[#111111]/95 dark:text-white">
          <nav className="flex h-[72px] items-center justify-between px-7 lg:px-8">
            <Link
              href="/"
              onClick={scrollToTop}
              className="text-xl font-semibold uppercase tracking-[0.18em]"
            >
              SLYDEIN
            </Link>

            <ul className="flex items-center gap-8 text-sm text-black/65 dark:text-white/65 lg:gap-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              <a
                href="https://tickets.slydein.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-[10px] bg-[#5E1850] px-5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#741f64]"
              >
                Get tickets
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
