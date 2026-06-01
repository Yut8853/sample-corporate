"use client"

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { HeroBackgroundProps } from '@/types/hero'

const HeroWebGLBackground = dynamic(
  () => import('@/components/hero-webgl-background').then((mod) => mod.HeroWebGLBackground),
  { ssr: false },
)

export function HeroBackground({ backgroundY, scale, webglY }: HeroBackgroundProps) {
  return (
    <>
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ y: webglY }}
      >
        <HeroWebGLBackground />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY, scale }}
      >
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </motion.div>

      <div className="absolute inset-0 grid-pattern opacity-30" />
    </>
  )
}
