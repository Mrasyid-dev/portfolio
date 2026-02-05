import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import EnterpriseCaseStudy from '@/components/EnterpriseCaseStudy'
import FreelanceSection from '@/components/FreelanceSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <FeaturedProjects />
      <EnterpriseCaseStudy />
      <FreelanceSection />
      <Footer />
    </main>
  )
}

