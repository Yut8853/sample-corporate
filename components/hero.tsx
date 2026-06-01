"use client"

import { motion } from 'framer-motion'
import { HeroBackground } from '@/components/hero/hero-background'
import { HeroContent } from '@/components/hero/hero-content'
import { HeroCorners } from '@/components/hero/hero-corners'
import { HeroDecorations } from '@/components/hero/hero-decorations'
import { ScrollIndicator } from '@/components/hero/scroll-indicator'
import { useHeroScroll } from '@/hooks/use-hero-scroll'

export function Hero() {
  const {
    containerRef,
    backgroundY,
    opacity,
    scale,
    webglY,
  } = useHeroScroll()

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      <HeroBackground backgroundY={backgroundY} scale={scale} webglY={webglY} />
      <HeroDecorations />
      <HeroContent opacity={opacity} />
      <ScrollIndicator />

      <motion.div
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span className="text-xs tracking-[0.3em] text-muted-foreground [writing-mode:vertical-lr] rotate-180">
          NEXUS CREATIVE 2024
        </span>
      </motion.div>

      <HeroCorners />
    </section>
  )
}
