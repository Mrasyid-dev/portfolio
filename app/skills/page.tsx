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
      'Node.js - Express, Prisma, JWT',
      'Java - Spring Boot (professional work)',
      'RESTful API design',
    ],
    icon: '💻',
  },
  {
    categoryKey: 'database',
    skills: [
      'PostgreSQL - Advanced (stored procedures, optimization)',
      'MySQL',
      'Redis (caching)',
      'SQL optimization, data migration',
    ],
    icon: '🗄️',
  },
  {
    categoryKey: 'messaging',
    skills: [
      'ActiveMQ (transaction reprocess, async handling)',
      'RabbitMQ',
      'Bot APIs (Telegram, WhatsApp)',
      'Cloud APIs (Google Vision)',
      'Cross-system integration',
    ],
    icon: '⚙️',
  },
  {
    categoryKey: 'frontend',
    skills: [
      'React - Hooks, Context, Router',
      'Next.js 14 - App Router, TypeScript',
      'TypeScript - Type-safe development',
      'TailwindCSS - Modern styling',
      'HTML5, CSS3, JavaScript',
      'JSF, PrimeFaces (enterprise UI)',
    ],
    icon: '🎨',
  },
  {
    categoryKey: 'toolsDevOps',
    skills: [
      'Docker & Docker Compose',
      'Git & GitHub',
      'Postman (API testing)',
      'Database migrations',
      'CI/CD basics',
    ],
    icon: '🛠️',
  },
  {
    categoryKey: 'specialized',
    skills: [
      'SQL Optimization (proven track record)',
      'Performance Tuning',
      'Database Design',
      'Message Queues (ActiveMQ, RabbitMQ)',
      'Bot Development',
      'OCR Integration',
    ],
    icon: '⚡',
  },
]

export default function SkillsPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-navy-950 transition-colors duration-300">
      <Navbar />
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
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
