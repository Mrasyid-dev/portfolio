import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import Timeline from '@/components/Timeline'
import { getExperience } from '@/lib/experience'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: `Experience — ${siteConfig.name}`,
  description: `Professional experience and career journey of ${siteConfig.name}.`,
}

export default function ExperiencePage() {
  // Data experience diambil dari file data/experience.json
  // Edit file tersebut untuk mengubah experience
  const experienceItems = getExperience()

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Professional Experience"
            subtitle="Building robust systems and delivering impactful solutions"
          />

          <Timeline items={experienceItems} />
        </div>
      </div>
      <Footer />
    </main>
  )
}

