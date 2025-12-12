"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Enhanced Background Image with Parallax */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `scale(${1 + scrollY * 0.0003})`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src="/professional-landscaping-garden-durban-green-lawn.jpg"
            alt="Beautiful garden landscape"
            fill
            priority
            className="object-cover"
            quality={90}
          />
        </div>

        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse" style={{ animationDelay: "0s" }} />
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-32 w-2 h-2 rounded-full bg-primary/40 animate-ping" style={{ animationDelay: "0s" }} />
        <div className="absolute top-64 right-64 w-1.5 h-1.5 rounded-full bg-secondary/40 animate-ping" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-32 w-2 h-2 rounded-full bg-primary/40 animate-ping" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-4xl">
          {/* Enhanced Hero Badges */}
          <div
            className={`flex flex-wrap gap-3 mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-sm font-semibold text-primary shadow-lg shadow-primary/20">
              <Sparkles className="w-4 h-4" />
              Premium landscaping for Durban homes
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-sm font-semibold text-primary shadow-lg shadow-primary/20">
              <CheckCircle2 className="w-4 h-4" />
              Fully insured & trusted
            </div>
          </div>

          {/* Enhanced Main Heading */}
          <h1
            className={`text-6xl md:text-8xl font-bold text-foreground mb-8 leading-[1.1] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Transform Your{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient bg-[length:200%_auto]">
                Outdoor Space
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full opacity-50"></span>
            </span>
          </h1>

          {/* Enhanced Description */}
          <p
            className={`text-xl md:text-2xl text-foreground/95 mb-10 leading-relaxed max-w-3xl font-medium transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            Premium landscaping and property maintenance services for discerning homeowners in Durban. From concept to
            completion, we bring your vision to life.
          </p>

          {/* Enhanced CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <Link
              href="/quote"
              className="group btn-enhanced btn-ripple bg-gradient-to-r from-primary to-secondary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 text-center relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Request a Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/services"
              className="group btn-enhanced btn-ripple border-2 border-primary/50 text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/10 hover:border-primary hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 text-center backdrop-blur-md bg-background/60"
            >
              <span className="flex items-center justify-center gap-2">
                View Services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap items-center gap-6 text-sm transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <div className="flex items-center gap-2 text-foreground/80">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-medium">Serving Durban since 2019</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <span className="font-medium">150+ Gardens Transformed</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }}></div>
              <span className="font-medium">5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary/50"></div>
        </div>
      </div>
    </section>
  )
}
