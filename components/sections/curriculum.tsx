import {
  Brain,
  MessageSquare,
  LayoutDashboard,
  Pen,
  GitMerge,
  Briefcase,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tracks = [
  {
    icon: Brain,
    title: "AI Foundations",
    description:
      "Understand how modern AI works without the tech jargon. Build a mental model that makes every other lesson click.",
    outcome: "Confident AI mindset",
    level: "Beginner",
  },
  {
    icon: MessageSquare,
    title: "Prompting for Real Work",
    description:
      "Learn the principles behind great prompts and apply them to email, documents, research, and decision-making.",
    outcome: "10x faster output",
    level: "Beginner",
  },
  {
    icon: LayoutDashboard,
    title: "Productivity & Daily Tasks",
    description:
      "Replace repetitive daily work with AI-assisted workflows. Summarize, organize, and prioritize in minutes.",
    outcome: "Hours saved weekly",
    level: "Intermediate",
  },
  {
    icon: Pen,
    title: "Content Creation with AI",
    description:
      "Write posts, scripts, newsletters, and pitches faster — while keeping your voice and quality high.",
    outcome: "Consistent content output",
    level: "Intermediate",
  },
  {
    icon: GitMerge,
    title: "Automation & Workflows",
    description:
      "Connect AI tools to automate repetitive processes, notifications, data handling, and multi-step tasks.",
    outcome: "Fully automated pipelines",
    level: "Advanced",
  },
  {
    icon: Briefcase,
    title: "Business Use Cases",
    description:
      "Apply AI to sales, operations, customer support, research, and strategic planning in your business.",
    outcome: "Competitive advantage",
    level: "Advanced",
  },
]

const levelColor: Record<string, string> = {
  Beginner: "bg-amber-muted text-amber border-amber/20",
  Intermediate: "bg-violet/10 text-violet border-violet/20",
  Advanced: "bg-muted text-muted-foreground border-surface-border",
}

export function Curriculum() {
  return (
    <section
      id="curriculum"
      className="relative py-20 lg:py-28 overflow-hidden"
      aria-labelledby="curriculum-heading"
    >
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] orb-amber opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-amber uppercase tracking-widest mb-3">
            Curriculum
          </p>
          <h2
            id="curriculum-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-5"
          >
            Six learning tracks, built for real results.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each track focuses on practical application, not theory. You&apos;ll learn by doing — with
            templates, workflows, and examples you can use immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tracks.map(({ icon: Icon, title, description, outcome, level }) => (
            <Card
              key={title}
              className="bg-card border-surface-border hover:border-amber/30 transition-all duration-300 group flex flex-col"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="size-11 rounded-xl bg-muted flex items-center justify-center group-hover:bg-amber-muted transition-colors shrink-0">
                    <Icon
                      className="size-5 text-muted-foreground group-hover:text-amber transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <Badge
                    variant="secondary"
                    className={`text-xs font-medium rounded-full ${levelColor[level]}`}
                  >
                    {level}
                  </Badge>
                </div>
                <CardTitle className="text-base font-semibold text-foreground">{title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="flex items-center gap-2 pt-3 border-t border-surface-border">
                  <div className="size-1.5 rounded-full bg-amber" aria-hidden="true" />
                  <span className="text-xs font-medium text-amber">{outcome}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
