'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function TextReveal({ children, className = '', delay = 0, direction = 'up' }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const directions = {
    up: { y: 80 },
    down: { y: -80 },
    left: { x: 80 },
    right: { x: -80 },
  }

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, ...directions[direction] }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}

interface SplitTextProps {
  children: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export function SplitText({ children, className = '', delay = 0, staggerDelay = 0.03 }: SplitTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const chars = children.split('')

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -90 }}
          transition={{
            duration: 0.5,
            delay: delay + i * staggerDelay,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  )
}

interface WordRevealProps {
  children: string
  className?: string
  delay?: number
}

export function WordReveal({ children, className = '', delay = 0 }: WordRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const words = children.split(' ')

  return (
    <div ref={ref} className={`flex flex-wrap gap-x-2 ${className}`}>
      {words.map((word, i) => (
        <div key={i} className="overflow-hidden">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.1,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  )
}
