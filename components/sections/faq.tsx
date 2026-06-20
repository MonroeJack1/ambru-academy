"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const SKOOL_LINK = "https://skool.com/ambru-academy"

const faqs = [
  {
    question: "Is this for beginners?",
    answer:
      "Absolutely. Ambru Academy is designed with beginners in mind. The AI Foundations track starts from zero — no prior experience with AI tools required. You'll build your knowledge step-by-step, from understanding how AI works to using it confidently in your daily tasks.",
  },
  {
    question: "Do I need technical experience?",
    answer:
      "No technical background is needed. You don't need to know how to code, understand machine learning, or have any software experience. If you can type a message, you can learn to use AI effectively. We teach practical usage, not engineering.",
  },
  {
    question: "What AI tools will I learn?",
    answer:
      "You'll learn to use the most practical and widely-available AI tools — including ChatGPT, Claude, Gemini, and others — across productivity, writing, research, and automation. We focus on how to use them for real outcomes, not just tool reviews.",
  },
  {
    question: "Is the community hosted on Skool?",
    answer:
      "Yes. Ambru Academy lives entirely on Skool, a dedicated platform for communities and courses. Skool keeps everything in one place: lessons, discussions, challenges, and community posts. You'll create a free Skool account to access everything.",
  },
  {
    question: "How do I join?",
    answer: `Joining is simple. Click any "Join on Skool" button on this page, create a free Skool account, and you'll have immediate access to the Ambru Academy community, courses, and templates. No credit card required.`,
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 lg:py-28 overflow-hidden" aria-labelledby="faq-heading">
      <div
        className="absolute top-0 left-1/3 w-[400px] h-[400px] orb-violet opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-amber uppercase tracking-widest mb-3">FAQ</p>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-5"
          >
            Common questions answered.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know before joining Ambru Academy.
          </p>
        </div>

        <div className="flex flex-col gap-3" role="list">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={question}
              role="listitem"
              className={cn(
                "rounded-xl border transition-all duration-200",
                openIndex === index
                  ? "border-amber/30 bg-amber-muted"
                  : "border-surface-border bg-card hover:border-amber/20"
              )}
            >
              <button
                className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className={cn(
                    "text-base font-semibold leading-snug transition-colors",
                    openIndex === index ? "text-amber" : "text-foreground"
                  )}
                >
                  {question}
                </span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-muted-foreground mt-0.5 transition-transform duration-200",
                    openIndex === index && "rotate-180 text-amber"
                  )}
                  aria-hidden="true"
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {answer}{" "}
                  {index === 4 && (
                    <a
                      href={SKOOL_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber underline underline-offset-2 hover:text-amber/80 transition-colors"
                    >
                      Join here.
                    </a>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
