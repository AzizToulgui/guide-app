import Image from "next/image"
import paris from '../assets/paris.jpg'
import dahab from '../assets/dahab.jpg'
import newYork from '../assets/newyork.jpg'
import london from '../assets/london.jpg'

const galleryImages = [
  { id: 1, src: paris, className: "row-span-2" },
  { id: 2, src: london, className: "" },
  { id: 3, src: london, className: "" },
  { id: 4, src: dahab, className: "" },
  { id: 5, src: newYork, className: "row-span-2" },
  { id: 6, src: dahab, className: "" },
  { id: 7, src: london, className: "" },
  { id: 8, src: dahab, className: "" },
  { id: 9, src: paris, className: "row-span-2" },
]

export function RecentGallery() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 text-lg mb-2 italic font-light">Make Your Tour More Pleasure</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Recent Gallery</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${image.className}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={`Gallery image ${image.id}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
