import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react"
import Image from "next/image"
import said from '../assets/said.jpg'
import mouhamed from '../assets/mohamed.png'
import hanna from '../assets/Hanna.jpg'
import alex from '../assets/alex.jpeg'
const guides = [
  {
    id: 1,
    name: "Jacob Jones",
    role: "Tourist Guide",
    image: alex,
    featured: false,
  },
  {
    id: 2,
    name: "Jane Cooper",
    role: "Tourist Guide",
    image: mouhamed,
    featured: true,
  },
  {
    id: 3,
    name: "Guy Hawkins",
    role: "Tourist Guide",
    image: hanna,
    featured: false,
  },
  {
    id: 4,
    name: "Jenny Wilson",
    role: "Tourist Guide",
    image: said,
    featured: false,
  },
]

export function TourGuides() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 text-lg mb-2 italic font-light">Meet with Guide</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Tour Guide</h2>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guides.map((guide) => (
            <Card
              key={guide.id}
              className={`text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                guide.featured ? "bg-cyan-500 text-white" : "bg-white"
              }`}
            >
              <CardContent className="p-8">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <Image
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                <h3 className={`text-xl font-semibold mb-2 ${guide.featured ? "text-white" : "text-gray-900"}`}>
                  {guide.name}
                </h3>
                <p className={`text-sm mb-6 ${guide.featured ? "text-cyan-100" : "text-gray-600"}`}>{guide.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center hover:scale-110 transition-transform cursor-pointer ${
                      guide.featured
                        ? "border-white/30 text-white hover:bg-white/20"
                        : "border-cyan-200 text-cyan-500 hover:bg-cyan-50"
                    }`}
                  >
                    <Facebook className="h-4 w-4" />
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center hover:scale-110 transition-transform cursor-pointer ${
                      guide.featured
                        ? "border-white/30 text-white hover:bg-white/20"
                        : "border-cyan-200 text-cyan-500 hover:bg-cyan-50"
                    }`}
                  >
                    <Twitter className="h-4 w-4" />
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center hover:scale-110 transition-transform cursor-pointer ${
                      guide.featured
                        ? "border-white/30 text-white hover:bg-white/20"
                        : "border-cyan-200 text-cyan-500 hover:bg-cyan-50"
                    }`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center hover:scale-110 transition-transform cursor-pointer ${
                      guide.featured
                        ? "border-white/30 text-white hover:bg-white/20"
                        : "border-cyan-200 text-cyan-500 hover:bg-cyan-50"
                    }`}
                  >
                    <Youtube className="h-4 w-4" />
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center hover:scale-110 transition-transform cursor-pointer ${
                      guide.featured
                        ? "border-white/30 text-white hover:bg-white/20"
                        : "border-cyan-200 text-cyan-500 hover:bg-cyan-50"
                    }`}
                  >
                    <Instagram className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
