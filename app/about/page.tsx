"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CheckCircle, Award, Shield, Users } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function About() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Lomeon Greenscapes
              </span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Premium landscaping and property maintenance services for discerning homeowners in Durban, KZN.
            </p>
          </div>
        </div>
      </section>

      <main ref={sectionRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/founder-lusanda-ndlovu.jpeg"
                  alt="Owner Lusanda Ndlovu"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full aspect-square"
                />
              </div>
            </div>
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Building Excellence Since 2019</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Lomeon Greenscapes PTY LTD was founded by Lusanda Ndlovu with a passion for transforming outdoor spaces
                and maintaining beautiful properties. With years of experience in landscaping and property maintenance,
                we&apos;ve become one of the most trusted names in the Durban area.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Our mission is simple: deliver exceptional landscaping services that exceed expectations, build lasting
                relationships with our clients, and maintain the highest standards of professionalism and quality.
              </p>
              <div className="space-y-4">
                {[
                  "Professional & Certified Team",
                  "10+ Years of Industry Experience",
                  "Fully Insured & Reliable",
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-lg text-foreground/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <section className="mb-16">
            <div
              className={`text-center mb-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Values</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                The principles that guide every project and define our commitment to excellence
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We deliver superior craftsmanship and attention to detail in every project.",
                },
                {
                  icon: Shield,
                  title: "Reliability",
                  description: "You can count on us to show up on time and deliver exactly what we promise.",
                },
                {
                  icon: Users,
                  title: "Sustainability",
                  description: "We care for the environment and use eco-friendly practices when possible.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className={`group bg-card/90 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/15 hover:border-primary/40 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${0.7 + i * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
