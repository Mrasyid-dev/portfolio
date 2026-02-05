'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

interface TimelineItemProps {
  title: string
  company: string
  period: string
  context?: string
  responsibilities: string[]
  achievements?: string[]
  skills: string[]
}

export default function Timeline({ items }: { items: TimelineItemProps[] }) {
  const { t } = useLanguage()
  
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-navy-200 dark:bg-navy-700"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-20"
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 top-2 w-4 h-4 bg-navy-600 dark:bg-navy-400 rounded-full border-4 border-white dark:border-navy-900 shadow-lg"></div>

            {/* Content */}
            <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-navy-800 transition-all border border-gray-100 dark:border-navy-800 hover:-translate-y-1">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white">{item.title}</h3>
                <p className="text-lg text-navy-700 dark:text-navy-200 font-semibold">{item.company}</p>
                <p className="text-gray-500 dark:text-gray-400">{item.period}</p>
              </div>

              {item.context && (
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.context}</p>
                </div>
              )}

              <div className="mb-4">
                <h4 className="font-semibold text-navy-800 dark:text-navy-100 mb-2">{t.experience.responsibilities}</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>

              {item.achievements && item.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-navy-800 dark:text-navy-100 mb-2">{t.experience.achievements}</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="font-semibold text-navy-800 dark:text-navy-100 mb-2">{t.experience.skillsUsed}</h4>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-navy-100 dark:bg-navy-700 text-navy-700 dark:text-gray-200 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
