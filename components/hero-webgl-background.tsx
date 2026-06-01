"use client"

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingParticles({ count = 800, mouse }: { count?: number; mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const mesh = useRef<THREE.Points>(null)
  const { viewport } = useThree()
  
  const [positions, velocities, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    const accentColor = new THREE.Color('#3b82f6')
    const darkColor = new THREE.Color('#1e293b')
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.008
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.008
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.003
      
      // Mix of accent and dark particles
      const color = Math.random() > 0.8 ? accentColor : darkColor
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    return [positions, velocities, colors]
  }, [count])

  const sizes = useMemo(() => {
    const sizes = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      sizes[i] = Math.random() * 3 + 0.5
    }
    return sizes
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    
    const positionAttribute = mesh.current.geometry.getAttribute('position')
    const positions = positionAttribute.array as Float32Array
    const time = state.clock.elapsedTime
    
    for (let i = 0; i < count; i++) {
      // Base movement with wave
      positions[i * 3] += velocities[i * 3] + Math.sin(time * 0.5 + i * 0.1) * 0.002
      positions[i * 3 + 1] += velocities[i * 3 + 1] + Math.cos(time * 0.3 + i * 0.05) * 0.002
      positions[i * 3 + 2] += velocities[i * 3 + 2]
      
      // Mouse influence
      const dx = mouse.current.x * viewport.width * 0.5 - positions[i * 3]
      const dy = mouse.current.y * viewport.height * 0.5 - positions[i * 3 + 1]
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 4) {
        positions[i * 3] -= dx * 0.002
        positions[i * 3 + 1] -= dy * 0.002
      }
      
      // Boundary wrapping
      if (positions[i * 3] > 15) positions[i * 3] = -15
      if (positions[i * 3] < -15) positions[i * 3] = 15
      if (positions[i * 3 + 1] > 15) positions[i * 3 + 1] = -15
      if (positions[i * 3 + 1] < -15) positions[i * 3 + 1] = 15
    }
    
    positionAttribute.needsUpdate = true
    mesh.current.rotation.z = time * 0.02
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function GlowingOrbs({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null)
  
  const orbs = useMemo(() => {
    return [
      { position: [-6, 3, -5], scale: 2, color: '#3b82f6', speed: 0.3 },
      { position: [8, -4, -8], scale: 3, color: '#06b6d4', speed: 0.2 },
      { position: [-3, -6, -6], scale: 1.5, color: '#8b5cf6', speed: 0.4 },
    ]
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.elapsedTime
    
    groupRef.current.children.forEach((child, i) => {
      const orb = orbs[i]
      child.position.x = orb.position[0] + Math.sin(time * orb.speed) * 2 + mouse.current.x * 0.5
      child.position.y = orb.position[1] + Math.cos(time * orb.speed) * 2 + mouse.current.y * 0.5
      child.scale.setScalar(orb.scale * (1 + Math.sin(time * orb.speed * 2) * 0.1))
    })
  })

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position as [number, number, number]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.08} />
        </mesh>
      ))}
    </group>
  )
}

function GridLines() {
  const gridRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (!gridRef.current) return
    gridRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.1) * 0.05
  })

  return (
    <group ref={gridRef} position={[0, -8, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <gridHelper args={[50, 50, '#e2e8f0', '#e2e8f0']} />
    </group>
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

  const particleCount = reducedMotion ? 200 : 800

  return (
    <>
      <FloatingParticles count={particleCount} mouse={mouse} />
      {!reducedMotion && (
        <>
          <GlowingOrbs mouse={mouse} />
          <GridLines />
        </>
      )}
      <fog attach="fog" args={['#f8fafc', 10, 30]} />
    </>
  )
}

export function HeroWebGLBackground() {
  const [mounted, setMounted] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isLowPerf, setIsLowPerf] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    setIsLowPerf(isMobile)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  if (!mounted) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
    )
  }

  if (isLowPerf && reducedMotion) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
    )
  }

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ position: 'absolute', inset: 0 }}
        dpr={[1, isLowPerf ? 1 : 1.5]}
      >
        <Scene reducedMotion={reducedMotion || isLowPerf} />
      </Canvas>
    </div>
  )
}
