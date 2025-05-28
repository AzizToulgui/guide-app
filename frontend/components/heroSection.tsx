import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import copenhagen from '../assets/copenhagen.jpg'
import {DatePickerWithRange} from "@/components/ui/date-range-picker";
export function HeroSection() {
    return (
        <section className="relative h-[600px] bg-gray-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src={copenhagen}
                    alt="Travel adventure background"
                    priority
                    className="object-cover"
                    fill
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Explore the World with Us</h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8">
                        Discover unforgettable experiences with our expert local guides
                    </p>

                    {/* Search Bar */}
                    <div className="bg-white rounded-lg p-4 shadow-lg max-w-2xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <Input type="text" placeholder="Where do you want to go?" className="w-full" />
                            </div>
                            <DatePickerWithRange/>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                                <Search className="h-4 w-4 mr-2" />
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
