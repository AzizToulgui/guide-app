import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Facebook, Twitter, Linkedin, Youtube, Instagram, Phone, Mail, MapPin, ArrowUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import london from "../assets/london.jpg"
export function NewsletterFooter() {
  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Get Updated The Latest Newsletter</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter Email" className="flex-1 rounded-full border-gray-300" />
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8">
              Subscribe Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full relative">
                    <div className="absolute inset-1 bg-cyan-500 rounded-full"></div>
                  </div>
                </div>
                <div className="text-gray-900">
                  <span className="text-xl font-bold">Tourm</span>
                  <div className="text-xs text-gray-600">Explore World</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive
                infrastructures
              </p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors cursor-pointer">
                  <Facebook className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors cursor-pointer">
                  <Twitter className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors cursor-pointer">
                  <Linkedin className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors cursor-pointer">
                  <Youtube className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors cursor-pointer">
                  <Instagram className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Useful Link</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-cyan-500 transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-cyan-500 transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-cyan-500 transition-colors text-sm">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-cyan-500 transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/booking" className="text-gray-600 hover:text-cyan-500 transition-colors text-sm">
                    Tour Booking Now
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-4 w-4 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">+01 234 567 890</p>
                    <p className="text-sm text-gray-600">+09 876 543 210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-4 w-4 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">mailinfo60@realar.com</p>
                    <p className="text-sm text-gray-600">support24@realar.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-4 w-4 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">789 Inner Lane, Holy park,</p>
                    <p className="text-sm text-gray-600">California, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Post */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Instagram Post</h3>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                    <Image
                      src={london}
                      alt={`Instagram post ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-cyan-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">Copyright © 2024 Tourm. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-white text-sm">We Accept</span>
              <div className="flex space-x-2">
                <div className="w-8 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-500">MC</span>
                </div>
                <div className="w-8 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-600">VISA</span>
                </div>
                <div className="w-8 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-500">PP</span>
                </div>
                <div className="w-8 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-black">AP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        size="icon"
        className="fixed bottom-8 right-8 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg z-50"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  )
}
