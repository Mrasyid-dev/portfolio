'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/config'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Get In Touch"
            subtitle="I'd love to hear from you. Send me a message and I'll respond as soon as possible."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl">
                  Something went wrong. Please try again later.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-navy-900 text-white rounded-xl font-semibold hover:bg-navy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-navy-900 mb-4">Other Ways to Reach Me</h3>
              <div className="space-y-3 text-gray-700">
                {/* Kontak info diambil dari .env file */}
                <p>
                  <span className="font-semibold">Email:</span>{' '}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-navy-700 hover:text-navy-900 underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
                {siteConfig.contact.linkedin && (
                  <p>
                    <span className="font-semibold">LinkedIn:</span>{' '}
                    <a
                      href={siteConfig.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-700 hover:text-navy-900 underline"
                    >
                      {siteConfig.contact.linkedin.replace('https://', '')}
                    </a>
                  </p>
                )}
                {siteConfig.contact.github && (
                  <p>
                    <span className="font-semibold">GitHub:</span>{' '}
                    <a
                      href={siteConfig.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-700 hover:text-navy-900 underline"
                    >
                      {siteConfig.contact.github.replace('https://', '')}
                    </a>
                  </p>
                )}
                {siteConfig.contact.phone && (
                  <p>
                    <span className="font-semibold">Phone:</span>{' '}
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-navy-700 hover:text-navy-900 underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                )}
                {siteConfig.contact.website && (
                  <p>
                    <span className="font-semibold">Website:</span>{' '}
                    <a
                      href={siteConfig.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-700 hover:text-navy-900 underline"
                    >
                      {siteConfig.contact.website.replace('https://', '')}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

