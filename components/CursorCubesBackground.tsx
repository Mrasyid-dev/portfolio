'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Edges } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

const GRID_SIZE = 20
const SPACING = 1.1
const MOUSE_INFLUENCE = 5
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
  const targetY = useRef(0)
  const currentY = useRef(0)

  const [px, py, pz] = position
  const edgeColor = useMemo(() => BLUE.clone().lerp(PURPLE, index / Math.max(1, total)), [index, total])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    const mx = mouseRef.current.x * MOUSE_INFLUENCE
    const mz = -mouseRef.current.y * MOUSE_INFLUENCE
    const dist = Math.sqrt((px - mx) ** 2 + (pz - mz) ** 2)
    
    // Gaussian-like falloff for smoother "wave"
    const maxRise = 1.0
    const radius = 3.2
    
    // Influence is 1.0 at center, 0.0 at radius
    const rawInfluence = Math.max(0, 1 - Math.min(1, dist / radius))
    
    // Apply a curve to make the edge sharper/smoother
    const influence = Math.pow(rawInfluence, 2)
    
    // Target Y rises with influence
    targetY.current = py + influence * maxRise

    // Target Scale grows from 0 to 1 with influence
    // Small threshold to keep them completely invisible when far
    const targetScale = influence < 0.01 ? 0 : influence
    
    // Smooth interpolation for Y
    currentY.current += (targetY.current - currentY.current) * delta * 12
    
    // Smooth interpolation for Scale
    const currentScale = groupRef.current.scale.x
    const newScale = currentScale + (targetScale - currentScale) * delta * 10

    groupRef.current.position.y = currentY.current
    groupRef.current.scale.setScalar(newScale)
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
    <group rotation={[0.4, 0, 0]} position={[0, -2, 0]}>
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
  const internalMouseRef = useRef({ x: 9999, y: 9999 })
  const mouseRef = externalMouseRef ?? internalMouseRef

  return (
    <div
      className={fixed ? 'fixed inset-0 w-full h-full -z-[1]' : 'absolute inset-0 w-full h-full'}
      style={{ pointerEvents: 'none' }}
    >
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 8, 12], fov: 45 }}
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
