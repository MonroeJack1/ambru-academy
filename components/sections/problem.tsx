import { Layers, GitBranch, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const painPoints = [
  {
    icon: Layers,
    title: "Too many tools",
    description:
      "Hundreds of AI tools launch every week. Most people spend more time choosing than actually using them.",
  },
  {
    icon: GitBranch,
    title: "No clear workflow",
    description:
      "Random tutorials and disconnected prompts never add up to a real system. You keep starting from scratch.",
  },
  {
    icon: Clock,
    title: "Hard to apply daily",
    description:
      "Even when you learn something new, translating it into your actual job or life takes time most people don&apos;t have.",
  },
]

export function Problem() {
  return (
    <section id="about" className="relative py-20 lg:py-28" aria-labelledby="problem-heading">
      {/* Background orb */}
      <div
        className="absolute top-0 right-1/4 w-[400px] h-[400px] orb-violet opacity-50 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-amber uppercase tracking-widest mb-3">
            The Problem
          </p>
          <h2
            id="problem-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-5"
          >
            Most people hear about AI but never really use it.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            They try random tools, watch scattered tutorials, and end up confused — without a
            clear path to actually improve their work or life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {painPoints.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="bg-card border-surface-border hover:border-amber/30 transition-all duration-300 group"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="size-11 rounded-xl bg-muted flex items-center justify-center group-hover:bg-amber-muted transition-colors">
                  <Icon
                    className="size-5 text-muted-foreground group-hover:text-amber transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground text-base">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
