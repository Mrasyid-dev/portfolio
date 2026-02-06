'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Overlay sangat tipis — background 3D tetap terlihat, teks tetap terbaca */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        aria-hidden
        style={{
          background:
            'linear-gradient(to right, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.12) 45%, transparent 65%)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl text-white">
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-sm"
            >
              {siteConfig.name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue-light to-accent-purple-light"
            >
              {t.hero.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-300 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            {/* Metrics Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="space-y-2"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {Object.entries(t.hero.metrics).map(([key, value]) => {
                  if (key.includes('Label')) return null
                  const labelKey = `${key}Label` as keyof typeof t.hero.metrics
                  return (
                    <div
                      key={key}
                      className="text-center bg-transparent rounded-xl p-4 border border-white/25 hover:scale-105 hover:border-accent-blue-light/60 transition-all duration-300"
                    >
                      <div className="text-3xl font-bold text-white">{value}</div>
                      <div className="text-sm text-slate-400 mt-1">{t.hero.metrics[labelKey]}</div>
                    </div>
                  )
                })}
              </div>
              <p className="text-xs text-slate-400">
                {t.hero.metricsContext}{' '}
                <Link href="/#enterprise-pos" className="text-accent-blue-light font-medium hover:underline">
                  {t.hero.metricsContextLink}
                </Link>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-accent text-white rounded-2xl font-semibold hover:opacity-90 transition-opacity text-center shadow-lg shadow-accent-purple/30 transform hover:-translate-y-1"
              >
                {t.hero.contactMe}
              </Link>
              <a
                href={siteConfig.cvFile}
                download
                className="px-8 py-3 bg-transparent text-white border-2 border-white/50 rounded-2xl font-semibold hover:bg-white/10 transition-colors text-center transform hover:-translate-y-1"
              >
                {t.hero.downloadCV}
              </a>
            </motion.div>
          </motion.div>
          <p className="text-xs text-slate-500 mt-6">
            {t.hero.cursorCubesCaption} — {t.hero.cursorCubesHint}
          </p>
        </div>
      </div>
    </section>
  )
}

