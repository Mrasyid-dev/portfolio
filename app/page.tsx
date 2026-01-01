import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import EnterpriseCaseStudy from '@/components/EnterpriseCaseStudy'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EnterpriseCaseStudy />
      <Footer />
    </main>
  )
}

