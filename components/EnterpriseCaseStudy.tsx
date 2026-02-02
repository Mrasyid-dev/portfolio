'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import SectionTitle from './SectionTitle'

export default function EnterpriseCaseStudy() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.enterprisePOS.title} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 max-w-4xl mx-auto"
        >
          {/* Context */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-navy-900 mb-4">{t.enterprisePOS.contextTitle}</h3>
            <p className="text-gray-700 leading-relaxed">{t.enterprisePOS.context}</p>
          </div>

          {/* Problems */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-navy-900 mb-4">
              {t.enterprisePOS.problems.title}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.enterprisePOS.problems.items.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What I Did */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-navy-900 mb-4">
              {t.enterprisePOS.whatIDid.title}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.enterprisePOS.whatIDid.items.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Implementation */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-navy-900 mb-4">
              {t.enterprisePOS.technicalImplementation.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold mb-3 text-navy-800">
                  {t.enterprisePOS.technicalImplementation.sqlOptimization.title}
                </h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  {t.enterprisePOS.technicalImplementation.sqlOptimization.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-navy-600 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold mb-3 text-navy-800">
                  {t.enterprisePOS.technicalImplementation.systemReliability.title}
                </h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  {t.enterprisePOS.technicalImplementation.systemReliability.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-navy-600 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Impact */}
          <div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">
              {t.enterprisePOS.impact.title}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.enterprisePOS.impact.items.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

