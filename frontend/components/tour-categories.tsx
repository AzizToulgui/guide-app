import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import paris from '../assets/paris.jpg'
import dahab from '../assets/dahab.jpg'
import copenhagen from '../assets/copenhagen.jpg'
import london from '../assets/london.jpg'
import newYork from '../assets/newyork.jpg'
const categories = [
  {
    id: 1,
    title: "Cruises",
    image: london,
    link: "Read More",
  },
  {
    id: 2,
    title: "Scuba Diving",
    image: dahab,
    link: "Read More",
  },
  {
    id: 3,
    title: "Airbirds",
    image: copenhagen,
    link: "Read More",
  },
  {
    id: 4,
    title: "Wildlife",
    image: newYork,
    link: "Read More",
  },
  {
    id: 5,
    title: "Walking",
    image: paris,
    link: "Read More",
  },
]

export function TourCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 text-lg mb-2 italic font-light">Wonderful Place For You</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Tour Categories</h2>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category, index) => (
            <div key={category.id} className="relative group">
              <Card
                className={`w-60 h-80 overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-0 ${
                  index === 2
                    ? "transform -rotate-12"
                    : index === 1
                      ? "transform rotate-6"
                      : index === 3
                        ? "transform rotate-12"
                        : index === 4
                          ? "transform -rotate-6"
                          : ""
                } hover:rotate-0`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <Button variant="link" className="text-white p-0 h-auto font-normal hover:text-cyan-300">
                      {category.link}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

