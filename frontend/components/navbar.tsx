"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="bg-cyan-500 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-cyan-500 rounded-full relative">
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="text-white">
                <span className="text-xl font-bold">Tourm</span>
                <div className="text-xs opacity-90">Explore World</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-cyan-100 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-cyan-100 px-3 py-2 text-sm font-medium transition-colors"
              >
                About Us
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-white hover:text-cyan-100 px-3 py-2 text-sm font-medium transition-colors">
                  Our Services <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Tour Packages</DropdownMenuItem>
                  <DropdownMenuItem>Hotel Booking</DropdownMenuItem>
                  <DropdownMenuItem>Flight Booking</DropdownMenuItem>
                  <DropdownMenuItem>Car Rental</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-white hover:text-cyan-100 px-3 py-2 text-sm font-medium transition-colors">
                  Activities <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Adventure Tours</DropdownMenuItem>
                  <DropdownMenuItem>Cultural Tours</DropdownMenuItem>
                  <DropdownMenuItem>Food Tours</DropdownMenuItem>
                  <DropdownMenuItem>Wildlife Tours</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> 
              <Link
                href="/contact"
                className="text-white hover:text-cyan-100 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-cyan-700 hover:bg-cyan-800 text-white border-0 rounded-full px-6">
              Book Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-cyan-600">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors">
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/destination"
                    className="text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors"
                  >
                    Destination
                  </Link>
                  <Link
                    href="/services"
                    className="text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors"
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/activities"
                    className="text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors"
                  >
                    Activities
                  </Link>
                  <Link
                    href="/blog"
                    className="text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white mt-4 rounded-full">
                    Book Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
