import { ArrowUpRight } from "lucide-react"
import { LazyVideo } from "@/components/lazy-video"

const steps = ["01", "02", "03"]

export function ExperienceFeature() {
  return (
    <section className="bg-background px-4 py-8 sm:px-6 md:px-8 md:py-10 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-7xl border border-border bg-[#f8f8f6] p-4 text-black dark:bg-[#111111] dark:text-white sm:p-5 lg:p-8">
        {/* Mobile / tablet layout */}
        <div className="lg:hidden">
          <div className="overflow-hidden bg-black/5 dark:bg-white/5">
            <div className="aspect-[4/3.25] w-full">
              <LazyVideo
                src="/videos/slydein-feature-hq.mp4"
                poster="/videos/slydein-feature-hq.jpg"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="mt-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.23em] text-[#F3C96A] sm:text-xs">
              Africa&apos;s biggest houseparty
            </p>

            <h2 className="mt-4 text-[2.2rem] font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-[2.6rem]">
              <span className="block">Your</span>
              <span className="block">Gateway</span>
              <span className="block">To Ghana</span>
              <span className="block">Parties.</span>
            </h2>

            <p className="mt-4 max-w-md text-[0.96rem] leading-6 text-black/65 dark:text-white/68">
              Big energy, real people and the kind of moments that turn one night into the story of the week.
            </p>

            <a
              href="https://tickets.slydein.com"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2"
            >
              <span className="inline-flex h-11 items-center rounded-full bg-[#5E1850] px-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#741f64]">
                Get tickets
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5E1850] text-white transition hover:bg-[#741f64]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Desktop / large-screen layout */}
        <div className="hidden lg:grid lg:grid-cols-[82px_minmax(0,520px)_1fr] lg:items-center lg:gap-8 xl:grid-cols-[92px_minmax(0,540px)_1fr] xl:gap-10">
          <div className="flex flex-col items-start gap-5">
            {steps.map((step, index) => (
              <span
                key={step}
                className={`inline-flex h-11 min-w-[3.65rem] items-center justify-center rounded-full border px-4 text-base font-semibold leading-none transition ${
                  index === 0
                    ? "border-[#5E1850] bg-[#5E1850] text-white"
                    : "border-black/40 bg-transparent text-black dark:border-white/40 dark:text-white"
                }`}
              >
                {step}
              </span>
            ))}
          </div>

          <div className="overflow-hidden bg-black/5 dark:bg-white/5">
            <div className="aspect-[1.06/1] w-full">
              <LazyVideo
                src="/videos/slydein-feature-hq.mp4"
                poster="/videos/slydein-feature-hq.jpg"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="max-w-[10.5ch] text-[3.15rem] font-semibold leading-[0.96] tracking-[-0.055em] xl:text-[3.7rem]">
              Your gateway to Ghana parties.
            </h2>

            <p className="mt-5 max-w-xl text-[1rem] leading-7 text-black/62 dark:text-white/68 xl:text-[1.06rem]">
              Big energy, real people and the kind of moments that turn one night into the story of the week.
            </p>

            <a
              href="https://tickets.slydein.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2"
            >
              <span className="inline-flex h-12 items-center rounded-full bg-[#5E1850] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#741f64]">
                Get tickets
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5E1850] text-white transition hover:-translate-y-0.5 hover:bg-[#741f64]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
