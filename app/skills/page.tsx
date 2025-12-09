import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import SkillCard from '@/components/SkillCard'

export const metadata: Metadata = {
  title: 'Skills — Muhammad Rasyid Hidayat',
  description: 'Technical skills and expertise in Backend Engineering, Database Management, Frontend Development, and DevOps Tools.',
}

const skillsData = [
  {
    category: 'Languages',
    skills: ['Java', 'Go (Golang)', 'SQL'],
    icon: '💻',
  },
  {
    category: 'Frameworks',
    skills: ['Spring Boot', 'jLeaf', 'Laravel'],
    icon: '⚙️',
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'SQL Query Optimization', 'Hibernate/JPA'],
    icon: '🗄️',
  },
  {
    category: 'Frontend/UI',
    skills: ['PrimeFaces', 'JSF', 'React', 'Next.js', 'Vue.js'],
    icon: '🎨',
  },
  {
    category: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Redis', 'RabbitMQ'],
    icon: '🛠️',
  },
]

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Skills & Expertise"
            subtitle="Technical competencies across backend development, database management, and system operations"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                category={skill.category}
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

