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
      'Go (Golang) - Gin, sqlc, pgx',
      'Java - Spring Boot (professional work)',
      'RESTful API design & System Architecture',
      'Clean Architecture (SOLID)',
    ],
    icon: '⚙️',
  },
  {
    categoryKey: 'database',
    skills: [
      'PostgreSQL - Advanced (stored procedures, optimization)',
      'MySQL & Redis (caching)',
      'SQL optimization (EXPLAIN ANALYZE)',
      'Database Design & Normalization',
    ],
    icon: '🗄️',
  },
  {
    categoryKey: 'messaging',
    skills: [
      'ActiveMQ & RabbitMQ',
      'Bot APIs (Telegram, WhatsApp)',
      'Cloud APIs (Google Vision OCR)',
      'Cross-system integration',
    ],
    icon: '📡',
  },
  {
    categoryKey: 'frontend',
    skills: [
      'React Native & Next.js 14',
      'AI-Assisted UI/UX Implementation',
      'TypeScript (Type-safe development)',
      'Vite & TailwindCSS',
    ],
    icon: '🎨',
  },
  {
    categoryKey: 'toolsDevOps',
    skills: [
      'Docker & Docker Compose',
      'Git & GitHub CI/CD',
      'Postman (API testing)',
      'Database migrations',
    ],
    icon: '🛠️',
  },
  {
    categoryKey: 'aiWorkflow',
    skills: [
      'Antygravity (AI-Agent Workflows)',
      'Cursor AI-Driven Development',
      'AI-Powered Code Review',
      'Full-stack Productivity Optimization',
    ],
    icon: '🚀',
  },
  {
    categoryKey: 'specialized',
    skills: [
      '95% Performance Tuning',
      'Enterprise System Reliability',
      'OCR Data Extraction',
      'Real-time Monitoring',
    ],
    icon: '⚡',
  },
]

export default function SkillsPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-white dark:bg-transparent transition-colors duration-300">
      <Navbar />
      <section className="py-20 bg-black/5 dark:bg-black/15 transition-colors duration-300 min-h-screen">
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title={t.skills.title}
              subtitle={t.skills.subtitle}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.map((skill, index) => (
                <SkillCard
                  key={index}
                  category={t.skills.categories[skill.categoryKey as keyof typeof t.skills.categories]}
                  skills={skill.skills}
                  icon={skill.icon}
                  transparent
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer transparent />
    </main>
  )
}
