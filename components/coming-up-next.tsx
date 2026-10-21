import { ArrowUpRight } from "lucide-react"

const upcoming = [
  {
    title: "SlydeIn After Dark",
    meta: "FRI • ACCRA • 10PM",
    image: "/events/coming-1.jpg",
  },
  {
    title: "House Party Sessions",
    meta: "SAT • ACCRA • 9PM",
    image: "/events/coming-2.jpg",
  },
  {
    title: "SlydeIn Night Shift",
    meta: "NEXT DROP • GHANA",
    image: "/events/coming-3.jpg",
  },
]

export function ComingUpNext() {
  return (
    <section id="events" className="bg-background px-4 py-24 text-foreground sm:px-6 md:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#5e1850] dark:text-[#d79bc9]">Don&apos;t miss the next one</p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl">Coming up next</h2>
          </div>
          <a href="https://egotickets.com/events/slyde-in-houseparty-7da4146a" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5e1850] transition hover:text-[#7b226a] dark:text-[#d79bc9] dark:hover:text-white">
            View all events <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {upcoming.map((event) => (
            <article key={event.title} className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-border bg-card">
              <div className="relative h-[540px] overflow-hidden sm:h-[610px] md:h-[560px] lg:h-[640px] xl:h-[690px]">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-black/8" />
              </div>

              <div className="flex min-h-[150px] flex-1 flex-col justify-between gap-5 p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#5e1850] dark:text-[#d79bc9]">{event.meta}</p>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="max-w-[12ch] text-2xl font-semibold leading-[1] tracking-[-0.04em]">{event.title}</h3>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#5e1850] text-white transition duration-300 group-hover:rotate-45 group-hover:bg-[#7b226a] dark:bg-[#d79bc9] dark:text-[#1a0b17] dark:group-hover:bg-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

