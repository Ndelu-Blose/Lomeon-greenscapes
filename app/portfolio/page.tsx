"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const portfolioProjects = [
  {
    title: "Garden Transformation",
    category: "Garden Design",
    before: "/overgrown-garden-before.jpg",
    after: "/beautiful-designed-garden-after.jpg",
    description: "Complete garden redesign and installation.",
  },
  {
    title: "Lawn Renovation",
    category: "Lawn Care",
    before: "/patchy-lawn-before.jpg",
    after: "/perfect-green-lawn-after.jpg",
    description: "Lawn repair and restoration project.",
  },
  {
    title: "Driveway Cleaning",
    category: "Pressure Washing",
    before: "/dirty-driveway-before.jpg",
    after: "/clean-driveway-after.jpg",
    description: "Professional pressure washing service.",
  },
  {
    title: "Patio Installation",
    category: "Paving",
    before: "/bare-ground-patio.jpg",
    after: "/installed-paver-patio.jpg",
    description: "New patio paving installation.",
  },
  {
    title: "Hedge Trimming",
    category: "Hedge & Trees",
    before: "/overgrown-hedge.jpg",
    after: "/trimmed-shaped-hedge.jpg",
    description: "Professional hedge shaping and trimming.",
  },
  {
    title: "Roof Cleaning",
    category: "Cleaning",
    before: "/dirty-roof.jpg",
    after: "/clean-roof.jpg",
    description: "Roof cleaning and maintenance service.",
  },
]

const categories = ["All", "Garden Design", "Lawn Care", "Pressure Washing", "Paving", "Hedge & Trees", "Cleaning"]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeProject, setActiveProject] = useState(null)

  const filteredProjects =
    activeCategory === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-primary mb-4">Our Portfolio</h1>
          <p className="text-xl text-foreground/70 mb-12">Showcase of our recent landscaping projects</p>

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setActiveProject(null)
                }}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                onClick={() => setActiveProject(i)}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 cursor-pointer transition"
              >
                <img
                  src={project.before || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-accent font-semibold mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-foreground/70">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {activeProject !== null && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-card rounded-lg max-w-4xl w-full max-h-96 overflow-y-auto">
                <div className="p-6 border-b border-border flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-primary">{filteredProjects[activeProject].title}</h2>
                  <button onClick={() => setActiveProject(null)} className="text-2xl">
                    ×
                  </button>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 mb-2">Before</p>
                      <img
                        src={filteredProjects[activeProject].before || "/placeholder.svg"}
                        alt="Before"
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 mb-2">After</p>
                      <img
                        src={filteredProjects[activeProject].after || "/placeholder.svg"}
                        alt="After"
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>
                  <p className="text-foreground/70">{filteredProjects[activeProject].description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
