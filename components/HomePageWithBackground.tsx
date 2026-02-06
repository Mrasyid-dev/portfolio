'use client'

import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import EnterpriseCaseStudy from '@/components/EnterpriseCaseStudy'
import FreelanceSection from '@/components/FreelanceSection'
import CursorCubesBackground from '@/components/CursorCubesBackground'

export default function HomePageWithBackground() {
  const mouseRef = useRef({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const w = window.innerWidth
    const h = window.innerHeight
    mouseRef.current.x = (e.clientX / w) * 2 - 1
    mouseRef.current.y = -(e.clientY / h) * 2 + 1
  }

  const onPointerLeave = () => {
    mouseRef.current.x = 0
    mouseRef.current.y = 0
  }

  const fixedBackground =
    mounted &&
    typeof document !== 'undefined' &&
    createPortal(
      <CursorCubesBackground mouseRef={mouseRef} fixed />,
      document.body
    )

  return (
    <>
      {fixedBackground}
      {/* Konten scroll di atas background — pointer dipakai untuk update posisi cursor 3D */}
      <div
        className="relative z-10 min-h-screen"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <Navbar />
        <HeroSection />
        <FeaturedProjects transparent />
        <EnterpriseCaseStudy transparent />
        <FreelanceSection transparent />
        <Footer transparent />
      </div>
    </>
  )
}
