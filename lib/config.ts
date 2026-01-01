// Configuration file untuk konten portfolio
// Semua data bisa diubah via .env file

export const siteConfig = {
  // Personal Information
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Muhammad Rasyid Hidayat',
  title: process.env.NEXT_PUBLIC_SITE_TITLE || 'Backend & Database Engineer',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Expertise in Java Spring Boot, Golang, PostgreSQL, SQL Optimization, System Debugging, and Enterprise Applications.',

  // Contact Information
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'rasyidh55@gmail.com',
    linkedin: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || 'https://www.linkedin.com/in/mrasyid-hidayat-70858a236/',
    github: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://github.com/Mrasyid-dev',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '', // Optional
    website: process.env.NEXT_PUBLIC_CONTACT_WEBSITE || '', // Optional
  },

  // Profile Image
  profileImage: process.env.NEXT_PUBLIC_PROFILE_IMAGE || '/profile.jpg',
  cvFile: process.env.NEXT_PUBLIC_CV_FILE || '/cv.pdf',

  // Social Media (optional)
  social: {
    twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER || '',
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || '',
    youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || '',
  },
}

