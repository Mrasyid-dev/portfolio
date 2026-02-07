'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import SectionTitle from './SectionTitle'

const featuredProjects = [
  {
    title: 'Order Management System',
    subtitle: 'OCR & Bot Integration',
    description: 'Enterprise order management system with OCR receipt scanning and Telegram/WhatsApp bot integration. Dual-mode support for business and personal use.',
    tech: ['Node.js', 'React', 'PostgreSQL', 'OCR', 'Bot API'],
    demoLink: 'https://order-management-system-frontend-or.vercel.app/',
    metrics: [
      { label: 'Input Speed', value: '80% faster' },
      { label: 'Test Files', value: '35+' },
      { label: 'Docs', value: '17+' },
    ],
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Financial Reporting System',
    subtitle: 'Performance Optimized',
    description: 'High-performance financial system with 10x optimization. Handles 100,000+ transactions with sub-10ms response time using Go and advanced caching.',
    tech: ['Go', 'Next.js', 'PostgreSQL', 'Redis', 'PL/pgSQL'],
    demoLink: 'https://financial-reporting-system.vercel.app/',
    metrics: [
      { label: 'Performance', value: '10x faster' },
      { label: 'Cache Hit', value: '95%' },
      { label: 'Data', value: '100K+' },
    ],
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'POS System',
    subtitle: 'Modern Point of Sale',
    description: 'Production-ready POS system with type-safe queries, inventory management, and role-based access. Fully containerized with Docker.',
    tech: ['Go', 'Next.js', 'TypeScript', 'Docker', 'OpenAPI'],
    demoLink: 'https://pos-system-seven-pied.vercel.app/',
    metrics: [
      { label: 'Type-Safe', value: 'sqlc' },
      { label: 'Deploy', value: 'Docker' },
      { label: 'Docs', value: 'OpenAPI' },
    ],
    gradient: 'from-green-600 to-teal-600',
  },
]

type FeaturedProjectsProps = { transparent?: boolean }

export default function FeaturedProjects({ transparent }: FeaturedProjectsProps) {
  return (
    <section
      className={
        transparent
          ? 'py-20 bg-black/10 dark:bg-black/15 transition-colors duration-300'
          : 'py-20 bg-gray-50 dark:bg-navy-900 transition-colors duration-300'
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="Production-ready systems showcasing modern tech stack and enterprise-level quality"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={
                transparent
                  ? 'group relative bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20 dark:border-white/10'
                  : 'group relative bg-white dark:bg-navy-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
              }
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-4`}>
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 min-h-[80px]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-navy-100 dark:bg-navy-700 text-navy-700 dark:text-gray-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className={
                    transparent
                      ? 'grid grid-cols-3 gap-2 mb-6 p-4 bg-black/20 dark:bg-black/30 rounded-xl'
                      : 'grid grid-cols-3 gap-2 mb-6 p-4 bg-gray-50 dark:bg-navy-900 rounded-xl'
                  }>
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-lg font-bold text-navy-900 dark:text-white">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-navy-900 dark:bg-white text-white dark:text-navy-900 rounded-2xl font-semibold hover:bg-navy-800 dark:hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Projects
            <ExternalLink size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
