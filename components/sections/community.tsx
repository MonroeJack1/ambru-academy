import { ArrowRight, BookOpen, MessageCircle, Trophy, FileText, Bell, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const SKOOL_LINK = "https://skool.com/ambru-academy"

const communityFeatures = [
  {
    icon: BookOpen,
    title: "Courses",
    description: "Structured tracks from AI basics to advanced automation.",
  },
  {
    icon: MessageCircle,
    title: "Discussions",
    description: "Ask questions and share breakthroughs with other members.",
  },
  {
    icon: Trophy,
    title: "Challenges",
    description: "Weekly AI challenges to sharpen your skills in practice.",
  },
  {
    icon: FileText,
    title: "Templates",
    description: "Ready-to-use prompt packs and workflow templates.",
  },
  {
    icon: Bell,
    title: "Weekly Prompts",
    description: "Fresh learning prompts delivered every week.",
  },
  {
    icon: Lightbulb,
    title: "Practical Examples",
    description: "Real use cases and before/after walkthroughs.",
  },
]

export function Community() {
  return (
    <section
      id="community"
      className="relative py-20 lg:py-28 overflow-hidden"
      aria-labelledby="community-heading"
    >
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] orb-amber opacity-25 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold text-amber uppercase tracking-widest">
              Community
            </p>
            <h2
              id="community-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            >
              Learning is better when you&apos;re not alone.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Ambru Academy Skool community is where the real learning happens. Share
              wins, ask for help, discover new workflows, and stay motivated with a group
              of people who get it.
            </p>

            <Button
              render={<a href={SKOOL_LINK} target="_blank" rel="noopener noreferrer" />}
              size="lg"
              className="w-fit bg-amber text-amber-foreground hover:bg-amber/90 font-semibold shadow-lg shadow-amber/20 hover:shadow-amber/30 hover:-translate-y-0.5 transition-all group"
            >
              Enter the Ambru Academy community
              <ArrowRight
                data-icon="inline-end"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Button>
          </div>

          {/* Right — Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {communityFeatures.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className="bg-card border-surface-border hover:border-amber/30 transition-all duration-300 group"
              >
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="size-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-amber-muted transition-colors shrink-0">
                    <Icon
                      className="size-4 text-muted-foreground group-hover:text-amber transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
