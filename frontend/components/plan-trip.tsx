import { Button } from "@/components/ui/button"
import { ArrowRight, Plane, Users } from "lucide-react"
import Image from "next/image"
import newYork from '../assets/newyork.jpg'
export function PlanTrip() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10">
        <div className="w-16 h-16 text-cyan-400">
          <svg viewBox="0 0 64 64" fill="currentColor">
            <circle cx="32" cy="20" r="8" />
            <path d="M32 32c-8 0-16 4-16 8v4h32v-4c0-4-8-8-16-8z" />
          </svg>
        </div>
      </div>
      <div className="absolute top-20 left-32">
        <div className="w-12 h-12 text-cyan-300">
          <svg viewBox="0 0 48 48" fill="currentColor">
            <circle cx="24" cy="15" r="6" />
            <path d="M24 24c-6 0-12 3-12 6v3h24v-3c0-3-6-6-12-6z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative h-64 rounded-3xl overflow-hidden">
                  <Image
                    src={newYork}
                    alt="Mountain adventure"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="relative h-64 rounded-3xl overflow-hidden">
                  <Image
                    src={newYork}
                    alt="Lake kayaking"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <p className="text-cyan-600 text-lg mb-4 italic font-light">Let&#39;s Go Together</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Plan Your Trip
              <br />
              With Us
            </h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              There are many variations of passages of available but the majority have suffered alteration in some form,
              by injected humour randomised words which don&#39;t look even slightly.
            </p>

            {/* Features */}
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Exclusive Trip</h3>
                  <p className="text-gray-600">There are many variations of passages of available but the majority.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Guide</h3>
                  <p className="text-gray-600">There are many variations of passages of available but the majority.</p>
                </div>
              </div>
            </div>

            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full text-lg">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
