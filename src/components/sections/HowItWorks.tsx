"use client"

import { useEffect, useRef, useState } from "react"
import { content } from "@/src/lib/content"
import { Icon } from "@/components/ui/Icon"
import { cn } from "@/lib/utils"

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const { eyebrow, title, description, steps } = content.howItWorks

  return (
    <section 
      ref={sectionRef}
      id="how-it-works" 
      className="py-20 bg-kisa-bg" 
      role="region" 
      aria-labelledby="how-it-works-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
            {eyebrow}
          </div>
          <h2 
            id="how-it-works-title"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-kisa-text mb-4 text-balance"
          >
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {description}
          </p>
        </div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="flex items-start justify-between relative">
              {/* Connecting Line */}
              <svg 
                className="absolute top-8 left-0 w-full h-4 z-0 pointer-events-none"
                viewBox="0 0 100 8" 
                preserveAspectRatio="none"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* First wavy line: icon 1 to icon 2 */}
                <path
                  d="M16.5 4 Q25 1 33 4 Q41 7 49.5 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="2 5.5"
                  className="text-muted-foreground opacity-75"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Second wavy line: icon 2 to icon 3 */}
                <path
                  d="M50.5 4 Q58 1 66 4 Q74 7 83.5 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="2 5.5"
                  className="text-muted-foreground opacity-75"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col items-center text-center relative z-10 flex-1 max-w-xs transition-all duration-700 ease-out",
                    isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8",
                    "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0"
                  )}
                  style={{ 
                    transitionDelay: isVisible ? `${index * 200}ms` : '0ms' 
                  }}
                >
                  {/* Icon Chip */}
                  <div className="w-16 h-16 rounded-full bg-secondary/10 border border-border/50 flex items-center justify-center mb-6 backdrop-blur-sm">
                    <Icon 
                      name={step.icon} 
                      className="w-8 h-8 text-kisa-text" 
                      aria-hidden={true} 
                    />
                  </div>
                  
                  {/* Step Content */}
                  <h3 className="font-semibold text-lg text-kisa-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Icon Chip */}
                <div className="w-12 h-12 rounded-full bg-secondary/10 border border-border/50 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Icon 
                    name={step.icon} 
                    className="w-6 h-6 text-kisa-text" 
                    aria-hidden={true} 
                  />
                </div>
                
                {/* Step Content */}
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold text-base text-kisa-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connecting Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 mt-12 w-0.5 h-6 bg-border/30" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
