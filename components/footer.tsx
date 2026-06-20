import { Sparkles, ExternalLink } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const SKOOL_LINK = "https://skool.com/ambru-academy"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Community", href: "#community" },
  { label: "FAQ", href: "#faq" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-surface-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="size-7 rounded-lg bg-amber/15 border border-amber/30 flex items-center justify-center">
                <Sparkles className="size-4 text-amber" />
              </div>
              <span className="font-semibold text-foreground text-base">
                Ambru <span className="text-amber">Academy</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Practical AI education for everyday work and life. Join thousands of learners building real AI skills on Skool.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Navigation</h3>
            <ul className="flex flex-col gap-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community CTA */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Community</h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              Learn alongside thousands of members applying AI to their daily work.
            </p>
            <a
              href={SKOOL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber hover:text-amber/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded"
            >
              Join on Skool
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>

        <Separator className="my-8 bg-surface-border" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ambru Academy. All rights reserved.</p>
          <p className="text-xs">Practical AI education for the modern world.</p>
        </div>
      </div>
    </footer>
  )
}
