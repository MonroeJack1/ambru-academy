import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const SKOOL_LINK = "https://skool.com/ambru-academy"

export function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden" aria-label="Join Ambru Academy">
      {/* Rich background */}
      <div className="absolute inset-0 bg-card" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-25" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] orb-amber opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] orb-violet opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div
          className="size-16 rounded-2xl bg-amber-muted border border-amber/30 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-amber/10"
          aria-hidden="true"
        >
          <Sparkles className="size-8 text-amber" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance mb-6 leading-[1.1]">
          Start learning AI the practical way.
        </h2>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          Join Ambru Academy on Skool and turn AI from something confusing into a daily advantage.
          Real lessons. Real workflows. A community that helps you grow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            render={<a href={SKOOL_LINK} target="_blank" rel="noopener noreferrer" />}
            size="lg"
            className="text-base px-8 py-6 bg-amber text-amber-foreground hover:bg-amber/90 font-semibold shadow-xl shadow-amber/25 hover:shadow-amber/35 hover:-translate-y-0.5 transition-all group"
          >
            Join on Skool — It&apos;s Free
            <ArrowRight
              data-icon="inline-end"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Button>
        </div>

        {/* Trust note */}
        <p className="mt-6 text-sm text-muted-foreground">
          No credit card required &middot; Join the Skool community today
        </p>
      </div>
    </section>
  )
}
