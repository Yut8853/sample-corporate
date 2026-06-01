"use client"

import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function useHeroScroll() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  return {
    containerRef,
    scrollYProgress,
    backgroundY: useTransform(scrollYProgress, [0, 1], [0, 200]),
    webglY: useTransform(scrollYProgress, [0, 1], [0, -100]),
    opacity: useTransform(scrollYProgress, [0, 0.8], [1, 0]),
    scale: useTransform(scrollYProgress, [0, 1], [1, 0.9]),
  }
}
