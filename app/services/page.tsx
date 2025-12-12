"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    title: "Lawn Care & Maintenance",
    description: "Keep your lawn healthy and beautiful with our regular maintenance services.",
    details: [
      "Regular mowing and grass cutting",
      "Lawn fertilizing and treatments",
      "Weed control and management",
      "Seasonal cleanups",
    ],
  },
  {
    title: "Garden Design & Installation",
    description: "Transform your outdoor space with custom garden designs tailored to your vision.",
    details: [
      "Custom garden design consultations",
      "Garden bed preparation and planting",
      "Flower and shrub installations",
      "Landscape hardscaping",
    ],
  },
  {
    title: "Pressure Washing & Cleaning",
    description: "Professional cleaning services to restore the beauty of your property.",
    details: [
      "Driveway and pathway cleaning",
      "Roof cleaning and maintenance",
      "House exterior washing",
      "Patio and deck cleaning",
    ],
  },
  {
    title: "Paving Installation",
    description: "Expert paving solutions for driveways, patios, pathways, and more.",
    details: [
      "Driveway paving installation",
      "Patio and deck construction",
      "Pathway creation",
      "Repairs and maintenance",
    ],
  },
  {
    title: "Hedge & Tree Trimming",
    description: "Professional tree and hedge shaping to maintain your landscape.",
    details: [
      "Hedge trimming and shaping",
      "Tree pruning and maintenance",
      "Tree removal services",
      "Foliage maintenance",
    ],
  },
  {
    title: "Waste Removal & Cleanup",
    description: "Complete waste removal and yard cleanup services.",
    details: [
      "Garden waste removal",
      "Rubble and debris clearance",
      "Seasonal garden cleanups",
      "Green waste recycling",
    ],
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
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Landscaping Solutions
              </span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              From quick touch-ups to full garden redesigns, we offer tailored services for homes, estates, and businesses
              across Durban.
            </p>
          </div>
        </div>
      </section>

      <main ref={sectionRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, i) => (
              <div
                key={i}
                className={`group bg-card/90 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/15 hover:border-primary/40 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground/80 leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            className={`bg-gradient-to-r from-primary via-primary/95 to-secondary text-primary-foreground p-12 rounded-3xl text-center shadow-xl shadow-primary/20 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Service?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Contact us for custom landscaping solutions tailored to your
              unique needs.
            </p>
            <Link
              href="/quote"
              className="btn-enhanced inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-full font-semibold hover:brightness-105 transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              Request a Custom Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
