"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/founder", label: "Founder" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`bg-background/70 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/5" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <Image
              src="/lomeon greenscapes logo.png"
              alt="Lomeon Greenscapes Logo"
              width={40}
              height={40}
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              priority
            />
            <span className="hidden sm:inline text-xl font-bold text-primary">Lomeon</span>
          </Link>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-foreground/70 hover:text-primary font-medium transition-colors duration-200 group"
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          <Link
            href="/quote"
            className="btn-enhanced btn-ripple hidden md:block bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Get Quote
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-in-up">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 font-medium transition-colors ${
                    isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/quote"
              className="btn-enhanced btn-ripple block bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all duration-200 mt-4 text-center"
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
