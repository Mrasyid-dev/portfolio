'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/lib/config'
import { useLanguage } from '@/contexts/LanguageContext'
import Scene3D from './Scene3D'

export default function HeroSection() {
  const [imageError, setImageError] = useState(false)
  const { t } = useLanguage()
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-navy-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-800 pt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-white leading-tight"
            >
              {siteConfig.name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-navy-700 dark:text-navy-100 font-semibold"
            >
              {t.hero.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            {/* Metrics Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6"
            >
              {Object.entries(t.hero.metrics).map(([key, value], index) => {
                  if (key.includes('Label')) return null;
                  const labelKey = `${key}Label` as keyof typeof t.hero.metrics;
                  return (
                    <div key={key} className="text-center bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-navy-700 hover:scale-105 transition-transform duration-300">
                        <div className="text-3xl font-bold text-navy-900 dark:text-white">{value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t.hero.metrics[labelKey]}</div>
                    </div>
                  )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="px-8 py-3 bg-navy-900 text-white dark:bg-white dark:text-navy-900 rounded-2xl font-semibold hover:bg-navy-800 dark:hover:bg-gray-100 transition-colors text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t.hero.contactMe}
              </Link>
              <a
                href={siteConfig.cvFile}
                download
                className="px-8 py-3 bg-white text-navy-900 border-2 border-navy-900 dark:bg-transparent dark:text-white dark:border-white rounded-2xl font-semibold hover:bg-navy-50 dark:hover:bg-white/10 transition-colors text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t.hero.downloadCV}
              </a>
            </motion.div>
          </motion.div>

          {/* Right 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center h-[500px]"
          >
            <Scene3D />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

