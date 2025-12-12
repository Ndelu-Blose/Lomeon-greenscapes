"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Instagram, Facebook } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Contact() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let&apos;s Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Project
              </span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Ready to transform your outdoor space? We&apos;re here to help bring your landscaping vision to life.
              Get in touch and let&apos;s discuss your project.
            </p>
          </div>
        </div>
      </section>

      <main ref={sectionRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Cards */}
            <div className="space-y-6">
              {/* Phone Card */}
              <div
                className={`group bg-card/90 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15 hover:border-primary/40 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                    <a
                      href="tel:+27661292451"
                      className="text-2xl font-semibold text-foreground hover:text-primary transition block mb-2"
                    >
                      +27 66 129 2451
                    </a>
                    <p className="text-sm text-foreground/60">Available during business hours</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div
                className={`group bg-card/90 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15 hover:border-primary/40 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3">Email</h3>
                    <div className="space-y-2 mb-3">
                      <a
                        href="mailto:lomeongreenscapesptyltd@gmail.com"
                        className="block text-lg text-foreground/80 hover:text-primary transition break-all font-medium"
                      >
                        lomeongreenscapesptyltd@gmail.com
                      </a>
                      <a
                        href="mailto:lusandaromeo4@gmail.com"
                        className="block text-lg text-foreground/80 hover:text-primary transition break-all font-medium"
                      >
                        lusandaromeo4@gmail.com
                      </a>
                    </div>
                    <p className="text-sm text-foreground/60">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div
                className={`group bg-card/90 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15 hover:border-primary/40 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">Address</h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Adams Mission, Enkanyisweni Area
                      <br />
                      Durban, KZN, South Africa
                    </p>
                  </div>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div
                className={`group bg-card/90 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15 hover:border-primary/40 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3">Operating Hours</h3>
                    <div className="space-y-1.5">
                      <p className="text-foreground/80 font-medium">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-foreground/80 font-medium">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-foreground/60">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Actions */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div
                className={`bg-card/90 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-xl shadow-primary/10 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.5s" }}
              >
                <h2 className="text-2xl font-bold text-primary mb-6">Quick Contact Methods</h2>

                <div className="space-y-4 mb-8">
                  <a
                    href="https://wa.me/27661292451"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-enhanced group flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-green-500/40 hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="tel:+27661292451"
                    className="btn-enhanced group flex items-center justify-center gap-3 w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us Now
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <Link
                    href="/quote"
                    className="btn-enhanced group flex items-center justify-center gap-3 w-full border-2 border-primary/30 bg-primary/5 text-primary py-4 rounded-full font-semibold hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                  >
                    Request a Quote
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Social Media Card */}
              <div
                className={`bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 backdrop-blur-sm p-8 rounded-3xl border border-primary/20 shadow-lg transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.6s" }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">Follow Us</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Connect with us on social media for project updates and landscaping tips.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://instagram.com/lomeon_greenscapes_pty_ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 px-6 py-3 rounded-full font-semibold text-foreground hover:bg-card hover:border-primary/50 hover:scale-105 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 px-6 py-3 rounded-full font-semibold text-foreground hover:bg-card hover:border-primary/50 hover:scale-105 transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5 text-primary" />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
