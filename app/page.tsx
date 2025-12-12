"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import BeforeAfter from "@/components/before-after"
import FounderPreview from "@/components/founder-preview"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import ContactPreview from "@/components/contact-preview"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"
import ScrollRevealProvider from "@/components/scroll-reveal-provider"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <ScrollRevealProvider />
      <div className={`min-h-screen bg-background ${isLoaded ? "page-load" : "opacity-0"}`}>
        <Navigation />
        <Hero />
        <Services />
        <BeforeAfter />
        <FounderPreview />
        <WhyChooseUs />
        <Testimonials />
        <ContactPreview />
        <CallToAction />
        <Footer />
      </div>
    </>
  )
}
