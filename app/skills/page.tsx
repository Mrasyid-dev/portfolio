'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import SkillCard from '@/components/SkillCard'
import { useLanguage } from '@/contexts/LanguageContext'

const skillsData = [
  {
    categoryKey: 'backend',
    skills: [
      'Java (Spring Boot, internal framework jLeaf)',
      'SQL (transactional query, stored function, optimization)',
      'Golang (project-based, backend POS Mobile)',
    ],
    icon: '💻',
  },
  {
    categoryKey: 'database',
    skills: [
      'PostgreSQL (stored function, JSON processing, performance tuning)',
      'MySQL',
      'Data migration & data correction (mass import, data consistency)',
    ],
    icon: '🗄️',
  },
  {
    categoryKey: 'messaging',
    skills: [
      'ActiveMQ (transaction reprocess, async handling)',
      'RabbitMQ',
      'Redis',
      'Cross-system integration (including database-level integration)',
    ],
    icon: '⚙️',
  },
  {
    categoryKey: 'frontend',
    skills: ['JSF', 'PrimeFaces', 'HTML & basic CSS'],
    icon: '🎨',
  },
]

export default function SkillsPage() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.skills.title}
            subtitle={t.skills.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                category={t.skills.categories[skill.categoryKey as keyof typeof t.skills.categories]}
                skills={skill.skills}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
