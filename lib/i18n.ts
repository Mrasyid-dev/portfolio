// Translation files for Indonesian and English

export type Language = 'id' | 'en'

export const translations = {
  id: {
    // Navigation
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      skills: 'Keahlian',
      projects: 'Proyek',
      experience: 'Pengalaman',
      contact: 'Kontak',
    },
    // Hero Section
    hero: {
      title: 'Backend & Database Engineer',
      description:
        'Keahlian dalam Java Spring Boot, Golang, PostgreSQL, Optimasi SQL, System Debugging, dan Aplikasi Enterprise.',
      contactMe: 'Hubungi Saya',
      downloadCV: 'Unduh CV',
      metrics: {
        transactions: '15K+',
        transactionsLabel: 'Transaksi/Hari',
        performance: '95%',
        performanceLabel: 'Peningkatan Performa',
        uptime: '99.5%',
        uptimeLabel: 'Uptime',
        errorRate: '<0.1%',
        errorRateLabel: 'Error Rate',
      },
      metricsContext: 'Dari pengalaman di sistem POS enterprise.',
      metricsContextLink: 'Lihat studi kasus →',
      scene3dCaption: 'Jaringan layanan & database — interaktif 3D (React Three Fiber)',
      scene3dClickHint: 'Klik bola untuk menuju menu',
      cursorCubesCaption: 'Background 3D — React Three Fiber',
      cursorCubesHint: 'Geser kursor untuk melihat efek',
    },
    // Freelance Section
    freelance: {
      title: 'Tersedia untuk Proyek Freelance',
      subtitle: 'Spesialisasi dalam Backend Development, Database Optimization, dan Enterprise System Solutions. Mari bangun sesuatu yang hebat bersama.',
      getInTouch: 'Hubungi Saya',
      downloadCV: 'Unduh CV',
      availability: 'Terbuka untuk proyek jangka pendek dan panjang',
      location: 'Remote work preferred • Tersedia untuk klien Indonesia dan Internasional',
    },
    // About Page
    about: {
      title: 'Tentang Saya',
      subtitle: 'Backend Developer yang passionate dalam membangun sistem backend yang efisien, scalable, dan mudah dipelihara',
      education: 'Pendidikan',
      educationDegree: 'S1 Pendidikan Teknik Informatika dan Komputer',
      educationGPA: 'IPK 3.37 | 2014 - 2020',
      educationDescription:
        'Selama masa kuliah, saya mempelajari berbagai aspek dalam pengembangan perangkat lunak, mulai dari konsep dasar pemrograman hingga pengembangan aplikasi enterprise. Fokus utama saya adalah pada pengembangan backend dan manajemen database, yang menjadi fondasi kuat untuk karir saya sebagai Backend Developer.',
      aboutMe: 'Tentang Saya',
      aboutMeText1:
        'Saya adalah seorang Backend Engineer dengan pengalaman bekerja pada sistem enterprise yang berfokus pada stabilitas data, keandalan sistem, dan proses bisnis yang berjalan setiap hari. Dalam pekerjaan saya, saya banyak terlibat dalam pemeliharaan sistem yang sudah berjalan, perbaikan bug, serta penanganan data bermasalah pada sistem berskala besar.',
      aboutMeText2:
        'Sebagian besar pekerjaan saya berkaitan dengan backend dan database, terutama pada sistem POS yang bersifat business-critical. Saya terbiasa menangani proses validasi data, perbaikan query SQL, serta memastikan data transaksi dan laporan tetap konsisten dan dapat dipercaya oleh pengguna.',
      aboutMeText3:
        'Selain mengerjakan fitur, saya juga sering terlibat dalam analisis dampak perubahan pada sistem yang sudah berjalan, termasuk perbaikan data existing dan penanganan incident produksi. Pengalaman ini membentuk cara kerja saya yang lebih berhati-hati, terstruktur, dan berorientasi pada stabilitas jangka panjang. Saya memiliki pengalaman menggunakan Java dan Golang dalam konteks backend, serta memahami frontend sebagai bagian pendukung untuk memastikan alur aplikasi berjalan dengan baik. Saat ini, saya terus mengembangkan pemahaman saya tentang sistem backend yang kompleks dan data-intensive melalui pekerjaan profesional maupun personal project.',
      skillsCompetence: 'Keahlian & Kompetensi',
      backendDev: 'Backend Development',
      backendDevDesc:
        'Spesialisasi dalam pengembangan aplikasi backend menggunakan Java Spring Boot dan Go (Golang). Berpengalaman membangun RESTful API, mengembangkan modul ERP yang kompleks, dan mengintegrasikan berbagai layanan backend. Terbiasa bekerja dengan framework internal seperti jLeaf berbasis Spring Boot untuk pengembangan aplikasi enterprise.',
      databaseSQL: 'Database & SQL Optimization',
      databaseSQLDesc:
        'Keahlian mendalam dalam desain database PostgreSQL dan MySQL, optimasi query SQL menggunakan EXPLAIN ANALYZE, indexing, dan refactoring. Terbiasa bekerja dengan Hibernate/JPA untuk ORM, serta menulis stored procedures untuk logika bisnis yang kompleks. Fokus pada performance tuning untuk memastikan aplikasi berjalan dengan optimal.',
      systemIntegration: 'System Integration & Debugging',
      systemIntegrationDesc:
        'Terampil dalam melakukan integrasi layanan backend dengan berbagai sistem, debugging permasalahan kompleks, dan optimasi performa sistem. Berpengalaman menggunakan tools seperti Postman untuk API testing, serta melakukan code review untuk memastikan kualitas kode. Terbiasa bekerja dalam tim dengan daily stand-up dan task tracking.',
      fullStack: 'Full Stack Capabilities',
      fullStackDesc:
        'Memiliki kemampuan full stack dengan pengalaman menggunakan PrimeFaces dan JSF untuk pengembangan UI enterprise, serta React dan Next.js untuk aplikasi modern. Kombinasi skill backend dan frontend ini memungkinkan saya untuk memahami keseluruhan alur pengembangan aplikasi dan memastikan integrasi yang seamless.',
      careerJourney: 'Perjalanan Karir',
      careerJourneyText1:
        'Perjalanan karir saya dimulai dari freelance project pada tahun 2021, di mana saya mengembangkan sistem manajemen pondok menggunakan Laravel 8. Pengalaman ini mengajarkan saya pentingnya komunikasi dengan klien dan kemampuan untuk bekerja secara mandiri.',
      careerJourneyText2:
        'Kemudian saya bergabung dengan PT. Infosys Solusi Terpadu pada tahun 2022, di mana saya terlibat dalam pengembangan project BTN Syaria menggunakan Java Spring Boot. Di sini saya belajar pentingnya unit testing dengan JUnit 4 dan Mockito, serta bekerja sama dengan tim machine learning untuk debugging.',
      careerJourneyText3:
        'Di PT FINTEK DIGITAL INDONESIA, saya fokus pada pengembangan API menggunakan Spring Boot dengan teknologi modern seperti RabbitMQ dan Redis. Pengalaman ini memperkuat pemahaman saya tentang message queuing dan caching.',
      careerJourneyText4:
        'Saat ini di PT Solusi Teknologi Sejati, saya mengembangkan berbagai modul ERP yang kompleks, mulai dari modul POS, Inventory, Master, Purchasing, hingga Sales Order. Saya juga mulai mempelajari Go (Golang) untuk project KBPosMobile, yang menunjukkan komitmen saya untuk terus belajar teknologi baru. Pengalaman ini telah mengasah kemampuan saya dalam mengembangkan sistem enterprise yang scalable dan maintainable.',
      commitment: 'Komitmen & Nilai',
      commitmentText:
        'Saya percaya bahwa kode yang baik adalah kode yang mudah dibaca, mudah dirawat, dan mudah diuji. Saya selalu berkomitmen untuk menulis clean code, mengikuti best practices, dan terus belajar teknologi baru. Saya juga menghargai kolaborasi dalam tim, code review yang konstruktif, dan komunikasi yang efektif untuk mencapai tujuan bersama.',
      lookingFor: 'Yang Saya Cari',
      lookingForItems: [
        'Tim atau klien yang membutuhkan engineer yang dapat mengelola fitur atau proyek secara mandiri',
        'Kolaborasi dengan tim yang menghargai kode berkualitas dan maintainable',
        'Kesempatan remote full-time atau freelance project',
      ],
      availabilityStatus: 'Terbuka untuk posisi remote full-time dan proyek freelance.',
      ctaWorkTogether: 'Mari Bekerja Sama →',
    },
    // Skills Page
    skills: {
      title: 'Keahlian',
      subtitle: 'Kompetensi teknis dalam pengembangan backend, manajemen database, frontend modern, dan operasi sistem',
      categories: {
        backend: 'Backend & Programming',
        database: 'Database & Data Processing',
        messaging: 'Messaging, Integration & Infrastructure',
        frontend: 'Frontend Development',
        toolsDevOps: 'Tools & DevOps',
        specialized: 'Specialized Skills',
      },
    },
    // Projects Page
    projects: {
      title: 'Proyek Pilihan (Personal Projects)',
      subtitle: 'Studi kasus personal yang dirancang menyerupai kebutuhan sistem enterprise',
      personalProjectBadge: 'Personal Project – Enterprise-style Implementation',
      problem: 'Masalah',
      solution: 'Solusi',
      impact: 'Dampak',
      viewDemo: 'Demo',
      viewGitHub: 'Lihat di GitHub →',
    },
    // Enterprise POS Case Study
    enterprisePOS: {
      title: 'Enterprise POS System — Data Reliability & System Stability',
      contextTitle: 'Context',
      context: 'Saya bekerja pada sistem POS enterprise yang dikembangkan untuk perusahaan yang bergerak di bidang optik (kacamata, lensa, dan softlens). Sistem ini digunakan untuk mendukung operasional bisnis dan menangani transaksi harian dalam jumlah besar, serta menjadi dasar pelaporan operasional dan keuangan.',
      problems: {
        title: 'Masalah',
        items: [
          'Transaksi POS gagal terbentuk saat jam sibuk',
          'Proses impor data massal sangat lambat (30 menit untuk batch import)',
          'Data yang tidak konsisten berdampak langsung ke laporan bisnis klien',
        ],
      },
      whatIDid: {
        title: 'Apa yang Saya Lakukan',
        items: [
          'Menangani perbaikan dan pemeliharaan backend sistem POS enterprise',
          'Mengoptimalkan query SQL kompleks untuk batch import (15,000+ records)',
          'Mengimplementasikan stored function PostgreSQL untuk validasi data multi-layer',
          'Memastikan data transaksi tervalidasi dan tersimpan dengan benar menggunakan transaction rollback',
          'Mengoptimalkan proses impor data massal dengan indexing dan query tuning',
          'Menangani incident produksi dan memastikan data dapat diproses ulang dengan aman via ActiveMQ',
          'Menggunakan EXPLAIN ANALYZE untuk optimasi query performance',
        ],
      },
      impact: {
        title: 'Dampak',
        items: [
          'Waktu proses impor data berkurang drastis: dari 30 menit menjadi 1 menit (95% improvement)',
          'Sistem POS lebih stabil saat jam operasional tinggi dengan uptime 99.5%+',
          'Data laporan menjadi lebih akurat dengan error rate <0.1%',
          'Berhasil menangani 15,000+ transaksi per hari tanpa error',
          'Kepercayaan klien terhadap sistem meningkat signifikan',
        ],
      },
      technicalImplementation: {
        title: 'Technical Implementation',
        sqlOptimization: {
          title: 'SQL Optimization',
          items: [
            'Stored functions untuk validasi multi-layer',
            'Index optimization untuk query performance',
            'EXPLAIN ANALYZE untuk query tuning',
            'Batch processing untuk 15k+ records',
          ],
        },
        systemReliability: {
          title: 'System Reliability',
          items: [
            'Transaction rollback mechanism',
            'ActiveMQ untuk reprocess failed transactions',
            'Data validation & consistency checks',
            'Error handling & logging',
          ],
        },
      },
    },
    // Experience Page
    experience: {
      title: 'Pengalaman Profesional',
      subtitle: 'Membangun sistem yang kuat dan memberikan solusi yang berdampak',
      context: 'Konteks:',
      responsibilities: 'Tanggung Jawab:',
      achievements: 'Kontribusi Utama / Dampak:',
      skillsUsed: 'Tech Stack:',
    },
    // Contact Page
    contact: {
      title: 'Hubungi Saya',
      subtitle: 'Saya akan senang mendengar dari Anda. Kirimkan pesan dan saya akan merespons sesegera mungkin.',
      name: 'Nama',
      email: 'Email',
      message: 'Pesan',
      namePlaceholder: 'Nama Anda',
      emailPlaceholder: 'email.anda@contoh.com',
      messagePlaceholder: 'Pesan Anda...',
      sendMessage: 'Kirim Pesan',
      sending: 'Mengirim...',
      successMessage: 'Terima kasih! Pesan Anda telah berhasil dikirim.',
      errorMessage: 'Terjadi kesalahan. Silakan coba lagi nanti.',
      otherWays: 'Cara Lain untuk Menghubungi Saya',
    },
    // Footer
    footer: {
      quickLinks: 'Tautan Cepat',
      connect: 'Terhubung',
      allRightsReserved: 'Hak cipta dilindungi.',
    },
    // Common
    common: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      phone: 'Telepon',
      website: 'Website',
      whatsapp: 'WhatsApp',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      title: 'Backend & Database Engineer',
      description:
        'Expertise in Java Spring Boot, Golang, PostgreSQL, SQL Optimization, System Debugging, and Enterprise Applications.',
      contactMe: 'Contact Me',
      downloadCV: 'Download CV',
      metrics: {
        transactions: '15K+',
        transactionsLabel: 'Transactions/Day',
        performance: '95%',
        performanceLabel: 'Performance Gain',
        uptime: '99.5%',
        uptimeLabel: 'Uptime',
        errorRate: '<0.1%',
        errorRateLabel: 'Error Rate',
      },
      metricsContext: 'From enterprise POS system experience.',
      metricsContextLink: 'View case study →',
      scene3dCaption: 'Services & database network — interactive 3D (React Three Fiber)',
      scene3dClickHint: 'Click nodes to navigate',
      cursorCubesCaption: '3D background — React Three Fiber',
      cursorCubesHint: 'Move cursor to see the effect',
    },
    // Freelance Section
    freelance: {
      title: 'Available for Freelance Projects',
      subtitle: 'Specialized in Backend Development, Database Optimization, and Enterprise System Solutions. Let\'s build something great together.',
      getInTouch: 'Get in Touch',
      downloadCV: 'Download CV',
      availability: 'Open to both short-term and long-term projects',
      location: 'Remote work preferred • Available for Indonesian and International clients',
    },
    // About Page
    about: {
      title: 'About Me',
      subtitle: 'Backend Developer passionate about building efficient, scalable, and maintainable backend systems',
      education: 'Education',
      educationDegree: "Bachelor's Degree in Computer and Informatics Engineering Education",
      educationGPA: 'GPA 3.37 | 2014 - 2020',
      educationDescription:
        'During my studies, I learned various aspects of software development, from basic programming concepts to enterprise application development. My main focus was on backend development and database management, which became a strong foundation for my career as a Backend Developer.',
      aboutMe: 'About Me',
      aboutMeText1:
        'I am a Backend Engineer with experience working on enterprise systems that focus on data reliability, system stability, and day-to-day business operations. My work mainly involves maintaining existing systems, fixing bugs, and handling data-related issues in large-scale applications.',
      aboutMeText2:
        'Most of my responsibilities are backend and database–oriented, particularly in business-critical POS systems. I regularly work with data validation, SQL query improvements, and ensuring that transaction and reporting data remain accurate and reliable.',
      aboutMeText3:
        'In addition to feature development, I am often involved in impact analysis for changes within live systems, including data corrections and production incident handling. These experiences have shaped my approach to be more cautious, structured, and focused on long-term system stability. I have experience using Java and Golang in backend contexts and understand frontend as a supporting layer to ensure application flows work as expected. I continue to deepen my understanding of complex, data-intensive backend systems through both professional work and personal projects.',
      skillsCompetence: 'Skills & Competencies',
      backendDev: 'Backend Development',
      backendDevDesc:
        'Specialization in backend application development using Java Spring Boot and Go (Golang). Experienced in building RESTful APIs, developing complex ERP modules, and integrating various backend services. Familiar with working with internal frameworks such as jLeaf based on Spring Boot for enterprise application development.',
      databaseSQL: 'Database & SQL Optimization',
      databaseSQLDesc:
        'Deep expertise in PostgreSQL and MySQL database design, SQL query optimization using EXPLAIN ANALYZE, indexing, and refactoring. Familiar with working with Hibernate/JPA for ORM, as well as writing stored procedures for complex business logic. Focus on performance tuning to ensure applications run optimally.',
      systemIntegration: 'System Integration & Debugging',
      systemIntegrationDesc:
        'Skilled in integrating backend services with various systems, debugging complex issues, and optimizing system performance. Experienced in using tools such as Postman for API testing, as well as conducting code reviews to ensure code quality. Familiar with working in teams with daily stand-ups and task tracking.',
      fullStack: 'Full Stack Capabilities',
      fullStackDesc:
        'Have full stack capabilities with experience using PrimeFaces and JSF for enterprise UI development, as well as React and Next.js for modern applications. This combination of backend and frontend skills allows me to understand the entire application development flow and ensure seamless integration.',
      careerJourney: 'Career Journey',
      careerJourneyText1:
        'My career journey started from a freelance project in 2021, where I developed a management system for a boarding house using Laravel 8. This experience taught me the importance of communication with clients and the ability to work independently.',
      careerJourneyText2:
        'Then I joined PT. Infosys Solusi Terpadu in 2022, where I was involved in developing the BTN Syaria project using Java Spring Boot. Here I learned the importance of unit testing with JUnit 4 and Mockito, as well as collaborating with the machine learning team for debugging.',
      careerJourneyText3:
        'At PT FINTEK DIGITAL INDONESIA, I focused on API development using Spring Boot with modern technologies such as RabbitMQ and Redis. This experience strengthened my understanding of message queuing and caching.',
      careerJourneyText4:
        'Currently at PT Solusi Teknologi Sejati, I develop various complex ERP modules, from POS, Inventory, Master, Purchasing, to Sales Order modules. I also started learning Go (Golang) for the KBPosMobile project, which shows my commitment to continuously learning new technologies. This experience has sharpened my ability to develop scalable and maintainable enterprise systems.',
      commitment: 'Commitment & Values',
      commitmentText:
        'I believe that good code is code that is easy to read, easy to maintain, and easy to test. I am always committed to writing clean code, following best practices, and continuously learning new technologies. I also value team collaboration, constructive code reviews, and effective communication to achieve common goals.',
      lookingFor: "What I'm Looking For",
      lookingForItems: [
        'Teams or clients who need a reliable engineer who can own complete features or projects',
        'Collaboration with teams that value quality, maintainable code',
        'Remote full-time positions or freelance project opportunities',
      ],
      availabilityStatus: 'Currently available for remote full-time and freelance projects.',
      ctaWorkTogether: "Let's Work Together →",
    },
    // Skills Page
    skills: {
      title: 'Skills',
      subtitle: 'Technical competencies across backend development, database management, modern frontend, and system operations',
      categories: {
        backend: 'Backend & Programming',
        database: 'Database & Data Processing',
        messaging: 'Messaging, Integration & Infrastructure',
        frontend: 'Frontend Development',
        toolsDevOps: 'Tools & DevOps',
        specialized: 'Specialized Skills',
      },
    },
    // Projects Page
    projects: {
      title: 'Selected Projects (Personal Projects)',
      subtitle: 'Personal case studies designed to resemble enterprise system requirements',
      personalProjectBadge: 'Personal Project – Enterprise-style Implementation',
      problem: 'Problem',
      solution: 'Solution',
      impact: 'Impact',
      viewDemo: 'Demo',
      viewGitHub: 'View on GitHub →',
    },
    // Enterprise POS Case Study
    enterprisePOS: {
      title: 'Enterprise POS System — Data Reliability & System Stability',
      contextTitle: 'Context',
      context: 'I worked on an enterprise POS system developed for a company in the optical industry (glasses, lenses, and soft contact lenses). The system supports business operations, processes high volumes of daily transactions, and serves as the foundation for operational and financial reporting.',
      problems: {
        title: 'Problems',
        items: [
          'POS transactions failed during peak hours',
          'Bulk data import processes were extremely slow (30 minutes for batch import)',
          'Inconsistent data directly affected business reports',
        ],
      },
      whatIDid: {
        title: 'What I Did',
        items: [
          'Maintained and improved the backend of the enterprise POS system',
          'Optimized complex SQL queries for batch import (15,000+ records)',
          'Implemented PostgreSQL stored functions for multi-layer data validation',
          'Ensured transaction data was properly validated and stored using transaction rollback',
          'Optimized bulk data import with indexing and query tuning',
          'Handled production incidents and safely reprocessed failed data via ActiveMQ',
          'Used EXPLAIN ANALYZE for query performance optimization',
        ],
      },
      impact: {
        title: 'Impact',
        items: [
          'Data import time drastically reduced: from 30 minutes to 1 minute (95% improvement)',
          'POS system became more stable during peak hours with 99.5%+ uptime',
          'Business reports became more accurate with <0.1% error rate',
          'Successfully handled 15,000+ transactions per day without errors',
          'Client confidence in the system significantly increased',
        ],
      },
      technicalImplementation: {
        title: 'Technical Implementation',
        sqlOptimization: {
          title: 'SQL Optimization',
          items: [
            'Stored functions for multi-layer validation',
            'Index optimization for query performance',
            'EXPLAIN ANALYZE for query tuning',
            'Batch processing for 15k+ records',
          ],
        },
        systemReliability: {
          title: 'System Reliability',
          items: [
            'Transaction rollback mechanism',
            'ActiveMQ for reprocessing failed transactions',
            'Data validation & consistency checks',
            'Error handling & logging',
          ],
        },
      },
    },
    // Experience Page
    experience: {
      title: 'Professional Experience',
      subtitle: 'Building robust systems and delivering impactful solutions',
      context: 'Context:',
      responsibilities: 'Responsibilities:',
      achievements: 'Key Contributions / Impact:',
      skillsUsed: 'Tech Stack:',
    },
    // Contact Page
    contact: {
      title: 'Get In Touch',
      subtitle: "I'd love to hear from you. Send me a message and I'll respond as soon as possible.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your.email@example.com',
      messagePlaceholder: 'Your message...',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Thank you! Your message has been sent successfully.',
      errorMessage: 'Something went wrong. Please try again later.',
      otherWays: 'Other Ways to Reach Me',
    },
    // Footer
    footer: {
      quickLinks: 'Quick Links',
      connect: 'Connect',
      allRightsReserved: 'All rights reserved.',
    },
    // Common
    common: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      phone: 'Phone',
      website: 'Website',
      whatsapp: 'WhatsApp',
    },
  },
}

