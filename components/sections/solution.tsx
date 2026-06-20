import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const SKOOL_LINK = "https://skool.com/ambru-academy"

const solutionPoints = [
  "Step-by-step lessons you can apply immediately",
  "Real workflows built for real tasks — no theory overload",
  "A supportive community that learns alongside you",
  "Covers productivity, creativity, business, and automation",
  "Updated regularly as AI evolves",
  "Built for beginners and intermediate learners alike",
]

export function Solution() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" aria-labelledby="solution-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-card/40" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] orb-amber opacity-30 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Visual block */}
          <div className="relative order-2 lg:order-1">
            <div className="glass rounded-2xl p-6 border border-amber/20">
              {/* Mock UI */}
              <div className="flex items-center gap-2 mb-5">
                <div className="size-3 rounded-full bg-muted-foreground/30" />
                <div className="size-3 rounded-full bg-muted-foreground/30" />
                <div className="size-3 rounded-full bg-amber/50" />
                <div className="h-px flex-1 bg-surface-border ml-2" />
                <span className="text-xs text-muted-foreground">Ambru Academy</span>
              </div>

              {/* Learning tracks preview */}
              <div className="flex flex-col gap-3">
                {[
                  { track: "AI Foundations", progress: 100, color: "bg-amber" },
                  { track: "Prompting for Real Work", progress: 72, color: "bg-amber" },
                  { track: "Productivity & Daily Tasks", progress: 45, color: "bg-violet" },
                  { track: "Content Creation with AI", progress: 20, color: "bg-violet" },
                ].map(({ track, progress, color }) => (
                  <div key={track} className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground font-medium">{track}</span>
                      <span className="text-muted-foreground">{progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full ${color} opacity-80 transition-all`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Prompt card */}
              <div className="mt-5 p-4 bg-muted rounded-xl border border-surface-border">
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-widest font-medium">Daily Prompt</p>
                <p className="text-sm text-foreground leading-relaxed">
                  "Summarize this meeting transcript and extract the 3 action items..."
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs text-amber font-medium">View workflow</span>
                  <ArrowRight className="size-3 text-amber" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-4 -right-4 glass-amber rounded-xl p-4 border border-amber/20 shadow-xl">
              <p className="text-2xl font-bold text-amber">3h+</p>
              <p className="text-xs text-muted-foreground mt-0.5">saved per week</p>
            </div>
          </div>

          {/* Right — Copy */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <p className="text-sm font-semibold text-amber uppercase tracking-widest">
              The Solution
            </p>
            <h2
              id="solution-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            >
              A practical AI learning community with a clear path.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ambru Academy is built around one idea: AI should make your life easier today, not
              someday. We give you structured lessons, real workflows, and a community that helps
              you apply everything.
            </p>

            <ul className="flex flex-col gap-3" role="list">
              {solutionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    className="size-5 text-amber shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                render={<a href={SKOOL_LINK} target="_blank" rel="noopener noreferrer" />}
                size="lg"
                className="bg-amber text-amber-foreground hover:bg-amber/90 font-semibold shadow-lg shadow-amber/20 hover:shadow-amber/30 hover:-translate-y-0.5 transition-all group"
              >
                Join Ambru Academy
                <ArrowRight
                  data-icon="inline-end"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
