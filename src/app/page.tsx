import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { TestimonialSection } from '@/components/TestimonialSection'
import { DriverBanner } from '@/components/DriverBanner'
import { Footer } from '@/components/Footer'
import { StickyFloatingCTA } from '@/components/StickyFloatingCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <DriverBanner />
      <Footer />
      <StickyFloatingCTA />
    </main>
  )
}
