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
      title: 'AI-Native Backend Engineer & System Architect',
      description:
        'Menjembatani keandalan skala Enterprise dan kecepatan Startup. Saya memanfaatkan workflow pengembangan berbasis AI untuk merancang dan membangun sistem Go, Java, dan PostgreSQL berkinerja tinggi 2x lebih cepat—tanpa kompromi pada stabilitas.',
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
      title: 'Bangun dengan Benar. 2x Lebih Cepat.',
      subtitle: 'Pendekatan engineer AI-Native saya berdampak langsung pada efisiensi biaya dan waktu yang signifikan untuk bisnis Anda tanpa menumpuk technical debt. Baik Anda startup internasional yang membutuhkan iterasi SaaS yang cepat maupun enterprise yang menuntut arsitektur high-concurrency, mari berkolaborasi.',
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
      biography: 'Biografi Profesional',
      aboutMeText1:
        'Fondasi engineering saya ditempa melalui sistem Enterprise Optical POS yang kompleks, di mana memproses 15.000+ transaksi harian dengan error rate <0.1% adalah standar dasar, bukan sekadar tujuan. Hari ini, saya telah bertransformasi menjadi seorang AI-Native Engineer, mendefinisikan ulang kecepatan dalam proses pengembangan software modern.',
      aboutMeText2:
        'Dengan mengintegrasikan workflow AI tingkat lanjut seperti Antygravity dan Cursor ke dalam proses development inti saya, saya membangun platform SaaS terukur (BONBON) dan digital dashboard berperforma tinggi (Qalam) dalam waktu yang jauh lebih singkat.',
      aboutMeText3:
        'Walaupun keahlian inti saya terletak pada arsitektur backend yang kokoh dengan Go dan Java, saya menggunakan kemampuan AI-agent untuk menjembatani pengembangan sisi frontend—menghasilkan antarmuka yang dipoles dan responsif di React dan Next.js dengan presisi yang sama seperti sistem database saya. Filosofi kerja saya dibangun di atas dua pilar: Kecepatan Pengiriman (Speed of Delivery) yang tak kenal kompromi yang didukung oleh AI, dan Keandalan Sistem (System Reliability) yang berakar dari pengalaman bertahun-tahun di pengembangan arsitektur enterprise backend.',
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
      title: 'Keahlian & Tools',
      subtitle: 'Kompetensi teknis yang mencakup arsitektur backend, manajemen database, dan workflow AI-Native',
      categories: {
        backend: 'Backend & Programming',
        database: 'Database & Data Processing',
        messaging: 'Messaging & Integration',
        frontend: 'Mobile & Web Frontend',
        toolsDevOps: 'Tools & DevOps',
        specialized: 'Specialized Skills',
        aiWorkflow: 'AI-Native Workflow',
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
      title: 'Enterprise POS System — High-Volume Point of Sale Architecture',
      contextTitle: 'Konteks',
      context: 'Saya pernah menangani sistem POS enterprise yang dikembangkan untuk perusahaan yang bergerak di bidang industri optik (kacamata, lensa, dan soft contact lenses). Sistem ini mendukung kegiatan operasional bisnis secara luas, memproses berbagai volume transaksi harian tingkat tinggi, serta menjadi dasar pelaporan operasional dan finansial inti.',
      problems: {
        title: 'Masalah',
        items: [
          'Transaksi POS reguler sering kali gagal di luar dugaan pada saat jam operasional padat',
          'Proses import penarikan data secara massal berlangsung amat lambat (30 menit spesifik untuk batch besar)',
          'Munculnya kendala dari in-konsistensi data yang dapat memberatkan akurasi dan kredibilitas laporan bisnis internal',
        ],
      },
      whatIDid: {
        title: 'Apa yang Saya Lakukan',
        items: [
          'Mendominasi manajemen arsitektur scaling serta sistem orkestrasi di infrastruktur POS berskala mission-critical',
          'Intens memanfaatkan tools diagnostik AI-assisted dalam percepatan analisis debugging logic yang menimbun',
          'Mengeksekusi langkah agresif optimasi PostgreSQL query secara mendalam buat meminimalisir waktu penundaan latensi memproses info',
          'Mengimplementasikan stored functions murni PostgreSQL untuk tahap-demi-tahap validasi check data berlapis',
          'Melindungi integritas proses transaksi valid melalui pengaturan mechanism transaction rollback',
        ],
      },
      impact: {
        title: 'Dampak',
        items: [
          'Tingkat latensi di area pemrosesan import database berkurang tajam sampai dengan 95% secara empiris (Semula waktu 30 Menit ke kisaran 1 Menit saja)',
          'Ketahanan dari stabilitas infrastruktur mampu menjaga pemrosesan secara kontinu untuk minimal 15.000 transaksi tiap harinya',
          'Mencatatkan dan memastikan rasio minimal error selalu tercapai secara stabil di ukuran statis <0.1% untuk bisnis report fundamental',
          'Kenaikan yang fantastis terhadap taraf kepuasan keyakinan dari perspektif klien sistem',
        ],
      },
      technicalImplementation: {
        title: 'Implementasi Teknis',
        sqlOptimization: {
          title: 'Optimasi SQL',
          items: [
            'Proses indexing & tuning query mutakhir berbasis support AI workflow development tool',
            'Penggunaan efisien pada stored function guna sinkronasi validasi proses data berlapis',
            'Eksploitasi fungsi bawaan EXPLAIN ANALYZE demi investigasi pencarian sebab query mandek',
            'Kapasitas komputasi bulk batch process untuk menjangkau skala pelaporan 15k+ records lebih sekuensial',
          ],
        },
        systemReliability: {
          title: 'Keandalan Sistem',
          items: [
            'Struktur perlindungan pertahanan untuk pembatalan eksekusi database melalui mekanisme Transaction rollback',
            'Mengerahkan platform service ActiveMQ pada penuntasan resiko error lewat fitur asinkron re-process transaction',
            'Sistem pengecekan tahap akhir integrasi kestabilan validasi & sinkronisasi data berlapis',
            'Log error tracking sistem berformat workflow AI-driven',
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
      title: 'AI-Native Backend Engineer & System Architect',
      description:
        'Bridging the gap between Enterprise-grade reliability and startup velocity. I leverage AI-assisted development workflows to architect and ship high-performance Go, Java, and PostgreSQL systems 2x faster—with zero compromise on stability.',
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
      title: 'Build it Right. Build it 2x Faster.',
      subtitle: 'My AI-Native engineering approach translates directly into significant cost and time efficiency for your business without accumulating technical debt. Whether you are an international startup needing rapid SaaS delivery or an enterprise demanding high-concurrency architecture, let\'s collaborate.',
      getInTouch: 'Let\'s Build Together',
      downloadCV: 'Schedule a Tech Chat',
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
      biography: 'Professional Biography',
      aboutMeText1:
        'My engineering foundation was forged in the trenches of complex Enterprise Optical POS systems, where processing 15,000+ daily transactions with a <0.1% error rate is the baseline, not the goal. Today, I have evolved into an AI-Native Engineer, completely redefining how modern software is built and shipped.',
      aboutMeText2:
        'By integrating advanced AI-agent workflows like Antygravity and Cursor into my core development process, I build scalable SaaS platforms (BONBON) and high-performance digital dashboards (Qalam) at unprecedented speeds.',
      aboutMeText3:
        'While my core expertise lies in robust backend architecture with Go and Java, I leverage AI-agent workflows to bridge the gap in frontend development—delivering polished, responsive interfaces in React and Next.js with the same precision as my database systems. My philosophy is built on two pillars: relentless Speed of Delivery powered by AI, and uncompromising System Reliability grounded in years of enterprise experience.',
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
      title: 'Skills & Tools',
      subtitle: 'Technical competencies across backend architecture, database management, and AI-Native workflows',
      categories: {
        backend: 'Backend & Programming',
        database: 'Database & Data Processing',
        messaging: 'Messaging & Integration',
        frontend: 'Mobile & Web Frontend',
        toolsDevOps: 'Tools & DevOps',
        specialized: 'Specialized Skills',
        aiWorkflow: 'AI-Native Workflow',
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
      title: 'Enterprise POS System — High-Volume Point of Sale Architecture',
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
          'Masterminded the scaling and orchestration of a mission-critical POS infrastructure',
          'Leveraged AI-assisted diagnostic tools to accelerate complex debugging',
          'Executed advanced PostgreSQL query optimizations minimizing processing latency',
          'Implemented PostgreSQL stored functions for multi-layer data validation',
          'Ensured transaction data was properly validated using transaction rollback',
        ],
      },
      impact: {
        title: 'Impact',
        items: [
          'Data import processing latency reduced organically by 95% (30 min to 1 min)',
          'High stability maintained processing 15,000+ daily transactions',
          'Achieved a strict <0.1% error rate on business-critical reports',
          'Client confidence and system resilience significantly increased',
        ],
      },
      technicalImplementation: {
        title: 'Technical Implementation',
        sqlOptimization: {
          title: 'SQL Optimization',
          items: [
            'AI-assisted query tuning and indexing',
            'Stored functions for multi-layer validation',
            'EXPLAIN ANALYZE for query debugging',
            'Batch processing for 15k+ records',
          ],
        },
        systemReliability: {
          title: 'System Reliability',
          items: [
            'Transaction rollback mechanism',
            'ActiveMQ for reprocessing failed transactions',
            'Data validation & consistency checks',
            'Error handling & AI-driven logging',
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

