'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Edges } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

const GRID_SIZE = 8
const SPACING = 1.5
const MOUSE_INFLUENCE = 4
const BASE_SCALE = 0.32
const HOVER_SCALE = 0.8
const BLUE = new THREE.Color('#60a5fa')
const PURPLE = new THREE.Color('#c084fc')

function Cube({
  position,
  mouseRef,
  index,
  total,
}: {
  position: [number, number, number]
  mouseRef: React.MutableRefObject<{ x: number; y: number }>
  index: number
  total: number
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  const targetScale = useRef(BASE_SCALE)
  const currentScale = useRef(BASE_SCALE)

  const [px, , pz] = position
  const edgeColor = useMemo(() => BLUE.clone().lerp(PURPLE, index / Math.max(1, total)), [index, total])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    const mx = mouseRef.current.x * MOUSE_INFLUENCE
    const mz = mouseRef.current.y * MOUSE_INFLUENCE
    const dist = Math.sqrt((px - mx) ** 2 + (pz - mz) ** 2)
    const influence = Math.max(0, 1 - dist / 3.2)
    targetScale.current = BASE_SCALE + influence * (HOVER_SCALE - BASE_SCALE)
    currentScale.current += (targetScale.current - currentScale.current) * delta * 8
    groupRef.current.scale.setScalar(currentScale.current)
  })

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.92} />
        <Edges color={edgeColor} scale={1.02} threshold={15} />
      </mesh>
    </group>
  )
}

function Stars() {
  const count = 800
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 40
      pos[i + 1] = (Math.random() - 0.5) * 40
      pos[i + 2] = (Math.random() - 0.5) * 40
    }
    return pos
  }, [])
  const colors = useMemo(() => {
    const col = new Float32Array(count * 3)
    const c1 = new THREE.Color('#60a5fa')
    const c2 = new THREE.Color('#a855f7')
    for (let i = 0; i < count; i++) {
      const t = Math.random()
      const c = c1.clone().lerp(c2, t)
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return col
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

function CubesGrid({ mouseRef }: { mouseRef: React.MutableRefObject<{ x: number; y: number }> }) {
  const positions = useMemo(() => {
    const pos: [number, number, number][] = []
    const half = (GRID_SIZE * SPACING) / 2
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        const x = -half + i * SPACING + (j % 2) * 0.15
        const z = -half + j * SPACING + (i % 2) * 0.15
        pos.push([x, 0, z])
      }
    }
    return pos
  }, [])

  return (
    <group rotation={[0.22, 0.45, 0]}>
      <Stars />
      {positions.map((pos, i) => (
        <Cube key={i} position={pos} mouseRef={mouseRef} index={i} total={positions.length} />
      ))}
    </group>
  )
}

export type MouseRef = React.MutableRefObject<{ x: number; y: number }>

type CursorCubesBackgroundProps = {
  mouseRef?: MouseRef
  fixed?: boolean
}

export default function CursorCubesBackground({ mouseRef: externalMouseRef, fixed = false }: CursorCubesBackgroundProps) {
  const internalMouseRef = useRef({ x: 0, y: 0 })
  const mouseRef = externalMouseRef ?? internalMouseRef

  return (
    <div
      className={fixed ? 'fixed inset-0 w-full h-full -z-[1]' : 'absolute inset-0 w-full h-full'}
      style={{ pointerEvents: 'none' }}
    >
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 4, 8], fov: 50 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.08} />
        <pointLight position={[8, 8, 8]} intensity={0.3} color="#60a5fa" />
        <pointLight position={[-8, 4, -8]} intensity={0.15} color="#a855f7" />
        <CubesGrid mouseRef={mouseRef} />
      </Canvas>
    </div>
  )
}
