import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, ArrowRight} from "lucide-react"
import Image from "next/image"
import paris from '../assets/paris.jpg'
import dahab from '../assets/dahab.jpg'
import copenhagen from '../assets/copenhagen.jpg'
import london from '../assets/london.jpg'

const tours = [
  {
    id: 1,
    title: "Greece Tour Package",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
    image: paris,
  },
  {
    id: 2,
    title: "Italy Tour Package",
    rating: 4.8,
    price: 890,
    duration: "7 Days",
    image: dahab,
  },
  {
    id: 3,
    title: "Dubai Tour Package",
    rating: 4.8,
    price: 870,
    duration: "7 Days",
    image: copenhagen,
  },
  {
    id: 4,
    title: "Switzerland",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
    image: london,
  },
]

export function PopularTours() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-500 text-lg mb-2 italic font-light">Best Place For You</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Most Popular Tour</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tour.title}</h3>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({tour.rating} Rating)</span>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-gray-900">
                    ${tour.price}.00<span className="text-sm font-normal text-gray-500">/Person</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {tour.duration}
                  </div>
                  <Button className="bg-cyan-500 hover:bg-cyan-700 text-white rounded-full px-6">
                    Book Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
