"use client"

import { ArrowRight, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { asset } from "@/lib/base-path"

const SKOOL_LINK = "https://skool.com/ambru-academy"

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] orb-amber pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] orb-violet pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="flex flex-col gap-6">
            <Badge
              variant="secondary"
              className="w-fit bg-amber-muted text-amber border-amber/20 text-xs font-medium px-3 py-1.5 rounded-full"
            >
              AI skills for everyday life and work
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] text-balance">
              Become better at work, learning, and{" "}
              <span className="text-amber">life with practical AI.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Ambru Academy helps you master AI tools through simple lessons, real workflows,
              and a supportive Skool community.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                render={<a href={SKOOL_LINK} target="_blank" rel="noopener noreferrer" />}
                size="lg"
                className="bg-amber text-amber-foreground hover:bg-amber/90 font-semibold shadow-xl shadow-amber/20 transition-all hover:shadow-amber/30 hover:-translate-y-0.5 group"
              >
                Join Ambru Academy
                <ArrowRight
                  data-icon="inline-end"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-surface-border text-foreground hover:bg-muted/50 font-medium"
                onClick={() => {
                  document
                    .querySelector("#curriculum")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Explore what you&apos;ll learn
                <ChevronDown data-icon="inline-end" />
              </Button>
            </div>

            {/* Social proof micro-stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { value: "10+", label: "Tracks" },
                { value: "100%", label: "Practical" },
                { value: "Free", label: "Community" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-bold text-amber">{stat.value}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Glow ring behind image */}
              <div
                className="absolute inset-4 rounded-2xl bg-amber/10 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden border border-surface-border shadow-2xl shadow-black/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset("/images/hero-dashboard.png")}
                  alt="Ambru Academy AI learning dashboard — futuristic interface showing learning paths, prompt modules, and automation flows"
                  width={700}
                  height={500}
                  className="w-full object-cover"
                />
                {/* Overlay shimmer */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
