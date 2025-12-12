"use client"

import { CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const reasons = [
  "Professional, experienced team with years of expertise",
  "Quality work backed by customer satisfaction guarantee",
  "Competitive pricing and transparent quotes",
  "Responsive communication via phone, WhatsApp, and email",
  "Fully insured and reliable service",
  "Portfolio of successful projects across Durban",
]

export default function WhyChooseUs() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 },
    )

    const items = sectionRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Subtle organic background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${visibleItems.length > 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <img
              src="/team-of-professionals-working-on-garden-landscape.jpg"
              alt="Professional landscaping team"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div ref={sectionRef} className={`transition-all duration-700 ${visibleItems.length > 0 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`} style={{ transitionDelay: "0.2s" }}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-10">Why Choose Lomeon Greenscapes</h2>
            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  data-index={i}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    visibleItems.includes(i) ? "animate-fade-up opacity-100" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/10">
                    <CheckCircle className="w-6 h-6 text-primary stroke-[2.5]" />
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed pt-1">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
