"use client"

import { content } from "@/src/lib/content"
import LogoWall from "@/src/components/marketing/LogoWall"

export function Integrations() {
  // Transform integration data to match LogoWall format
  const logos = content.integrations.list.map(integration => ({
    name: integration.name,
    src: integration.logo
  }))

  return (
    <section id="integrations" className="py-20 bg-kisa-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <LogoWall 
          title={content.integrations.title}
          logos={logos}
        />
      </div>
    </section>
  )
}
