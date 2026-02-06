'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Float, Html } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import * as THREE from 'three'
import { useLanguage } from '@/contexts/LanguageContext'

// Node positions: center (database/core) + surrounding nodes (services/APIs)
const NODE_POSITIONS: [number, number, number][] = [
  [0, 0, 0],       // center → Beranda
  [1.2, 0.8, 0.3],
  [-1, 0.6, -0.2],
  [0.5, -1, 0.4],
  [-0.8, -0.7, 0.2],
  [1, -0.3, -0.6],
  [-0.4, 1, -0.3],
]

// Mapping: index 0 = Beranda, 1–5 = Tentang→Kontak, 6 = Kontak (duplicate). Order matches menu UX.
const NODE_PATHS: string[] = ['/', '/about', '/skills', '/projects', '/experience', '/contact', '/contact']
const NODE_NAV_KEYS: (keyof { home: string; about: string; skills: string; projects: string; experience: string; contact: string })[] = [
  'home', 'about', 'skills', 'projects', 'experience', 'contact', 'contact',
]

// Connections: center (0) to all others; a few outer-to-outer for "mesh" feel
const CONNECTIONS: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 2], [2, 4], [3, 5], [1, 6],
]

// Warna per menu: Beranda, Tentang, Keahlian, Proyek, Pengalaman, Kontak (index 6 pakai sama dengan Kontak)
const NODE_COLORS = [
  '#38bdf8', // Beranda – sky/cyan
  '#818cf8', // Tentang – indigo
  '#34d399', // Keahlian – emerald
  '#fbbf24', // Proyek – amber
  '#a78bfa', // Pengalaman – violet
  '#f472b6', // Kontak – pink
  '#f472b6', // Kontak (duplikat)
]
const NODE_COLORS_HOVER = [
  '#7dd3fc',
  '#a5b4fc',
  '#6ee7b7',
  '#fcd34d',
  '#c4b5fd',
  '#f9a8d4',
  '#f9a8d4',
]
const LINE_COLOR = '#334e68'

// Amplitudo drift per bola (masing-masing bergerak sedikit)
const DRIFT_AMPLITUDE = 0.18
const DRIFT_SPEED = 0.8

/** Posisi node di waktu t (rumus sama untuk bola dan garis) */
function getNodePositionAtTime(nodeIndex: number, t: number): [number, number, number] {
  const base = NODE_POSITIONS[nodeIndex]
  const phase = nodeIndex * 1.2
  const isCenter = nodeIndex === 0
  const amp = isCenter ? DRIFT_AMPLITUDE * 0.6 : DRIFT_AMPLITUDE
  const dx = Math.sin(t * DRIFT_SPEED + phase) * amp
  const dy = Math.cos(t * DRIFT_SPEED * 0.7 + phase * 1.3) * amp
  const dz = Math.sin(t * DRIFT_SPEED * 0.5 + phase * 0.8) * (amp * 0.8)
  return [base[0] + dx, base[1] + dy, base[2] + dz]
}

function NetworkNode({
  position: basePosition,
  isCenter,
  path,
  label,
  color,
  colorHover,
  nodeIndex,
}: {
  position: [number, number, number]
  isCenter: boolean
  path: string
  label: string
  color: string
  colorHover: string
  nodeIndex: number
}) {
  const router = useRouter()
  const meshRef = useRef<THREE.Mesh>(null!)
  const movingRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)
  const baseScale = isCenter ? 0.25 : 0.12
  const scale = hovered ? baseScale * 1.2 : baseScale
  const tooltipOffset = isCenter ? 0.55 : 0.35
  useFrame((state) => {
    if (!movingRef.current) return
    const t = state.clock.getElapsedTime()
    const [x, y, z] = getNodePositionAtTime(nodeIndex, t)
    movingRef.current.position.set(x, y, z)
  })

  const glowIntensity = hovered ? 0.5 : 0.25
  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.25}>
      <group
        onClick={(e) => {
          e.stopPropagation()
          router.push(path)
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = 'auto'
        }}
      >
        <group ref={movingRef}>
          {/* Glow halo (neon) – sphere transparan di belakang */}
          <mesh position={[0, 0, 0]} scale={baseScale * 1.45}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={glowIntensity}
              depthWrite={false}
            />
          </mesh>
          {/* Bola utama */}
          <mesh ref={meshRef} position={[0, 0, 0]} scale={scale}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
              color={hovered ? colorHover : color}
              roughness={0.2}
              metalness={0.5}
              emissive={color}
              emissiveIntensity={hovered ? 0.7 : 0.5}
              toneMapped={false}
            />
          </mesh>
          {hovered && (
            <Html
              position={[0, tooltipOffset, 0]}
              center
              distanceFactor={8}
              style={{
                pointerEvents: 'none',
                userSelect: 'none',
                whiteSpace: 'nowrap',
                fontSize: '12px',
                fontWeight: 600,
                color: '#f8fafc',
                background: 'rgba(15, 23, 42, 0.9)',
                padding: '4px 8px',
                borderRadius: '6px',
                border: '1px solid rgba(148, 163, 184, 0.3)',
              }}
            >
              {label}
            </Html>
          )}
        </group>
      </group>
    </Float>
  )
}

function ConnectionLines() {
  const lineRef = useRef<THREE.LineSegments>(null!)
  const positionsArray = useRef(new Float32Array(CONNECTIONS.length * 2 * 3)).current

  useFrame((state) => {
    if (!lineRef.current?.geometry) return
    const t = state.clock.getElapsedTime()
    let idx = 0
    for (const [i, j] of CONNECTIONS) {
      const p0 = getNodePositionAtTime(i, t)
      const p1 = getNodePositionAtTime(j, t)
      positionsArray[idx++] = p0[0]
      positionsArray[idx++] = p0[1]
      positionsArray[idx++] = p0[2]
      positionsArray[idx++] = p1[0]
      positionsArray[idx++] = p1[1]
      positionsArray[idx++] = p1[2]
    }
    const attr = lineRef.current.geometry.attributes.position as THREE.BufferAttribute
    attr.needsUpdate = true
  })

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={CONNECTIONS.length * 2}
          array={positionsArray}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={LINE_COLOR} />
    </lineSegments>
  )
}

function RotatingNetwork() {
  const groupRef = useRef<THREE.Group>(null!)
  const { t } = useLanguage()
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15
    }
  })
  return (
    <group ref={groupRef} scale={2.1}>
      <ConnectionLines />
      {NODE_POSITIONS.map((pos, i) => (
        <NetworkNode
          key={i}
          position={pos}
          isCenter={i === 0}
          path={NODE_PATHS[i]}
          label={t.nav[NODE_NAV_KEYS[i]]}
          color={NODE_COLORS[i]}
          colorHover={NODE_COLORS_HOVER[i]}
          nodeIndex={i}
        />
      ))}
    </group>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-full min-h-[480px]">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 7.2]} fov={52} />
        <ambientLight intensity={0.35} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#334e68" />
        <RotatingNetwork />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
