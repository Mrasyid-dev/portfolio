'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * 0.2
    meshRef.current.rotation.y = time * 0.3
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={2.5}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#486581"
          attach="material"
          distort={0.4} // Strength, 0 disables the effect (default=1)
          speed={2} // Speed (default=1)
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

function GridBackground() {
    return (
        <group rotation={[Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <gridHelper args={[20, 20, 0x102a43, 0x102a43]} position={[0, 0, 0]} />
        </group>
    )
}

export default function Scene3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#blue" />
        
        <AnimatedShape />
        {/* <GridBackground /> */}
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
