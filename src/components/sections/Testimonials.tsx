import { content } from "@/src/lib/content"
import Image from "next/image"

export function Testimonials() {
  return (
    <section className="py-20 bg-kisa-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Quote Section */}
          <div className="space-y-6">
            <div className="text-4xl md:text-5xl text-kisa-text/20 font-serif">“</div>
            <blockquote className="text-xl md:text-2xl text-kisa-text font-serif leading-relaxed">
              {content.testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-kisa-text/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-kisa-text">
                  {content.testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <div className="font-medium text-base text-kisa-text">{content.testimonial.name}</div>
                <div className="text-sm text-kisa-text/60">
                  {content.testimonial.role}, {content.testimonial.company}
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/testimonial.png"
                alt={`Testimonial from ${content.testimonial.name} at ${content.testimonial.company}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
