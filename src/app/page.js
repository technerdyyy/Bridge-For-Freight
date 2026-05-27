import Hero from '@/components/sections/home/Hero'
import MarqueeBand from '@/components/sections/home/MarqueeBand'
import ServicesOverview from '@/components/sections/home/ServicesOverview'
import WhyChooseUs from '@/components/sections/home/WhyChooseUs'
import IndustriesGrid from '@/components/sections/home/IndustriesGrid'
import ProcessSection from '@/components/sections/home/ProcessSection'
import Testimonials from '@/components/sections/home/Testimonials'
import CTABanner from '@/components/sections/home/CTABanner'

export const metadata = {
  title: 'Bridge For Freight — Enterprise Logistics Group',
  description:
    'End-to-end freight management, warehousing, and cross-border logistics built for enterprises that demand precision at scale.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <ServicesOverview />
      <WhyChooseUs />
      <IndustriesGrid />
      <ProcessSection />
      <Testimonials />
      <CTABanner />
    </>
  )
}
