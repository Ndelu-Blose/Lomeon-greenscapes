import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Star, MessageSquare } from "lucide-react"

const testimonials = [
  {
    name: "John Smith",
    location: "Durban North",
    rating: 5,
    text: "Excellent service! The team transformed our garden completely. Highly recommend to anyone looking for professional landscaping.",
    service: "Garden Design",
  },
  {
    name: "Sarah Johnson",
    location: "Umhlanga",
    rating: 5,
    text: "Professional, punctual, and affordable. Best landscaping company in Durban. They understand quality work.",
    service: "Lawn Care",
  },
  {
    name: "Michael Brown",
    location: "Westville",
    rating: 5,
    text: "Great communication throughout. They understood exactly what I wanted and delivered beyond expectations.",
    service: "Pressure Washing",
  },
  {
    name: "Amanda Davis",
    location: "Ballito",
    rating: 5,
    text: "Fantastic team! They turned my bare backyard into a beautiful outdoor space. Very happy with the results.",
    service: "Garden Design",
  },
  {
    name: "David Wilson",
    location: "Kloof",
    rating: 5,
    text: "Professional work, great pricing, and excellent customer service. I use them regularly for maintenance.",
    service: "Lawn Care",
  },
  {
    name: "Lisa Anderson",
    location: "Phoenix",
    rating: 5,
    text: "The patio installation was done perfectly. Attention to detail is outstanding. Highly recommend!",
    service: "Paving",
  },
]

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-primary mb-4">Testimonials</h1>
          <p className="text-xl text-foreground/70 mb-12">See what our satisfied clients have to say</p>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-500/90 text-yellow-500/90 drop-shadow-sm" />
                  ))}
                </div>

                <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>

                <div className="pt-4 border-t border-border">
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
