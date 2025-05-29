"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight } from "lucide-react"
import Image from "next/image"
import { DatePickerWithRange } from "./ui/DatePickerWithRange"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import paris from "../assets/paris.jpg"
import london from "../assets/london.jpg"
import dahab from "../assets/dahab.jpg"

const heroImages = [
  paris,
  london,
  dahab
]

export function HeroSection() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  return (
    <section className="relative h-[700px]">
      {/* Background Image Carousel */}
      <Carousel
        plugins={[plugin.current]}
        className="absolute inset-0 w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-full -ml-0">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full pl-0 basis-full">
              <div className="relative w-full h-full">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Travel destination ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="left-8 bg-white/20 hover:bg-white/30 text-white border-0 z-30" />
        <CarouselNext className="right-8 bg-white/20 hover:bg-white/30 text-white border-0 z-30" /> */}
      </Carousel>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-white/90 text-lg mb-4 font-light italic">Get unforgettable pleasure with us</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Natural Wonder
              <br />
              Of The World
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full text-lg">
                Explore Tours <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 z-20">
        <div className="bg-white rounded-2xl p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 min-w-0">
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input type="text" placeholder="Search Location" className="pl-10 border-gray-200 rounded-lg w-full" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <DatePickerWithRange />
            </div>
            <Button className="flex-1 md:flex-none bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg h-10 w-full md:w-auto px-6">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
