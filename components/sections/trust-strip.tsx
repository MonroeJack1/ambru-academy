import { Zap, Target, Users, BookOpen, TrendingUp, Shield } from "lucide-react"

const trustItems = [
  { icon: Zap, label: "Practical AI workflows" },
  { icon: Target, label: "Built for daily tasks" },
  { icon: Users, label: "Community-based learning" },
  { icon: BookOpen, label: "Beginner-friendly lessons" },
  { icon: TrendingUp, label: "Real skill outcomes" },
  { icon: Shield, label: "No fluff, no jargon" },
]

export function TrustStrip() {
  return (
    <section className="relative py-8 border-y border-surface-border overflow-hidden" aria-label="Trust indicators">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-card/60" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          role="list"
          aria-label="Key features"
        >
          {trustItems.map(({ icon: Icon, label }) => (
            <li key={label}>
              <div className="flex items-center gap-2 px-4 py-2.5 glass rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-amber/30 transition-all duration-200 group">
                <Icon className="size-3.5 text-amber group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                <span>{label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
