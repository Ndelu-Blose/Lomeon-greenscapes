"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, Mail, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    highlight: "+27 66 129 2451",
    description: "Available during business hours",
    href: "tel:+27661292451",
  },
  {
    icon: Mail,
    label: "Email Us",
    highlight: "lomeongreenscapesptyltd@gmail.com",
    description: "lusandaromeo4@gmail.com • We'll respond within 24 hours",
    href: "mailto:lomeongreenscapesptyltd@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Chat",
    highlight: "Quick responses via WhatsApp",
    description: "Share photos of your outdoor space",
    href: "https://wa.me/27661292451",
    external: true,
  },
]

export default function ContactPreview() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          address: "",
          suburb: "",
          whatsapp: formData.phone,
        }),
      })
      setSubmitted(true)
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      })
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-muted/20 via-background to-muted/20"
    >
      {/* Enhanced background blobs with animation */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-secondary/15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col gap-12 md:gap-16 px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
            Get in Touch
          </h2>
          <p className="text-base leading-relaxed text-foreground/70 sm:text-lg max-w-2xl mx-auto">
            Ready to transform your outdoor space? We&apos;re here to help bring your landscaping vision to life, from
            quick clean-ups to full garden makeovers.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.15fr,1fr]">
          {/* Left: Enhanced contact cards */}
          <div className="space-y-6">
            <div className="grid gap-4 md:gap-5 md:grid-cols-3">
              {contactMethods.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`group flex flex-col rounded-3xl bg-card/90 backdrop-blur-sm p-6 shadow-lg shadow-primary/5 ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1.5 hover:bg-card hover:shadow-2xl hover:shadow-primary/15 hover:ring-primary/40 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="mt-1 text-sm font-medium text-primary leading-snug">{item.highlight}</p>
                  <p className="mt-2 text-xs text-foreground/60 leading-relaxed">{item.description}</p>
                  {item.label === "WhatsApp Chat" && (
                    <span className="mt-4 inline-flex items-center text-xs font-semibold text-primary transition group-hover:text-primary/80 group-hover:gap-1.5 gap-1">
                      Open WhatsApp
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Enhanced quote form */}
          <div
            className={`rounded-3xl bg-card/95 backdrop-blur-md p-8 shadow-2xl shadow-primary/10 ring-1 ring-border/50 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Request a Free Quote</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Send us a few details about your property and we&apos;ll get back to you with options and pricing.
              </p>
            </div>

            {submitted ? (
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 p-8 text-center animate-fade-in">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary mb-4 shadow-lg shadow-primary/30">
                  <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">Thank you!</div>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  We&apos;ve received your request and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-border/60 bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none ring-primary/0 transition-all duration-200 focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/20"
                      placeholder="e.g. Thabo Mthembu"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-border/60 bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none ring-primary/0 transition-all duration-200 focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/20"
                      placeholder="+27 ..."
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-border/60 bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none ring-primary/0 transition-all duration-200 focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/20"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Service Type</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-border/60 bg-muted/40 px-4 py-3 text-sm text-foreground outline-none ring-primary/0 transition-all duration-200 focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Lawn care & maintenance</option>
                      <option>Garden design & installation</option>
                      <option>Pressure washing & cleaning</option>
                      <option>Paving & edging</option>
                      <option>Hedge & tree trimming</option>
                      <option>Seasonal clean-up / waste removal</option>
                      <option>Other / not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/80">Tell us about your outdoor space</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none rounded-xl border border-border/60 bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none ring-primary/0 transition-all duration-200 focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/20"
                    placeholder="Size of the area, current condition, and what you'd like to achieve..."
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-enhanced inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                  <a
                    href="https://wa.me/27661292451"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/5 px-5 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:scale-105"
                  >
                    Or message us on WhatsApp
                  </a>
                </div>

                <p className="pt-2 text-[11px] leading-relaxed text-foreground/50">
                  By sending this form you agree that we may contact you about landscaping services for your property in
                  Durban and surrounding areas.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
