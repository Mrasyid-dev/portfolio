'use client'

import { motion } from 'framer-motion'

interface SkillCardProps {
  category: string
  skills: string[]
  icon?: string
  transparent?: boolean
}

export default function SkillCard({ category, skills, icon, transparent }: SkillCardProps) {
  const cardClass = transparent
    ? 'bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/20 dark:border-white/10 hover:-translate-y-1'
    : 'bg-white dark:bg-navy-900 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-navy-800 transition-all border border-gray-100 dark:border-navy-800 hover:-translate-y-1'
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cardClass}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && <span className="text-3xl">{icon}</span>}
        <h3 className="text-2xl font-bold text-navy-900 dark:text-white">{category}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <span className="w-2 h-2 bg-navy-600 dark:bg-navy-400 rounded-full flex-shrink-0"></span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

