import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { TrustStrip } from "@/components/sections/trust-strip"
import { Problem } from "@/components/sections/problem"
import { Solution } from "@/components/sections/solution"
import { Curriculum } from "@/components/sections/curriculum"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Community } from "@/components/sections/community"
import { Gallery } from "@/components/sections/gallery"
import { Outcomes } from "@/components/sections/outcomes"
import { FinalCTA } from "@/components/sections/final-cta"
import { FAQ } from "@/components/sections/faq"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <Solution />
        <Curriculum />
        <HowItWorks />
        <Community />
        <Gallery />
        <Outcomes />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
