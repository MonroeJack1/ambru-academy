import { Users, BookOpen, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Join the Skool community",
    description:
      "Create your free account on Skool and get instant access to all Ambru Academy courses, templates, and the member community.",
    highlight: "Free to join",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Follow guided AI lessons",
    description:
      "Work through structured learning tracks at your own pace. Each lesson is short, actionable, and built around a real task or workflow.",
    highlight: "Self-paced learning",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Apply AI to your daily tasks",
    description:
      "Take the prompts, templates, and workflows directly into your work, projects, and creative goals. See results from day one.",
    highlight: "Immediate results",
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" aria-labelledby="how-it-works-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" aria-hidden="true" />
      <div
        className="absolute bottom-0 left-1/3 w-[500px] h-[300px] orb-violet opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-amber uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-5"
          >
            Three steps to AI confidence.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No setup complexity. No steep learning curve. Just a clear path from curious
            to confident.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-[52px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-amber/30 via-amber/60 to-amber/30"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map(({ number, icon: Icon, title, description, highlight }) => (
              <div
                key={number}
                className="flex flex-col items-center text-center gap-5 group"
              >
                {/* Number + icon ring */}
                <div className="relative">
                  <div className="size-[72px] rounded-full glass border-2 border-amber/30 flex items-center justify-center group-hover:border-amber/60 group-hover:bg-amber-muted transition-all duration-300 shadow-lg shadow-black/20">
                    <Icon className="size-7 text-amber" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-2 -right-2 size-6 rounded-full bg-amber text-amber-foreground text-xs font-bold flex items-center justify-center shadow-md">
                    {number.replace("0", "")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 max-w-xs">
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  <span className="text-xs font-semibold text-amber mt-1">{highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
