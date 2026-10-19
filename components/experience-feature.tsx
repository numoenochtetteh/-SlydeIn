import { ArrowUpRight } from "lucide-react"
import { LazyVideo } from "@/components/lazy-video"

export function ExperienceFeature() {
  return (
    <section className="bg-background px-4 py-10 text-white sm:px-6 md:px-8 md:py-14 lg:px-12">
      <div className="group relative mx-auto min-h-[500px] max-w-7xl overflow-hidden border border-border sm:min-h-[530px] lg:min-h-[560px]">
        <LazyVideo
          src="/videos/slydein-feature-hq.mp4"
          poster="/videos/slydein-feature-hq.jpg"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
        />

        {/* Keep the video readable without burying it in black. */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/48 via-black/12 to-black/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/46 via-transparent to-black/8" />

        <div className="relative z-10 flex min-h-[500px] flex-col justify-between p-6 sm:min-h-[530px] sm:p-8 lg:min-h-[560px] lg:p-11">
          <div className="flex items-start justify-between gap-5">
            <p className="max-w-[14rem] text-[9px] font-semibold uppercase tracking-[0.28em] text-[#F3C96A] sm:text-[10px]">
              Africa&apos;s biggest houseparty
            </p>
            <span className="text-right text-[9px] font-semibold uppercase tracking-[0.26em] text-white/62 sm:text-[10px]">
              SlydeIn / Accra
            </span>
          </div>

          <div className="grid items-end gap-7 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
            <div>
              <h2 className="max-w-[10ch] text-[2.05rem] font-black uppercase leading-[0.9] tracking-[-0.055em] text-white sm:max-w-[8.5ch] sm:text-5xl lg:text-6xl xl:text-[4.6rem]">
                <span className="block sm:inline">Your</span>{" "}
                <span className="block sm:inline">Gateway</span>{" "}
                <span className="block sm:inline">To Ghana</span>{" "}
                <span className="block sm:inline">Parties.</span>
              </h2>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-lg text-[0.95rem] leading-6 text-white/88 sm:text-base lg:text-[1.05rem] lg:leading-7">
                Big energy, real people and the kind of moments that turn one night into the story of the week.
              </p>

              <div className="mt-6 flex flex-wrap justify-end gap-3 sm:justify-start">
                <a
                  href="https://tickets.slydein.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 bg-[#5E1850] px-6 py-3 text-xs font-semibold uppercase tracking-[0.17em] text-white transition hover:-translate-y-0.5 hover:bg-[#741f64]"
                >
                  Get tickets
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://wa.me/233545500006"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden items-center border border-white/55 bg-black/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.17em] text-white backdrop-blur-sm transition hover:bg-white hover:text-[#5E1850] sm:inline-flex"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-end">
            <p className="text-3xl font-black uppercase leading-none tracking-[-0.05em] text-[#F3C96A] sm:text-4xl lg:text-5xl">
              Slyde In
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
