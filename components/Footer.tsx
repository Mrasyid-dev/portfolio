import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-gray-300">{siteConfig.description}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              {/* Kontak info diambil dari .env file */}
              <li>
                Email:{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white underline">
                  {siteConfig.contact.email}
                </a>
              </li>
              {siteConfig.contact.linkedin && (
                <li>
                  LinkedIn:{' '}
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline"
                  >
                    {siteConfig.contact.linkedin.replace('https://', '')}
                  </a>
                </li>
              )}
              {siteConfig.contact.github && (
                <li>
                  GitHub:{' '}
                  <a
                    href={siteConfig.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline"
                  >
                    {siteConfig.contact.github.replace('https://', '')}
                  </a>
                </li>
              )}
              {siteConfig.contact.phone && (
                <li>
                  Phone:{' '}
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white underline">
                    {siteConfig.contact.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

