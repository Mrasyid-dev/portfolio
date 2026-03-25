'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import ProjectCard from '@/components/ProjectCard'
import { useLanguage } from '@/contexts/LanguageContext'

const projects = [
  // TIER 1: HERO PROJECTS (Enterprise-Level & AI-Native)
  {
    title: {
      id: 'Enterprise POS System',
      en: 'Enterprise POS System',
    },
    tier: 'hero',
    tools: [
      'Java Spring Boot',
      'Go (Golang)',
      'PostgreSQL',
      'ActiveMQ',
      'AI-Assisted Diagnostics'
    ],
    problem: {
      id: 'Sistem POS mission-critical yang menangani 15.000+ transaksi harian mengalami hambatan lambatnya import data dan isu stabilitas sesekali saat jam sibuk.',
      en: 'A mission-critical POS system handling 15,000+ daily transactions suffered from slow dataset imports and occasional stability issues during peak hours.',
    },
    solution: {
      id: 'Memanfaatkan diagnostic tools berbasis AI untuk mempercepat proses debugging kompleks dan mengeksekusi optimasi query PostgreSQL mendalam. Mengimplementasikan validasi data multi-layer melalui mekanisme transaction rollback.',
      en: 'Leveraged AI-assisted diagnostic tools for rapid complex debugging and executed deep PostgreSQL query optimizations. Implemented multi-layer data validation with transaction rollback mechanisms.',
    },
    impact: {
      id: 'Berhasil memangkas latensi pemrosesan data historis sebesar 95% (dari 30 menit menjadi 1 menit). Stabil menangani lebih dari 15rb+ transaksi harian dengan margin error rate di angka fiktif <0.1%.',
      en: 'Drastically reduced data processing latency by 95% (30 mins to 1 min). Handled 15k+ daily transactions seamlessly with a virtually non-existent <0.1% error rate.',
    },
    demoLink: 'https://pos-system-seven-pied.vercel.app/',
    githubLink: '#',
  },
  {
    title: {
      id: 'Qalam (Digital Dashboard)',
      en: 'Qalam (Digital Dashboard)',
    },
    tier: 'hero',
    tools: [
      'Go (Golang)',
      'Antygravity (AI-Agent)',
      'Cursor',
      'PostgreSQL',
      'Next.js 14'
    ],
    problem: {
      id: 'Kebutuhan krusial akan rancangan digital management dashboard scalable, berkinerja mutakhir, yang ditargetkan rilis pada tenggat waktu agresif tanpa sama sekali mengorbankan kualitas clean architecture.',
      en: 'Needed a scalable, high-performance digital management dashboard built under an aggressive timeline without compromising architectural cleanliness.',
    },
    solution: {
      id: 'Direkayasa dan bermanuver menggunakan optimalisasi workflow AI-agent (Antygravity) sebagai pondasi cepat dalam men-deploy platform backend Go (Golang) yang super gesit. 100% konsisten membentengi kebersihan arsitektur sistem sedari hari pertama pengerjaan.',
      en: 'Engineered utilizing advanced AI-agent workflows (Antygravity) to rapidly blueprint and deploy a lightning-fast Go backend. Maintained a 100% clean architecture from day one.',
    },
    impact: {
      id: 'Menghantarkan performa dashboard level-enterprise berskala 2x lebih kompetitif. Nol menimbun tech debt di setiap fungsional sistem sekaligus berujung memuluskan iterasi pengolahan data masa depan.',
      en: 'Delivered an enterprise-grade digital dashboard 2x faster than traditional development cycles. Ensured zero technical debt and seamless data iteration.',
    },
    demoLink: 'https://qalam-gamma.vercel.app/',
    githubLink: '#',
  },
  {
    title: {
      id: 'BONBON (SaaS Platform)',
      en: 'BONBON (SaaS Platform)',
    },
    tier: 'hero',
    tools: [
      'Next.js 14',
      'React Native',
      'PostgreSQL',
      'Docker',
      'AI-Driven Workflows'
    ],
    problem: {
      id: 'Tantangan men-develop core internal untuk massive SaaS platform yang menuntut pondasi cloud berketahanan tinggi agar dapat dihandalkan melawan user-load lalu-lintas yang padat, bahkan dituntut iterasi perilisan fitur yang serba berkesinambungan.',
      en: 'Building a massive SaaS product that requires a resilient cloud architecture capable of handling highly concurrent user loads while iterating features rapidly.',
    },
    solution: {
      id: 'Merumuskan standarisasi skalabilitas dasar arsitektur internal BONBON sedari baris kode 0 (from the ground up). Sengaja mengimplementasi dukungan teknologi kapabilitas AI-assist ke struktur flow pengembangan demi meroketkan penyebaran update fitur cepat bebas ancaman memicu fatal (Zero regression threat).',
      en: 'Architected BONBON from the ground up prioritizing scalability and development workflow efficiency. Integrated AI capabilities to accelerate feature deployments without regressions.',
    },
    impact: {
      id: 'Eksistensi permanen sebuah pondasi SaaS yang sungguh scalable. Terbukti merealisasikan ekspektasi efisien engineering beraliran AI-Native yang mampu meredam kekhawatiran disrupsi skalabilitas versus proses rilis agresif tak terhindarkan.',
      en: 'Established a highly scalable SaaS foundation. Proved the viability of an AI-Native engineering approach by balancing aggressive product rollouts with future-proof architecture.',
    },
    demoLink: 'https://order-management-system-frontend-or.vercel.app/',
    githubLink: '#',
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
