"use client"

import { content } from "@/src/lib/content"
import { AnimatedShinyTextDemo } from "@/components/ui/animated-shiny-text-demo"
import { DotBackground } from "@/components/ui/dot-background"
import Link from "next/link"


export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden" role="banner">
      <DotBackground className="min-h-screen flex items-center justify-center bg-kisa-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              {content.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto text-pretty">
              {content.hero.subheadline}
            </p>
            <Link href="/form" className="cursor-pointer flex justify-center">
              <AnimatedShinyTextDemo>
                {content.hero.cta}
              </AnimatedShinyTextDemo>
            </Link>
          </div>
        </div>
      </DotBackground>
      
      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-kisa-bg/80 to-kisa-bg pointer-events-none z-20" />
    </section>
  )
}