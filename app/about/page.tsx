import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'

export const metadata: Metadata = {
  title: 'About — Muhammad Rasyid Hidayat',
  description: 'Backend Developer dengan keahlian dalam Java Spring Boot, Go (Golang), PostgreSQL, dan pengembangan enterprise applications. Pengalaman lebih dari 3 tahun dalam membangun sistem backend yang scalable dan efisien.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Tentang Saya"
            subtitle="Backend Developer yang passionate dalam membangun sistem backend yang efisien, scalable, dan mudah dipelihara"
          />

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Pendidikan</h3>
              <div className="bg-navy-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">
                  Universitas Sebelas Maret (UNS)
                </h4>
                <p className="text-gray-700">S1 Pendidikan Teknik Informatika dan Komputer</p>
                <p className="text-gray-600 mt-2">
                  IPK 3.37 | 2014 - 2020
                </p>
                <p className="text-gray-600 mt-2">
                  Selama masa kuliah, saya mempelajari berbagai aspek dalam pengembangan perangkat lunak, 
                  mulai dari konsep dasar pemrograman hingga pengembangan aplikasi enterprise. Fokus utama 
                  saya adalah pada pengembangan backend dan manajemen database, yang menjadi fondasi kuat 
                  untuk karir saya sebagai Backend Developer.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Tentang Saya</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Saya adalah seorang Backend Developer yang memiliki passion dalam membangun sistem backend 
                yang efisien, scalable, dan mudah dipelihara. Dengan pengalaman lebih dari 3 tahun di berbagai 
                perusahaan teknologi, saya telah terlibat dalam pengembangan aplikasi enterprise yang kompleks, 
                mulai dari sistem ERP hingga aplikasi finansial.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Keahlian utama saya terletak pada pengembangan backend menggunakan Java Spring Boot dan Go (Golang), 
                dengan fokus pada optimasi performa database PostgreSQL dan MySQL. Saya terbiasa bekerja dengan 
                berbagai teknologi modern seperti Redis untuk caching, RabbitMQ untuk message queuing, dan Docker 
                untuk containerization.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Selain backend, saya juga memiliki kemampuan dalam pengembangan frontend menggunakan PrimeFaces, 
                JSF, React, dan Next.js. Kombinasi skill ini memungkinkan saya untuk memahami keseluruhan alur 
                pengembangan aplikasi, dari backend hingga frontend integration.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Keahlian & Kompetensi</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-navy-600 pl-4">
                  <h4 className="font-semibold text-navy-800 mb-2">Backend Development</h4>
                  <p className="text-gray-600">
                    Spesialisasi dalam pengembangan aplikasi backend menggunakan Java Spring Boot dan Go (Golang). 
                    Berpengalaman membangun RESTful API, mengembangkan modul ERP yang kompleks, dan mengintegrasikan 
                    berbagai layanan backend. Terbiasa bekerja dengan framework internal seperti jLeaf berbasis Spring Boot 
                    untuk pengembangan aplikasi enterprise.
                  </p>
                </div>
                <div className="border-l-4 border-navy-600 pl-4">
                  <h4 className="font-semibold text-navy-800 mb-2">Database & SQL Optimization</h4>
                  <p className="text-gray-600">
                    Keahlian mendalam dalam desain database PostgreSQL dan MySQL, optimasi query SQL menggunakan 
                    EXPLAIN ANALYZE, indexing, dan refactoring. Terbiasa bekerja dengan Hibernate/JPA untuk ORM, 
                    serta menulis stored procedures untuk logika bisnis yang kompleks. Fokus pada performance tuning 
                    untuk memastikan aplikasi berjalan dengan optimal.
                  </p>
                </div>
                <div className="border-l-4 border-navy-600 pl-4">
                  <h4 className="font-semibold text-navy-800 mb-2">System Integration & Debugging</h4>
                  <p className="text-gray-600">
                    Terampil dalam melakukan integrasi layanan backend dengan berbagai sistem, debugging permasalahan 
                    kompleks, dan optimasi performa sistem. Berpengalaman menggunakan tools seperti Postman untuk API testing, 
                    serta melakukan code review untuk memastikan kualitas kode. Terbiasa bekerja dalam tim dengan daily stand-up 
                    dan task tracking.
                  </p>
                </div>
                <div className="border-l-4 border-navy-600 pl-4">
                  <h4 className="font-semibold text-navy-800 mb-2">Full Stack Capabilities</h4>
                  <p className="text-gray-600">
                    Memiliki kemampuan full stack dengan pengalaman menggunakan PrimeFaces dan JSF untuk pengembangan 
                    UI enterprise, serta React dan Next.js untuk aplikasi modern. Kombinasi skill backend dan frontend ini 
                    memungkinkan saya untuk memahami keseluruhan alur pengembangan aplikasi dan memastikan integrasi yang seamless.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Perjalanan Karir</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Perjalanan karir saya dimulai dari freelance project pada tahun 2021, di mana saya mengembangkan 
                sistem manajemen pondok menggunakan Laravel 8. Pengalaman ini mengajarkan saya pentingnya komunikasi 
                dengan klien dan kemampuan untuk bekerja secara mandiri.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kemudian saya bergabung dengan PT. Infosys Solusi Terpadu pada tahun 2022, di mana saya terlibat 
                dalam pengembangan project BTN Syaria menggunakan Java Spring Boot. Di sini saya belajar pentingnya 
                unit testing dengan JUnit 4 dan Mockito, serta bekerja sama dengan tim machine learning untuk debugging.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Di PT FINTEK DIGITAL INDONESIA, saya fokus pada pengembangan API menggunakan Spring Boot dengan teknologi 
                modern seperti RabbitMQ dan Redis. Pengalaman ini memperkuat pemahaman saya tentang message queuing dan caching.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Saat ini di PT Solusi Teknologi Sejati, saya mengembangkan berbagai modul ERP yang kompleks, mulai dari 
                modul POS, Inventory, Master, Purchasing, hingga Sales Order. Saya juga mulai mempelajari Go (Golang) 
                untuk project KBPosMobile, yang menunjukkan komitmen saya untuk terus belajar teknologi baru. Pengalaman 
                ini telah mengasah kemampuan saya dalam mengembangkan sistem enterprise yang scalable dan maintainable.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Komitmen & Nilai</h3>
              <p className="text-gray-700 leading-relaxed">
                Saya percaya bahwa kode yang baik adalah kode yang mudah dibaca, mudah dirawat, dan mudah diuji. 
                Saya selalu berkomitmen untuk menulis clean code, mengikuti best practices, dan terus belajar teknologi 
                baru. Saya juga menghargai kolaborasi dalam tim, code review yang konstruktif, dan komunikasi yang efektif 
                untuk mencapai tujuan bersama.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

