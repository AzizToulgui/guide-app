"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MapPin, Menu, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Navbar() {
    return (
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <MapPin className="h-8 w-8 text-blue-600" />
                            <span className="text-xl font-bold text-gray-900">TourGuide</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                                    Tours <ChevronDown className="ml-1 h-4 w-4" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>City Tours</DropdownMenuItem>
                                    <DropdownMenuItem>Food Tours</DropdownMenuItem>
                                    <DropdownMenuItem>Adventure Tours</DropdownMenuItem>
                                    <DropdownMenuItem>Cultural Tours</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Link
                                href="/about"
                                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">sign up now</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open main menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col space-y-4 mt-8">
                                    <Link
                                        href="/tours"
                                        className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                                    >
                                        Tours
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                                    >
                                        Contact
                                    </Link>
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-4">Book Now</Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}
