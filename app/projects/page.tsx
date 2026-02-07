'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import ProjectCard from '@/components/ProjectCard'
import { useLanguage } from '@/contexts/LanguageContext'

const projects = [
  // TIER 1: HERO PROJECTS (Enterprise-Level)
  {
    title: {
      id: 'Order Management System dengan OCR & Bot Integration',
      en: 'Order Management System with OCR & Bot Integration',
    },
    tier: 'hero',
    tools: [
      'Node.js', 
      'Express', 
      'React', 
      'Vite', 
      'Prisma', 
      'PostgreSQL', 
      'Google Cloud Vision API', 
      'Telegram/WhatsApp Bot',
      'TailwindCSS'
    ],
    problem: {
      id: 'Sistem manajemen pesanan yang membutuhkan input cepat via chat dan ekstraksi data otomatis dari struk belanja. Sistem harus mendukung dual-mode: Business Mode (manajemen order) dan Personal Mode (pencatatan pengeluaran).',
      en: 'Order management system requiring quick input via chat and automatic data extraction from receipts. System must support dual-mode: Business Mode (order management) and Personal Mode (expense tracking).',
    },
    solution: {
      id: 'Membangun sistem full-stack dengan integrasi OCR (Google Cloud Vision) untuk scan struk otomatis, dan Bot (Telegram/WhatsApp) untuk input data via chat. Backend menggunakan Express & Prisma untuk manajemen data yang robust, serta Frontend React untuk dashboard interaktif real-time.',
      en: 'Built full-stack system with OCR integration (Google Cloud Vision) for automatic receipt scanning, and Bot (Telegram/WhatsApp) for chat-based data input. Backend uses Express & Prisma for robust data management, with React Frontend for interactive real-time dashboard.',
    },
    impact: {
      id: 'Mempercepat proses input data pesanan hingga 80% melalui fitur scan struk dan bot chat. Memberikan visibilitas real-time terhadap arus kas dan inventori bisnis maupun personal.',
      en: 'Accelerated order input process by up to 80% through receipt scanning and chat bot features. Provided real-time visibility into business and personal cash flow and inventory.',
    },
    demoLink: 'https://order-management-system-frontend-or.vercel.app/',
    githubLink: 'https://github.com/Mrasyid-dev/order-management-system',
  },
  {
    title: {
      id: 'Financial Reporting System (Performance Optimized)',
      en: 'Financial Reporting System (Performance Optimized)',
    },
    tier: 'hero',
    tools: [
      'Go',
      'Gin',
      'PostgreSQL',
      'PL/pgSQL',
      'Next.js 14',
      'TypeScript',
      'Caching',
      'Performance Optimization'
    ],
    problem: {
      id: 'Sistem pelaporan keuangan dengan 100,000+ transaksi mengalami query lambat (450ms) yang menghambat produktivitas. Perlu optimasi database dan caching untuk meningkatkan performa.',
      en: 'Financial reporting system with 100,000+ transactions experiencing slow queries (450ms) hindering productivity. Required database optimization and caching to improve performance.',
    },
    solution: {
      id: 'Implementasi stored procedures (PL/pgSQL) untuk perhitungan kompleks di database. Menambahkan indexing strategis untuk 70% peningkatan kecepatan query. Implementasi caching dengan Redis untuk 95% improvement (450ms → 5ms). Parallel processing menggunakan Go routines.',
      en: 'Implemented stored procedures (PL/pgSQL) for complex calculations in database. Added strategic indexing for 70% query speed improvement. Implemented Redis caching for 95% improvement (450ms → 5ms). Parallel processing using Go routines.',
    },
    impact: {
      id: 'Mencapai peningkatan performa 10x lebih cepat. Query utama dari 450ms menjadi 5ms (95% improvement). Mampu handle 100,000+ transaksi dengan response time konsisten dibawah 10ms.',
      en: 'Achieved 10x performance improvement. Main queries from 450ms to 5ms (95% improvement). Able to handle 100,000+ transactions with consistent response time under 10ms.',
    },
    demoLink: 'https://financial-reporting-system.vercel.app/',
    githubLink: 'https://github.com/Mrasyid-dev/financial-reporting-system',
  },
  {
    title: {
      id: 'POS System (Point of Sale)',
      en: 'POS System (Point of Sale)',
    },
    tier: 'hero',
    tools: [
      'Go',
      'sqlc',
      'pgx',
      'Next.js 14',
      'TypeScript',
      'Docker',
      'OpenAPI',
      'PostgreSQL'
    ],
    problem: {
      id: 'Bisnis retail membutuhkan sistem kasir modern yang type-safe, mudah di-deploy, dan memiliki kontrol akses berbasis role. Sistem harus mendukung manajemen inventori real-time dan reporting.',
      en: 'Retail business needs modern, type-safe POS system that is easy to deploy and has role-based access control. System must support real-time inventory management and reporting.',
    },
    solution: {
      id: 'Membangun POS system dengan Go backend menggunakan sqlc untuk type-safe database queries. Implementasi pgx untuk performa database optimal. Frontend Next.js 14 untuk UI responsive. Docker containerization untuk deployment mudah. OpenAPI spec untuk dokumentasi API lengkap.',
      en: 'Built POS system with Go backend using sqlc for type-safe database queries. Implemented pgx for optimal database performance. Next.js 14 frontend for responsive UI. Docker containerization for easy deployment. OpenAPI spec for complete API documentation.',
    },
    impact: {
      id: 'Menyediakan solusi POS production-ready dengan type-safety penuh, mengurangi bug runtime. Docker setup memudahkan deployment di berbagai environment. Role-based access meningkatkan keamanan sistem.',
      en: 'Provided production-ready POS solution with full type-safety, reducing runtime bugs. Docker setup simplified deployment across various environments. Role-based access enhanced system security.',
    },
    demoLink: 'https://pos-system-seven-pied.vercel.app/',
    githubLink: 'https://github.com/Mrasyid-dev/pos-system',
  },

  // TIER 2: FULL-STACK APPLICATIONS
  {
    title: {
      id: 'Kopi Shop Progo (Dynamic CMS)',
      en: 'Kopi Shop Progo (Dynamic CMS)',
    },
    tier: 'fullstack',
    tools: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'React',
      'HTML/CSS/JS',
      'Google Maps API'
    ],
    problem: {
      id: 'Coffee shop membutuhkan website profesional dengan kemampuan update konten mandiri tanpa developer. Perlu CMS dashboard untuk kelola menu, galeri, dan testimoni.',
      en: 'Coffee shop needs professional website with self-service content update capability. Requires CMS dashboard to manage menu, gallery, and testimonials.',
    },
    solution: {
      id: 'Membangun full-stack website dengan landing page modern dan admin dashboard berbasis React. Backend Express + PostgreSQL untuk API robust. CMS fitur: manajemen menu, galeri, testimoni, dan Google Maps integration.',
      en: 'Built full-stack website with modern landing page and React-based admin dashboard. Express + PostgreSQL backend for robust API. CMS features: menu management, gallery, testimonials, and Google Maps integration.',
    },
    impact: {
      id: 'Memberikan kemampuan business owner untuk update konten sendiri tanpa technical knowledge. Meningkatkan online presence dan mempermudah customer menemukan lokasi.',
      en: 'Empowered business owner to update content independently without technical knowledge. Enhanced online presence and made it easier for customers to find location.',
    },
    demoLink: 'https://kopi-shop-progo.vercel.app/',
    githubLink: 'https://github.com/Mrasyid-dev/kopi-shop-progo',
  },
  {
    title: {
      id: 'Dashboard Raport Sekolah (Role-Based Access)',
      en: 'School Report Dashboard (Role-Based Access)',
    },
    tier: 'fullstack',
    tools: [
      'Node.js', 
      'Express', 
      'React', 
      'Vite', 
      'PostgreSQL', 
      'Prisma',
      'JWT Auth',
      'ExcelJS',
      'Chart.js'
    ],
    problem: {
      id: 'Sekolah membutuhkan sistem manajemen nilai yang aman dengan akses berbeda untuk Admin, Guru, dan Siswa. Sistem juga harus menangani perhitungan nilai kompleks dan convert ke format laporan resmi.',
      en: 'School needs a secure grade management system with distinct access for Admins, Teachers, and Students. System must also handle complex grade calculations and convert them into official report formats.',
    },
    solution: {
      id: 'Implementasi Role-Based Access Control (RBAC) menggunakan JWT. Fitur perhitungan otomatis nilai akhir dan konversi predikat. Integrasi ExcelJS untuk export laporan massal sesuai format dinas pendidikan.',
      en: 'Implemented Role-Based Access Control (RBAC) using JWT. Automated final grade calculation and predicate conversion features. ExcelJS integration for bulk report export according to official education department formats.',
    },
    impact: {
      id: 'Meningkatkan efisiensi pengolahan nilai guru dan menjamin keamanan data siswa. Mengurangi human-error dalam perhitungan nilai akhir rapor.',
      en: 'Increased efficiency of teacher grade processing and ensured student data security. Reduced human error in final report card calculations.',
    },
    demoLink: 'https://web-dasboard-raport-v1.vercel.app/',
    githubLink: 'https://github.com/Mrasyid-dev/web-dasboard-raport',
  },

  // TIER 3: LANDING PAGES & WEBSITES
  {
    title: {
      id: 'Company Profile Landing (3D Interactive)',
      en: 'Company Profile Landing (3D Interactive)',
    },
    tier: 'landing',
    tools: ['HTML', 'CSS', 'JavaScript', 'Three.js', '3D Animation'],
    problem: {
      id: 'Perusahaan teknologi membutuhkan company profile yang modern dan eye-catching dengan elemen interaktif untuk menarik perhatian visitor.',
      en: 'Technology company needs modern and eye-catching company profile with interactive elements to attract visitor attention.',
    },
    solution: {
      id: 'Membangun landing page dengan Three.js untuk animasi 3D yang smooth. Design modern dengan interactive elements. Fully responsive untuk semua device.',
      en: 'Built landing page with Three.js for smooth 3D animations. Modern design with interactive elements. Fully responsive for all devices.',
    },
    impact: {
      id: 'Meningkatkan brand image dengan tampilan modern dan profesional. Interactive 3D elements meningkatkan engagement visitor.',
      en: 'Enhanced brand image with modern and professional appearance. Interactive 3D elements increased visitor engagement.',
    },
    demoLink: 'https://company-profile-landing.vercel.app/',
  },
  {
    title: {
      id: 'Professional Landing Page Template',
      en: 'Professional Landing Page Template',
    },
    tier: 'landing',
    tools: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    problem: {
      id: 'Kebutuhan template landing page yang clean, professional, dan mudah di-customize untuk berbagai keperluan bisnis.',
      en: 'Need for clean, professional landing page template that is easy to customize for various business purposes.',
    },
    solution: {
      id: 'Membuat template landing page dengan design modern, clean code, dan mudah di-customize. Fully responsive dan optimized untuk SEO.',
      en: 'Created landing page template with modern design, clean code, and easy customization. Fully responsive and SEO optimized.',
    },
    impact: {
      id: 'Template siap pakai yang mempercepat proses pembuatan landing page untuk client atau project pribadi.',
      en: 'Ready-to-use template that accelerates landing page creation process for clients or personal projects.',
    },
    demoLink: 'https://professional-landing-page-neon.vercel.app/',
  },
  {
    title: {
      id: 'Nebula Innovations (Tech Company)',
      en: 'Nebula Innovations (Tech Company)',
    },
    tier: 'landing',
    tools: ['HTML', 'CSS', 'JavaScript', 'Modern UI/UX'],
    problem: {
      id: 'Tech startup membutuhkan landing page yang mencerminkan brand identity inovatif dan modern.',
      en: 'Tech startup needs landing page that reflects innovative and modern brand identity.',
    },
    solution: {
      id: 'Design landing page dengan tema futuristik dan modern. Smooth animations dan optimized performance.',
      en: 'Designed landing page with futuristic and modern theme. Smooth animations and optimized performance.',
    },
    impact: {
      id: 'Landing page yang professional untuk showcase tech company startup dengan strong brand identity.',
      en: 'Professional landing page to showcase tech company startup with strong brand identity.',
    },
    demoLink: 'https://nebula-innovations.vercel.app/',
  },
  {
    title: {
      id: 'AI Productivity SaaS Landing',
      en: 'AI Productivity SaaS Landing',
    },
    tier: 'landing',
    tools: ['HTML', 'CSS', 'JavaScript', 'SaaS Design Pattern'],
    problem: {
      id: 'SaaS product membutuhkan landing page yang menjelaskan value proposition dengan jelas dan mendorong sign-up.',
      en: 'SaaS product needs landing page that clearly explains value proposition and drives sign-ups.',
    },
    solution: {
      id: 'Membuat SaaS landing page dengan focus pada value proposition, feature highlights, dan clear CTA. Design modern dengan social proof elements.',
      en: 'Created SaaS landing page focused on value proposition, feature highlights, and clear CTAs. Modern design with social proof elements.',
    },
    impact: {
      id: 'Landing page conversion-optimized untuk SaaS product dengan clear messaging dan strong call-to-action.',
      en: 'Conversion-optimized landing page for SaaS product with clear messaging and strong call-to-action.',
    },
    demoLink: 'https://ai-productivity-saas-landing.vercel.app/',
  },
  {
    title: {
      id: 'RM Lukito Badran (Restaurant)',
      en: 'RM Lukito Badran (Restaurant)',
    },
    tier: 'landing',
    tools: ['HTML', 'CSS', 'JavaScript', 'Google Maps'],
    problem: {
      id: 'Restoran membutuhkan website untuk showcase menu, lokasi, dan informasi kontak untuk menarik customer.',
      en: 'Restaurant needs website to showcase menu, location, and contact information to attract customers.',
    },
    solution: {
      id: 'Membangun restaurant website dengan menu gallery yang menarik, Google Maps integration, dan contact form. Design appetite-appealing.',
      en: 'Built restaurant website with attractive menu gallery, Google Maps integration, and contact form. Appetite-appealing design.',
    },
    impact: {
      id: 'Online presence untuk restoran yang memudahkan customer menemukan informasi dan lokasi.',
      en: 'Online presence for restaurant that makes it easy for customers to find information and location.',
    },
    demoLink: 'https://rm-lukito-badran-new-template.vercel.app/',
  },
  {
    title: {
      id: 'Praktek dr. Indah Nurhayati Sp.A',
      en: 'Praktek dr. Indah Nurhayati Sp.A (Medical Practice)',
    },
    tier: 'landing',
    tools: ['HTML', 'CSS', 'JavaScript', 'Medical Design'],
    problem: {
      id: 'Praktik dokter membutuhkan website professional untuk informasi layanan, jadwal praktik, dan kontak.',
      en: 'Medical practice needs professional website for service information, practice schedule, and contact.',
    },
    solution: {
      id: 'Membangun medical landing page dengan design professional, trust-building elements, dan clear service information.',
      en: 'Built medical landing page with professional design, trust-building elements, and clear service information.',
    },
    impact: {
      id: 'Website professional untuk praktik medis yang meningkatkan kepercayaan pasien dan memudahkan akses informasi.',
      en: 'Professional website for medical practice that increases patient trust and facilitates information access.',
    },
    demoLink: 'https://praktek-dr-indah-nurhayati-sp-a.vercel.app/',
  },
]

export default function ProjectsPage() {
  const { t, language } = useLanguage()
  
  const heroProjects = projects.filter(p => p.tier === 'hero')
  const fullstackProjects = projects.filter(p => p.tier === 'fullstack')
  const landingProjects = projects.filter(p => p.tier === 'landing')
  
  return (
    <main className="min-h-screen bg-white dark:bg-transparent transition-colors duration-300">
      <Navbar />
      <section className="py-20 bg-black/5 dark:bg-black/15 transition-colors duration-300 min-h-screen">
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title={t.projects.title}
              subtitle={t.projects.subtitle}
            />

            {/* TIER 1: Hero Projects */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full" />
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white">
                Enterprise-Level Systems
              </h2>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-semibold">
                Hero Projects
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {heroProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={typeof project.title === 'string' ? project.title : project.title[language]}
                  tools={project.tools}
                  problem={typeof project.problem === 'string' ? project.problem : project.problem[language]}
                  solution={typeof project.solution === 'string' ? project.solution : project.solution[language]}
                  impact={typeof project.impact === 'string' ? project.impact : project.impact[language]}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                  transparent
                />
              ))}
            </div>
          </div>

          {/* TIER 2: Full-Stack Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white">
                Full-Stack Applications
              </h2>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 rounded-full text-sm font-semibold">
                Complete Solutions
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {fullstackProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={typeof project.title === 'string' ? project.title : project.title[language]}
                  tools={project.tools}
                  problem={typeof project.problem === 'string' ? project.problem : project.problem[language]}
                  solution={typeof project.solution === 'string' ? project.solution : project.solution[language]}
                  impact={typeof project.impact === 'string' ? project.impact : project.impact[language]}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                  transparent
                />
              ))}
            </div>
          </div>

          {/* TIER 3: Landing Pages */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-gradient-to-b from-green-600 to-teal-600 rounded-full" />
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white">
                Landing Pages & Websites
              </h2>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-full text-sm font-semibold">
                Frontend Showcase
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {landingProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={typeof project.title === 'string' ? project.title : project.title[language]}
                  tools={project.tools}
                  problem={typeof project.problem === 'string' ? project.problem : project.problem[language]}
                  solution={typeof project.solution === 'string' ? project.solution : project.solution[language]}
                  impact={typeof project.impact === 'string' ? project.impact : project.impact[language]}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                  transparent
                />
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-white/10">
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-6 text-center">
              Portfolio Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {projects.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Total Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {heroProjects.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Enterprise Systems
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                  {fullstackProjects.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Full-Stack Apps
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Production Ready
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <Footer transparent />
    </main>
  )
}
