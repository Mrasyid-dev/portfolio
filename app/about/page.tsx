'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen bg-white dark:bg-transparent transition-colors duration-300">
      <Navbar />
      <section className="py-20 bg-black/5 dark:bg-black/15 transition-colors duration-300 min-h-screen">
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title={t.about.title}
              subtitle={t.about.subtitle}
            />

            <div className="bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-white/20 dark:border-white/10 space-y-8 transition-colors duration-300">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">{t.about.education}</h3>
                <div className="bg-white/40 dark:bg-white/5 rounded-xl p-6 border border-white/20 dark:border-white/10 transition-colors duration-300">
                <h4 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">
                  Universitas Sebelas Maret (UNS)
                </h4>
                <p className="text-gray-700 dark:text-gray-200">{t.about.educationDegree}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {t.about.educationGPA}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {t.about.educationDescription}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">{t.about.aboutMe}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t.about.aboutMeText1}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t.about.aboutMeText2}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.about.aboutMeText3}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">{t.about.skillsCompetence}</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-navy-600 dark:border-navy-400 pl-4">
                  <h4 className="font-semibold text-navy-800 dark:text-navy-100 mb-2">{t.about.backendDev}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t.about.backendDevDesc}
                  </p>
                </div>
                <div className="border-l-4 border-navy-600 dark:border-navy-400 pl-4">
                  <h4 className="font-semibold text-navy-800 dark:text-navy-100 mb-2">{t.about.databaseSQL}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t.about.databaseSQLDesc}
                  </p>
                </div>
                <div className="border-l-4 border-navy-600 dark:border-navy-400 pl-4">
                  <h4 className="font-semibold text-navy-800 dark:text-navy-100 mb-2">{t.about.systemIntegration}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t.about.systemIntegrationDesc}
                  </p>
                </div>
                <div className="border-l-4 border-navy-600 dark:border-navy-400 pl-4">
                  <h4 className="font-semibold text-navy-800 dark:text-navy-100 mb-2">{t.about.fullStack}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t.about.fullStackDesc}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">{t.about.careerJourney}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t.about.careerJourneyText1}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t.about.careerJourneyText2}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t.about.careerJourneyText3}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.about.careerJourneyText4}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">{t.about.commitment}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.about.commitmentText}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">{t.about.lookingFor}</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed list-disc list-inside">
                {(t.about.lookingForItems as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/20 dark:border-white/10">
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500" aria-hidden />
                {t.about.availabilityStatus}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-navy-900 text-white dark:bg-white dark:text-navy-900 rounded-xl font-semibold hover:bg-navy-800 dark:hover:bg-gray-100 transition-colors"
              >
                {t.about.ctaWorkTogether}
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>
      <Footer transparent />
    </main>
  )
}
