import {
  Timer,
  Wand2,
  Search,
  FileText,
  SlidersHorizontal,
  Compass,
} from "lucide-react"

const outcomes = [
  {
    icon: Timer,
    title: "Save hours on repetitive tasks",
    description:
      "Automate summaries, emails, research, and data formatting so you can focus on work that actually matters.",
  },
  {
    icon: Wand2,
    title: "Write better prompts",
    description:
      "Craft prompts that get the exact output you need — first time, every time.",
  },
  {
    icon: Search,
    title: "Use AI for research and planning",
    description:
      "Turn hours of research into a structured plan in minutes using AI-powered thinking frameworks.",
  },
  {
    icon: FileText,
    title: "Create content faster",
    description:
      "Produce blog posts, social content, newsletters, and pitches without the blank-page struggle.",
  },
  {
    icon: SlidersHorizontal,
    title: "Build personal productivity systems",
    description:
      "Design AI-augmented workflows tailored to your unique role, goals, and schedule.",
  },
  {
    icon: Compass,
    title: "Know which AI tools to use and when",
    description:
      "Stop wasting time on the wrong tools. Learn to choose and combine AI for every situation.",
  },
]

export function Outcomes() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" aria-labelledby="outcomes-heading">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/4 left-0 w-[400px] h-[400px] orb-amber opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-amber uppercase tracking-widest mb-3">
            Outcomes
          </p>
          <h2
            id="outcomes-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-5"
          >
            What you&apos;ll be able to do.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            After completing Ambru Academy tracks, you&apos;ll have real, measurable capabilities —
            not just awareness of AI tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-amber/30 transition-all duration-300 group"
            >
              <div className="size-11 rounded-xl bg-amber-muted flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="size-5 text-amber" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
