import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Muhammad Rasyid Hidayat',
  description: 'Get in touch with Muhammad Rasyid Hidayat. Send a message or connect via email, LinkedIn, or GitHub.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

