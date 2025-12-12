"use client"

import { Leaf, Droplets, Ruler, Sparkles, TreePine, Trash2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Leaf,
    title: "Lawn Care & Maintenance",
    desc: "Regular mowing, edging, fertilising, and weed control to keep your lawn lush and healthy.",
    meta: "Weekly · Fortnightly · Monthly",
    tag: "Maintenance",
  },
  {
    icon: TreePine,
    title: "Garden Design & Installation",
    desc: "Full planting plans, beds, lighting, and hardscaping designed around your home and lifestyle.",
    meta: "From small gardens to large estates",
    tag: "Design",
  },
  {
    icon: Droplets,
    title: "Pressure Washing & Cleaning",
    desc: "Deep cleaning for driveways, paving, walls, and roofs to remove moss, algae, and grime.",
    meta: "Driveways · Walls · Roofs",
    tag: "Cleaning",
  },
  {
    icon: Ruler,
    title: "Paving, Paths & Edging",
    desc: "Neat edging, paved walkways, and outdoor living areas that tie your whole garden together.",
    meta: "New installs & upgrades",
    tag: "Hardscape",
  },
  {
    icon: Sparkles,
    title: "Estate & Complex Care",
    desc: "Reliable long-term maintenance for residential complexes, estates, and commercial sites.",
    meta: "Custom service agreements",
    tag: "Commercial",
  },
  {
    icon: Trash2,
    title: "Seasonal Clean-ups & Waste",
    desc: "Storm clean-ups, leaf removal, and responsible disposal of all green waste.",
    meta: "One-off or seasonal",
    tag: "Clean-ups",
  },
]

export default function Services() {
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
    <section id="services" ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-muted/20 via-background to-muted/20 py-20 md:py-24">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Services</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Comprehensive landscaping, done properly
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-foreground/70 sm:text-base">
            From quick touch-ups to full garden redesigns, Lomeon Greenscapes offers tailored services for homes, estates,
            and businesses across Durban.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group flex flex-col rounded-3xl bg-card/90 backdrop-blur-sm p-6 shadow-lg shadow-primary/5 ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1.5 hover:bg-card hover:shadow-xl hover:shadow-primary/15 hover:ring-primary/40 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{service.desc}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-foreground/60">
                <span>{service.meta}</span>
                <span className="inline-flex items-center gap-1 text-primary transition group-hover:text-primary/80 group-hover:gap-1.5">
                  Learn more
                  <span className="text-[13px]">↗</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
