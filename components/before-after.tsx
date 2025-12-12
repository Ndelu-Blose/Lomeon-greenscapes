"use client"

import { useState, useEffect, useRef } from "react"

const projects = [
  {
    title: "Garden Transformation",
    before: "/overgrown-garden-before.jpg",
    after: "/beautiful-designed-garden-after.jpg",
  },
  {
    title: "Driveway Cleaning",
    before: "/dirty-driveway-before-pressure-wash.jpg",
    after: "/clean-driveway-after.jpg",
  },
  {
    title: "Driveway",
    before: "/driveway 1.jpeg",
    after: "/driveway 2.jpeg",
  },
  {
    title: "Lawn",
    before: "/lawn 2.jpeg",
    after: "/lawn 1.jpeg",
  },
  {
    title: "Garden",
    before: "/garden 1.jpeg",
    after: "/garden 2.jpeg",
  },
]

export default function BeforeAfter() {
  const [activeProject, setActiveProject] = useState(0)
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Before & After</h2>
          <p className="text-lg text-foreground/60">See the transformation we bring to your property</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
          <div className="flex-1">
            <div
              className={`relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
            >
              <img
                src={projects[activeProject].before || "/placeholder.svg"}
                alt="Before"
                className="w-full h-72 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-foreground/95 backdrop-blur-md text-background px-6 py-3 rounded-full font-semibold shadow-xl border border-background/20">
                Before
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div
              className={`relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 ${
                isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src={projects[activeProject].after || "/placeholder.svg"}
                alt="After"
                className="w-full h-72 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-xl border border-primary-foreground/20">
                After
              </div>
            </div>
          </div>
        </div>

        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "0.4s" }}>
          {projects.map((project, i) => (
            <button
              key={i}
              onClick={() => setActiveProject(i)}
              className={`btn-enhanced px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeProject === i
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-xl shadow-primary/30 scale-105"
                  : "glass-card hover:border-primary/50 hover:shadow-lg hover:scale-105"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
