"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Award, Heart, Leaf, Target, Users, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Founder() {
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

      <main ref={sectionRef}>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`order-2 lg:order-1 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
                  <Sparkles className="w-4 h-4" />
                  Founder & Visionary
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Meet{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Lusanda Ndlovu
                  </span>
                </h1>
                <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                  The passionate founder behind Lomeon Greenscapes, dedicated to transforming outdoor spaces and bringing
                  your landscaping vision to life.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="btn-enhanced btn-ripple bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="/about"
                    className="btn-enhanced btn-ripple border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
              <div
                className={`order-1 lg:order-2 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/founder-lusanda-ndlovu.jpeg"
                      alt="Lusanda Ndlovu - Founder of Lomeon Greenscapes"
                      width={600}
                      height={600}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-16 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">The Story Behind Lomeon</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>

            <div
              className={`prose prose-lg max-w-none space-y-6 text-foreground/80 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.5s" }}
            >
              <p className="text-lg leading-relaxed">
                Founded in 2019, Lomeon Greenscapes was born from Lusanda Ndlovu&apos;s deep passion for creating
                beautiful outdoor spaces and maintaining properties to the highest standards. What started as a vision to
                transform gardens across Durban has grown into one of the region&apos;s most trusted landscaping companies.
              </p>
              <p className="text-lg leading-relaxed">
                With years of hands-on experience in landscaping and property maintenance, Lusanda recognized the need for
                a company that combines professional expertise with genuine care for each client&apos;s unique vision. Every
                project is approached with the same dedication and attention to detail that has become the hallmark of
                Lomeon Greenscapes.
              </p>
              <p className="text-lg leading-relaxed">
                Today, Lomeon has transformed over 150 gardens across KwaZulu-Natal, earning a 5-star average rating from
                satisfied clients. But beyond the numbers, it&apos;s the relationships built and the outdoor spaces
                transformed that truly define the company&apos;s success.
              </p>
            </div>
          </div>
        </section>

        {/* Values & Philosophy */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-16 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Values & Philosophy</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                The principles that guide every project and interaction
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Passion-Driven",
                  description:
                    "Every project is approached with genuine passion and enthusiasm. We don't just work on gardens—we create outdoor spaces that bring joy and enhance lives.",
                },
                {
                  icon: Target,
                  title: "Excellence First",
                  description:
                    "We never compromise on quality. From the initial consultation to the final touches, excellence is our standard, not an exception.",
                },
                {
                  icon: Users,
                  title: "Client-Centered",
                  description:
                    "Your vision is our priority. We listen carefully, communicate clearly, and work collaboratively to ensure your outdoor space exceeds expectations.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className={`bg-card/90 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/15 hover:border-primary/40 group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${0.7 + i * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-16 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "1s" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Recognition & Impact</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Building trust and transforming landscapes across Durban
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, value: "150+", label: "Gardens Transformed" },
                { icon: Leaf, value: "5⭐", label: "Average Rating" },
                { icon: Target, value: "2019", label: "Serving Since" },
                { icon: Users, value: "100%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-3xl border border-primary/20 text-center shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/15 group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${1.1 + i * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-foreground/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your vision and bring your outdoor dreams to life. Get in touch for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="btn-enhanced btn-ripple bg-background text-primary px-8 py-4 rounded-full font-semibold hover:brightness-105 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="btn-enhanced btn-ripple border-2 border-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
