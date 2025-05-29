import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TourCategories } from "@/components/tour-categories"
import { TopDestinations } from "@/components/top-destinations"
import { PlanTrip } from "@/components/plan-trip"
import { PopularTours } from "@/components/popular-tours"
import { RecentGallery } from "@/components/recent-gallery"
import { Statistics } from "@/components/statistics"
import { TourGuides } from "@/components/tour-guides"
import { Testimonials } from "@/components/testimonials"
import { Partners } from "@/components/partners"
import { NewsletterFooter } from "@/components/newsletter-footer"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TourCategories />
      <TopDestinations />
      <PlanTrip />
      <PopularTours />
      <RecentGallery />
      <Statistics />
      <TourGuides />
      <Testimonials />
      <Partners />
      <NewsletterFooter />
    </div>
  )
}

