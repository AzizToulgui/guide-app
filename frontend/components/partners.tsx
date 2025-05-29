import Image from "next/image"
import london from '../assets/london.jpg'
const partners = [
  { id: 1, name: "Life Adventure", logo: london },
  { id: 2, name: "Mountain Explorer", logo: london },
  { id: 3, name: "Adventure Co", logo: london },
  { id: 4, name: "Wanderlust", logo: london },
  { id: 5, name: "Explorer", logo: london },
  { id: 6, name: "Wanderlust Pro", logo: london },
  { id: 7, name: "Mountain Pro", logo: london },
  { id: 8, name: "Jefferson Blue Lake", logo: london},
]

export function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="max-w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300 rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
