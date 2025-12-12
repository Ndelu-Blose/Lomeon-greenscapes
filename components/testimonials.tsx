"use client"

import { Star, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "John Smith",
    location: "Durban North",
    initials: "JS",
    quote: "Exceptional service! The team transformed our garden completely. Highly recommend.",
  },
  {
    name: "Sarah Johnson",
    location: "Umhlanga",
    initials: "SJ",
    quote: "Professional, punctual, and affordable. The best landscaping company we've worked with.",
  },
  {
    name: "Michael Brown",
    location: "Westville",
    initials: "MB",
    quote: "Great communication throughout. They understood exactly what we wanted and delivered.",
  },
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="relative overflow-hidden bg-background py-20 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        {/* Header row with rating summary */}
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mt-3 max-w-xl text-sm text-foreground/70 sm:text-base">
              Real feedback from satisfied customers trusting Lomeon Greenscapes with their outdoor spaces.
            </p>
          </div>

          <div
            className={`flex items-center gap-4 rounded-2xl bg-gradient-to-r from-primary to-secondary px-4 py-3 text-xs text-primary-foreground sm:text-sm shadow-lg shadow-primary/20 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-yellow-500/90 text-yellow-500/90 drop-shadow-sm" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold">4.9 average rating</p>
              <p className="text-[11px] text-primary-foreground/80">Based on 80+ landscaping projects around Durban</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <article
              key={t.name}
              className={`group relative flex h-full flex-col rounded-3xl bg-card/95 backdrop-blur-sm p-6 shadow-lg shadow-primary/5 ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1.5 hover:bg-card hover:shadow-xl hover:shadow-primary/15 hover:ring-primary/40 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute right-4 top-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="h-6 w-6" />
              </div>

              <div className="mb-3 flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500/90 text-yellow-500/90 drop-shadow-sm" />
                ))}
              </div>

              <p className="relative z-10 text-sm text-foreground/70 leading-relaxed">"{t.quote}"</p>

              <div className="mt-6 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-sm font-semibold text-primary shadow-md shadow-primary/10">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/60">{t.location}</p>
                </div>
              </div>

              {/* Subtle index pill */}
              <span className="mt-4 inline-flex w-fit rounded-full bg-muted px-2 py-1 text-[11px] font-medium text-foreground/60 border border-border/50">
                Project #{index + 1} · Residential
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
