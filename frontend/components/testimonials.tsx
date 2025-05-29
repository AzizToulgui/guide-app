import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import said from '../assets/said.jpg'
import mouhamed from '../assets/mohamed.png'
import alex from '../assets/alex.jpeg'
const testimonials = [
  {
    id: 1,
    name: "Maria Doe",
    role: "Traveller",
    image: said,
    rating: 5,
    text: "A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence. From the moment I stepped into this community, I knew it was where I wanted to live. The commitment to eco-friendly living",
  },
  {
    id: 2,
    name: "Andrew Simon",
    role: "Traveller",
    image: mouhamed,
    rating: 5,
    text: "A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence. From the moment I stepped into this community, I knew it was where I wanted to live. The commitment to eco-friendly living",
  },
  {
    id: 3,
    name: "Michel Smith",
    role: "Traveller",
    image: alex,
    rating: 5,
    text: "A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence. From the moment I stepped into this community, I knew it was where I wanted to live. The commitment to eco-friendly living",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 text-lg mb-2 italic font-light">Testimonial</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What Client Say About Us</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="h-8 w-8 text-cyan-200" />
                </div>

                {/* User Info */}
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>

                {/* Rating Badge for center testimonial */}
                {index === 1 && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                      99
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
