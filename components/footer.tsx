"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

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

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className={`bg-gradient-to-b from-foreground/95 to-foreground text-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/lomeon greenscapes logo.png"
                alt="Lomeon Greenscapes Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-xl font-bold">Lomeon Greenscapes</h3>
            </div>
            <p className="opacity-80 leading-relaxed text-sm max-w-[15rem]">
              Premium landscaping and property maintenance for homes, estates, and businesses across Durban, KZN.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2 opacity-80 text-sm">
              <li>
                <Link href="/about" className="hover:opacity-100 transition font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-100 transition font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:opacity-100 transition font-medium">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:opacity-100 transition font-medium">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Contact</h4>
            <ul className="space-y-3 opacity-80 text-sm">
              <li className="flex items-start gap-2 hover:opacity-100 transition">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+27661292451" className="font-medium">
                  +27 66 129 2451
                </a>
              </li>
              <li className="flex items-start gap-2 hover:opacity-100 transition">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:lomeongreenscapesptyltd@gmail.com" className="font-medium break-all">
                    lomeongreenscapesptyltd@gmail.com
                  </a>
                  <a href="mailto:lusandaromeo4@gmail.com" className="font-medium break-all text-sm opacity-90">
                    lusandaromeo4@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="font-medium">Adams Mission, Enkanyisweni, Durban, KZN</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Follow Us</h4>
            <div className="flex gap-2">
              <a
                href="https://instagram.com/lomeon_greenscapes_pty_ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-200 hover:scale-105"
                aria-label="Visit Lomeon on Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/27661292451"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-200 hover:scale-105"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center opacity-80 text-xs gap-4">
          <p>&copy; {currentYear} Lomeon Greenscapes PTY LTD. All rights reserved.</p>
          <div className="flex gap-6">
            <span>
              Website crafted by{" "}
              <Link
                href="https://instagram.com/cliveuxweb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition font-medium hover:text-primary-foreground/90"
              >
                CliveUX
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
