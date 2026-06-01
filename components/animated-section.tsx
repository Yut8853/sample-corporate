"use client"

import { motion } from 'framer-motion'
import { useAnimatedSection } from '@/hooks/use-animated-section'
import type { AnimatedSectionProps } from '@/types/animated-section'

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  const { ref, isInView } = useAnimatedSection()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
