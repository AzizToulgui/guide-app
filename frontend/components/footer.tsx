import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-8 w-8 text-blue-400" />
                            <span className="text-xl font-bold">TourGuide</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Your trusted partner for unforgettable travel experiences around the world.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/tours" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    All Tours
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-blue-400" />
                                <span className="text-gray-300 text-sm">info@tourguide.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-blue-400" />
                                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                                <span className="text-gray-300 text-sm">
                  123 Travel Street
                  <br />
                  Adventure City, AC 12345
                </span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Subscribe to our newsletter for the latest tours and travel tips.
                        </p>
                        <div className="space-y-3">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                            />
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} TourGuide. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
