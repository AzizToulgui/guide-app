"use client"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import paris from '../assets/paris.jpg'
import dahab from '../assets/dahab.jpg'
import copenhagen from '../assets/copenhagen.jpg'
import london from '../assets/london.jpg'
import newYork from '../assets/newyork.jpg'


const destinationsData = [
  {
    name: "Maldives",
    image: paris,
    listings: "25 Listing",
  },
  {
    name: "Greece",
     image: newYork,
    listings: "18 Listing",
  },
  {
    name: "London",
    image: london,
    listings: "32 Listing",
  },
  {
    name: "Switzerland",
    image: copenhagen,
    listings: "15 Listing",
  },
  {
    name: "Sydney",
    image: dahab,
    listings: "22 Listing",
  },
]

const destinations = ["Maldives", "Greece", "London", "Switzerland", "Sydney"]

export function TopDestinations() {
  const [activeDestination, setActiveDestination] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <p className="text-cyan-600 text-lg mb-2 italic font-light">Top Destination</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Top Destination</h2>
          </div>

          {/* Destination Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 lg:mt-0">
            {destinations.map((dest, index) => (
              <Button
                key={dest}
                variant={index === activeDestination ? "default" : "outline"}
                className={`rounded-full px-6 ${
                  index === activeDestination
                    ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                    : "border-gray-300 text-gray-600 hover:border-cyan-500 hover:text-cyan-600"
                }`}
                onClick={() => setActiveDestination(index)}
              >
                {dest}
              </Button>
            ))}
          </div>
        </div>

        {/* Destination Carousel */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {destinationsData.map((destination) => (
                <CarouselItem key={destination.name}>
                  <div className="relative h-[500px] rounded-3xl overflow-hidden">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={`${destination.name} destination`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    {/* Destination Info */}
                    <div className="absolute bottom-8 left-8 text-white">
                      <h3 className="text-4xl font-bold mb-2">{destination.name}</h3>
                      <p className="text-lg opacity-90 mb-4">{destination.listings}</p>
                      <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full">
                        View All <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom styled navigation arrows */}
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
