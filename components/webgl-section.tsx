"use client"

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingGrid({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const gridRef = useRef<THREE.Points>(null)
  const { viewport } = useThree()

  const [positions, basePositions] = useMemo(() => {
    const gridSize = 20
    const spacing = 0.8
    const count = gridSize * gridSize
    const positions = new Float32Array(count * 3)
    const basePositions = new Float32Array(count * 3)

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const index = (i * gridSize + j) * 3
        const x = (i - gridSize / 2) * spacing
        const y = (j - gridSize / 2) * spacing
        const z = -2

        positions[index] = x
        positions[index + 1] = y
        positions[index + 2] = z
        
        basePositions[index] = x
        basePositions[index + 1] = y
        basePositions[index + 2] = z
      }
    }

    return [positions, basePositions]
  }, [])

  useFrame((state) => {
    if (!gridRef.current) return

    const positionAttribute = gridRef.current.geometry.getAttribute('position')
    const positions = positionAttribute.array as Float32Array
    const time = state.clock.elapsedTime

    for (let i = 0; i < positions.length / 3; i++) {
      const baseX = basePositions[i * 3]
      const baseY = basePositions[i * 3 + 1]
      
      // Wave animation
      const waveX = Math.sin(time * 0.3 + baseX * 0.5) * 0.1
      const waveY = Math.cos(time * 0.3 + baseY * 0.5) * 0.1
      const waveZ = Math.sin(time * 0.5 + baseX * 0.3 + baseY * 0.3) * 0.3
      
      // Mouse influence
      const dx = mouse.current.x * viewport.width * 0.3 - baseX
      const dy = mouse.current.y * viewport.height * 0.3 - baseY
      const distance = Math.sqrt(dx * dx + dy * dy)
      const mouseInfluence = Math.max(0, 1 - distance / 5)
      
      positions[i * 3] = baseX + waveX
      positions[i * 3 + 1] = baseY + waveY
      positions[i * 3 + 2] = basePositions[i * 3 + 2] + waveZ + mouseInfluence * 0.5
    }

    positionAttribute.needsUpdate = true
  })

  return (
    <points ref={gridRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#4a7ab8"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function GlowingSphere() {
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!sphereRef.current) return
    sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    sphereRef.current.rotation.y = state.clock.elapsedTime * 0.1
  })

  return (
    <mesh ref={sphereRef} position={[3, 0, -3]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial
        color="#3a6aa8"
        transparent
        opacity={0.05}
        wireframe
      />
    </mesh>
  )
}

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (reducedMotion) return

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [reducedMotion])

  return (
    <>
      <FloatingGrid mouse={mouse} />
      {!reducedMotion && <GlowingSphere />}
      <ambientLight intensity={0.5} />
    </>
  )
}

export function WebGLSection() {
  const [mounted, setMounted] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  if (!mounted) {
    return (
      <div className="h-full w-full bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
    )
  }

  return (
    <div className="h-full w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ position: 'absolute', inset: 0 }}
        dpr={[1, 1.5]}
      >
        <Scene reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
