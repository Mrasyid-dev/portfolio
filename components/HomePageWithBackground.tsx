'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import EnterpriseCaseStudy from '@/components/EnterpriseCaseStudy'
import FreelanceSection from '@/components/FreelanceSection'

export default function HomePageWithBackground() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedProjects transparent />
      <EnterpriseCaseStudy transparent />
      <FreelanceSection transparent />
      <Footer transparent />
    </>
  )
}
