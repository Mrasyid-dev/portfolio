import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/lib/config'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: `${siteConfig.name} — Portfolio`,
  description: `${siteConfig.title} | ${siteConfig.description}`,
  keywords: ['Backend Engineer', 'Database Engineer', 'Java', 'Spring Boot', 'PostgreSQL', 'Portfolio'],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — Portfolio`,
    description: `${siteConfig.title} | ${siteConfig.description}`,
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Portfolio`,
    description: `${siteConfig.title} | ${siteConfig.description}`,
  },
}

import { ThemeProvider } from '@/components/ThemeProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

