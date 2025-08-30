import { Header } from "@/src/components/layout/Header"
import { Hero } from "@/src/components/sections/Hero"
import { Testimonials } from "@/src/components/sections/Testimonials"
import { HowItWorks } from "@/src/components/sections/HowItWorks"
import { UseCases } from "@/src/components/sections/UseCases"
import { Integrations } from "@/src/components/sections/Integrations"
import { FAQ } from "@/src/components/sections/FAQ"
import { Footer } from "@/src/components/layout/Footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main" role="main">
        <Hero />
        <HowItWorks />
        <Integrations />
        <Testimonials />
        <UseCases />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
