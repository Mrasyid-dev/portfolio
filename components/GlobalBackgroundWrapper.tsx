'use client'

import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import CursorCubesBackground from '@/components/CursorCubesBackground'

export default function GlobalBackgroundWrapper({
  children,
}: {
  children: React.ReactNode
}) {
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
      <div
        className="relative z-10 min-h-screen"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        {children}
      </div>
    </>
  )
}
