'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

interface ProjectCardProps {
  title: string
  tools: string[]
  problem: string
  solution: string
  impact: string
  githubLink?: string
  demoLink?: string
}

export default function ProjectCard({
  title,
  tools,
  problem,
  solution,
  impact,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  const { t } = useLanguage()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-navy-900 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-navy-800 transition-all border border-gray-100 dark:border-navy-700 hover:-translate-y-1"
    >
      <div className="mb-3">
        <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
          {t.projects.personalProjectBadge}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">{title}</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 bg-navy-100 dark:bg-navy-700 text-navy-700 dark:text-gray-200 rounded-full text-sm font-medium"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-navy-800 dark:text-navy-100 mb-2">{t.projects.problem}</h4>
          <p className="text-gray-600 dark:text-gray-300">{problem}</p>
        </div>

        <div>
          <h4 className="font-semibold text-navy-800 dark:text-navy-100 mb-2">{t.projects.solution}</h4>
          <p className="text-gray-600 dark:text-gray-300">{solution}</p>
        </div>

        <div>
          <h4 className="font-semibold text-navy-800 dark:text-navy-100 mb-2">{t.projects.impact}</h4>
          <p className="text-gray-600 dark:text-gray-300">{impact}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-4 items-center">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy-700 text-white dark:bg-white dark:text-navy-900 px-6 py-2 rounded-lg hover:bg-navy-900 dark:hover:bg-gray-200 font-semibold transition-colors"
          >
            {t.projects.viewDemo}
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-navy-700 hover:text-navy-900 dark:text-gray-300 dark:hover:text-white font-semibold transition-colors"
          >
            {t.projects.viewGitHub}
          </a>
        )}
      </div>
    </motion.div>
  )
}
