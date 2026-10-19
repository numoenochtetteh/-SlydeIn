"use client"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/slydein-hero.jpg"
        aria-hidden="true"
      >
        <source src="/videos/slydein-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/14" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/14 via-black/0 to-black/24" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-16 pt-28 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/84 sm:text-[11px] md:text-xs">
            Africa&apos;s biggest houseparty
          </p>

          <h1 className="text-balance text-[3.35rem] font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[4.9rem]">
            Where the night comes alive.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-6 text-white/88 sm:text-base md:text-lg md:leading-relaxed">
            Unforgettable house parties, nightlife experiences and ticketed events built around music, culture and community.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://tickets.slydein.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-44 items-center justify-center bg-[#5e1850] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7b226a]"
            >
              Get tickets
            </a>
            <a
              href="https://wa.me/233545500006"
              target="_blank"
              rel="noreferrer"
              className="hidden min-w-44 items-center justify-center border border-white/70 bg-black/10 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#5e1850] sm:inline-flex"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
