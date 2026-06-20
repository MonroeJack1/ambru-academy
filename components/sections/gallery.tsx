import { ArrowUpRight } from "lucide-react"
import { asset } from "@/lib/base-path"

const SKOOL_LINK = "https://skool.com/ambru-academy"

const galleryItems = [
  {
    src: "/images/gallery-productivity.png",
    title: "AI Productivity Lab",
    description: "Automate repetitive tasks and reclaim your day with structured AI-powered workflows.",
    tag: "Productivity",
  },
  {
    src: "/images/gallery-prompts.png",
    title: "Prompt Engineering Studio",
    description: "Master the craft of prompting with frameworks that work across any AI tool.",
    tag: "Prompting",
  },
  {
    src: "/images/gallery-automation.png",
    title: "Automation Workflow Map",
    description: "Design end-to-end automation flows that run in the background while you focus.",
    tag: "Automation",
  },
]

export function Gallery() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" aria-labelledby="gallery-heading">
      <div className="absolute inset-0 bg-card/40" aria-hidden="true" />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] orb-violet opacity-25 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-amber uppercase tracking-widest mb-3">
            Inside the Academy
          </p>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-5"
          >
            A premium learning environment built for focus.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore the labs, studios, and workflow maps inside Ambru Academy — designed to help
            you learn faster and retain more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {galleryItems.map(({ src, title, description, tag }) => (
            <a
              key={title}
              href={SKOOL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden border border-surface-border hover:border-amber/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              aria-label={`${title} — join on Skool`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(src)}
                  alt={`${title} — futuristic AI academy interface preview`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-medium text-amber mb-1 block">{tag}</span>
                    <h3 className="text-base font-semibold text-foreground">{title}</h3>
                  </div>
                  <ArrowUpRight
                    className="size-4 text-muted-foreground group-hover:text-amber transition-colors shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
