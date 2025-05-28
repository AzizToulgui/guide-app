import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/heroSection"
import { ToursSection } from "@/components/tourSection"
import { Footer } from "@/components/footer"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <HeroSection />
            <ToursSection />
            <Footer />
        </div>
    )
}
