'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import ProjectCard from '@/components/ProjectCard'
import { useLanguage } from '@/contexts/LanguageContext'

const projects = [
  {
    title: {
      id: 'Point of Sale (POS) System',
      en: 'Point of Sale (POS) System',
    },
    tools: ['Go (Golang)', 'Next.js', 'PostgreSQL', 'Docker', 'RESTful API', 'TypeScript'],
    problem: {
      id:
        'Perancangan sistem POS yang menyerupai kebutuhan enterprise, dengan fokus pada stabilitas backend, konsistensi data transaksi, dan keandalan sistem saat menangani operasi bisnis harian.',
      en:
        'Designing a POS system that resembles enterprise requirements, with focus on backend stability, transaction data consistency, and system reliability when handling daily business operations.',
    },
    solution: {
      id:
        'Membangun sistem POS dengan backend Go (Golang) yang menekankan validasi data yang ketat, transaksi database yang aman, dan manajemen error yang robust. Mengimplementasikan struktur database yang konsisten untuk transaksi, inventori, dan laporan. Sistem dirancang dengan pendekatan enterprise-style untuk memastikan integritas data dan stabilitas backend.',
      en:
        'Built a POS system with Go (Golang) backend that emphasizes strict data validation, secure database transactions, and robust error handling. Implemented consistent database structure for transactions, inventory, and reports. System designed with enterprise-style approach to ensure data integrity and backend stability.',
    },
    impact: {
      id:
        'Arsitektur backend yang stabil dengan fokus pada konsistensi data dan penanganan transaksi yang dapat diandalkan. Sistem dirancang untuk mendukung skenario enterprise seperti validasi data multi-layer, penanganan concurrency, dan struktur yang siap untuk integrasi dengan sistem lain.',
      en:
        'Stable backend architecture with focus on data consistency and reliable transaction handling. System designed to support enterprise scenarios such as multi-layer data validation, concurrency handling, and structure ready for integration with other systems.',
    },
    demoLink: process.env.NEXT_PUBLIC_POS_DEMO_URL || 'http://localhost:3001/login',
    githubLink: 'https://github.com/SeeFun69/pos-system',
  },
  {
    title: {
      id: 'Financial Reporting System',
      en: 'Financial Reporting System',
    },
    tools: ['Go (Golang)', 'Next.js', 'PostgreSQL', 'Docker', 'TypeScript', 'React Query'],
    problem: {
      id:
        'Perancangan sistem pelaporan keuangan yang menyerupai kebutuhan enterprise, dengan fokus pada keandalan data, konsistensi perhitungan, dan stabilitas proses pembuatan laporan yang kompleks.',
      en:
        'Designing a financial reporting system that resembles enterprise requirements, with focus on data reliability, calculation consistency, and stability of complex report generation processes.',
    },
    solution: {
      id:
        'Membangun sistem pelaporan dengan backend Go (Golang) yang mengoptimalkan query SQL untuk data-intensive operations, mengimplementasikan validasi data yang ketat, dan memastikan konsistensi perhitungan keuangan. Sistem dirancang dengan struktur database yang efisien dan pendekatan enterprise-style untuk handling data besar dan kompleksitas perhitungan.',
      en:
        'Built a reporting system with Go (Golang) backend that optimizes SQL queries for data-intensive operations, implements strict data validation, and ensures financial calculation consistency. System designed with efficient database structure and enterprise-style approach for handling large data and calculation complexity.',
    },
    impact: {
      id:
        'Backend yang dirancang untuk menangani proses pelaporan yang kompleks dengan fokus pada konsistensi data dan stabilitas sistem. Struktur dan pendekatan yang digunakan menyerupai kebutuhan enterprise untuk sistem pelaporan yang dapat diandalkan.',
      en:
        'Backend designed to handle complex reporting processes with focus on data consistency and system stability. Structure and approach used resemble enterprise requirements for reliable reporting systems.',
    },
    demoLink: process.env.NEXT_PUBLIC_FINANCIAL_DEMO_URL || 'http://localhost:3002/login',
    githubLink: 'https://github.com/SeeFun69/financial-reporting-system',
  },
  {
    title: {
      id: 'Enterprise Resource Planning System',
      en: 'Enterprise Resource Planning System',
    },
    tools: ['Java', 'Spring Boot', 'PostgreSQL', 'JSF', 'PrimeFaces'],
    problem: {
      id:
        'Studi kasus untuk mengoptimalkan performa sistem enterprise, termasuk perbaikan query SQL dan struktur database.',
      en:
        'Case study for optimizing enterprise system performance, including SQL query improvements and database structure.',
    },
    solution: {
      id:
        'Mengimplementasikan optimasi database dengan indexing dan query tuning. Menggunakan Spring Boot untuk struktur backend yang terorganisir.',
      en:
        'Implemented database optimization with indexing and query tuning. Used Spring Boot for organized backend structure.',
    },
    impact: {
      id:
        'Mendemonstrasikan pemahaman tentang optimasi database dan arsitektur backend untuk sistem enterprise.',
      en:
        'Demonstrates understanding of database optimization and backend architecture for enterprise systems.',
    },
    githubLink: 'https://github.com/Mrasyid-dev/erp-system',
  },
  {
    title: {
      id: 'E-Commerce Backend API',
      en: 'E-Commerce Backend API',
    },
    tools: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'RESTful API'],
    problem: {
      id:
        'Studi kasus untuk membangun backend API dengan fokus pada struktur yang scalable dan manajemen data.',
      en:
        'Case study for building backend API with focus on scalable structure and data management.',
    },
    solution: {
      id:
        'Mengimplementasikan RESTful API menggunakan Spring Boot dengan PostgreSQL. Menggunakan stored procedures untuk logika bisnis dan containerization dengan Docker.',
      en:
        'Implemented RESTful API using Spring Boot with PostgreSQL. Used stored procedures for business logic and containerization with Docker.',
    },
    impact: {
      id:
        'Mendemonstrasikan kemampuan dalam membangun backend API dan manajemen database untuk aplikasi yang kompleks.',
      en:
        'Demonstrates ability in building backend API and database management for complex applications.',
    },
    githubLink: 'https://github.com/Mrasyid-dev/ecommerce-api',
  },
  {
    title: {
      id: 'API Gateway & Service Mesh',
      en: 'API Gateway & Service Mesh',
    },
    tools: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Microservices'],
    problem: {
      id:
        'Studi kasus untuk memahami arsitektur microservices dan pola API Gateway.',
      en:
        'Case study for understanding microservices architecture and API Gateway patterns.',
    },
    solution: {
      id:
        'Mengimplementasikan API Gateway menggunakan Spring Boot dengan service registry dan circuit breaker pattern.',
      en:
        'Implemented API Gateway using Spring Boot with service registry and circuit breaker pattern.',
    },
    impact: {
      id:
        'Mendemonstrasikan pemahaman tentang arsitektur microservices dan pola backend untuk sistem terdistribusi.',
      en:
        'Demonstrates understanding of microservices architecture and backend patterns for distributed systems.',
    },
    githubLink: 'https://github.com/Mrasyid-dev/api-gateway',
  },
]

export default function ProjectsPage() {
  const { t, language } = useLanguage()
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.projects.title}
            subtitle={t.projects.subtitle}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={typeof project.title === 'string' ? project.title : project.title[language]}
                tools={project.tools}
                problem={typeof project.problem === 'string' ? project.problem : project.problem[language]}
                solution={typeof project.solution === 'string' ? project.solution : project.solution[language]}
                impact={typeof project.impact === 'string' ? project.impact : project.impact[language]}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
