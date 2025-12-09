'use client'

import { motion } from 'framer-motion'

interface SkillCardProps {
  category: string
  skills: string[]
  icon?: string
}

export default function SkillCard({ category, skills, icon }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && <span className="text-3xl">{icon}</span>}
        <h3 className="text-2xl font-bold text-navy-900">{category}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-700 flex items-center gap-2">
            <span className="w-2 h-2 bg-navy-600 rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

