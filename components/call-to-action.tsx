"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function CallToAction() {
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
      { threshold: 0.2 },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      observer.disconnect()
    }
  }, [])

  const contentClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8"

  const buttonsClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8"

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-r from-primary to-secondary text-primary-foreground relative overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      {/* Decorative gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-700 ${contentClasses}`}
        >
          <div className="text-left md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl">
              Get a free, no-obligation quote for your property. Share a few details and we&apos;ll respond with
              options and timelines.
            </p>
          </div>
          <div
            className={`flex flex-col sm:flex-row gap-4 shrink-0 transition-all duration-700 ${buttonsClasses}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <Link
              href="/quote"
              className="btn-enhanced btn-ripple bg-background text-primary px-8 py-4 rounded-full font-semibold hover:brightness-105 transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 hover:scale-105 flex items-center justify-center gap-2"
            >
              Request a Quote
            </Link>
            <a
              href="https://wa.me/27661292451"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-enhanced btn-ripple border-2 border-primary-foreground/80 px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
