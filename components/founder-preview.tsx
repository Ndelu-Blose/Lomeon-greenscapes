"use client"

import { Sparkles, Award, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function FounderPreview() {
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
    <section id="about" ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-[3rem] bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-[3rem] bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        {/* Photo / card stack */}
        <div className="order-2 w-full max-w-md lg:order-1">
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Back shape */}
            <div className="absolute -left-6 -top-6 h-64 w-full rounded-[2.25rem] bg-primary/10" />

            {/* Main card */}
            <div className="relative rounded-[2.25rem] bg-card/90 backdrop-blur-md p-4 shadow-2xl shadow-primary/15 ring-1 ring-border/50">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.9rem] bg-muted">
                <Image
                  src="/founder-lusanda-ndlovu.jpeg"
                  alt="Lusanda Ndlovu - Founder of Lomeon Greenscapes"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="order-1 w-full lg:order-2">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Meet the Founder
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
              Meet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Lusanda <span className="block sm:inline">Ndlovu</span>
              </span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
              Founded in 2019, Lomeon Greenscapes was born from Lusanda&apos;s deep passion for creating beautiful
              outdoor spaces. With years of hands-on experience, she has built a company that combines professional
              expertise with genuine care for each client&apos;s unique vision.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
              Every project is approached with the same dedication and attention to detail that has transformed over 150
              gardens across KwaZulu-Natal, from compact Durban North homes to expansive estates.
            </p>

            {/* Small credibility badge */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-[11px] font-medium text-primary-foreground shadow-lg shadow-primary/20">
                <Award className="h-3.5 w-3.5 text-amber-300" />
                Trusted by homeowners & estates across Durban
              </div>
              <Link
                href="/founder"
                className="btn-enhanced inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 group"
              >
                Learn More About Lusanda
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
