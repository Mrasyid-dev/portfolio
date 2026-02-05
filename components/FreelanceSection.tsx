'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function FreelanceSection() {
  const { t } = useLanguage()

  const services = [
    'Backend API Development',
    'Database Optimization',
    'System Debugging & Maintenance',
    'Data Migration & Correction',
    'SQL Query Optimization',
    'Enterprise System Solutions',
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.freelance.title}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t.freelance.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {services.map((service, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-navy-900 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              {t.freelance.getInTouch}
            </Link>
            <a
              href="/cv.pdf"
              download
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
            >
              {t.freelance.downloadCV}
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm">
              💼 {t.freelance.availability}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              🌍 {t.freelance.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
