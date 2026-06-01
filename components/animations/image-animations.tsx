'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import Image from 'next/image'

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  delay?: number
  direction?: 'left' | 'right' | 'up' | 'down'
}

export function ImageReveal({ 
  src, 
  alt, 
  className = '', 
  delay = 0,
  direction = 'left' 
}: ImageRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const clipPaths = {
    left: {
      hidden: 'inset(0 100% 0 0)',
      visible: 'inset(0 0% 0 0)',
    },
    right: {
      hidden: 'inset(0 0 0 100%)',
      visible: 'inset(0 0 0 0%)',
    },
    up: {
      hidden: 'inset(100% 0 0 0)',
      visible: 'inset(0% 0 0 0)',
    },
    down: {
      hidden: 'inset(0 0 100% 0)',
      visible: 'inset(0 0 0% 0)',
    },
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: clipPaths[direction].hidden }}
        animate={isInView ? { clipPath: clipPaths[direction].visible } : { clipPath: clipPaths[direction].hidden }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
        className="relative w-full h-full"
      >
        <motion.div
          initial={{ scale: 1.3 }}
          animate={isInView ? { scale: 1 } : { scale: 1.3 }}
          transition={{
            duration: 1.5,
            delay,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="w-full h-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

interface CardHoverProps {
  children: ReactNode
  className?: string
}

export function CardHover({ children, className = '' }: CardHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }
      }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

interface NumberCounterProps {
  value: number
  suffix?: string
  className?: string
  delay?: number
}

export function NumberCounter({ value, suffix = '', className = '', delay = 0 }: NumberCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay }}
      >
        {isInView && (
          <Counter from={0} to={value} delay={delay} />
        )}
        {suffix}
      </motion.span>
    </motion.span>
  )
}

function Counter({ from, to, delay }: { from: number; to: number; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
      >
        <CounterAnimation from={from} to={to} delay={delay} />
      </motion.span>
    </motion.span>
  )
}

function CounterAnimation({ from, to, delay }: { from: number; to: number; delay: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true })
  
  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.span
        initial={{ textContent: from }}
        animate={isInView ? { textContent: to } : { textContent: from }}
        transition={{
          duration: 2,
          delay,
          ease: 'easeOut',
        }}
        onUpdate={(latest) => {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(Number(latest.textContent || 0)).toString()
          }
        }}
      >
        {from}
      </motion.span>
    </motion.span>
  )
}

interface LineDrawProps {
  className?: string
  delay?: number
  direction?: 'horizontal' | 'vertical'
}

export function LineDraw({ className = '', delay = 0, direction = 'horizontal' }: LineDrawProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className={`bg-primary ${direction === 'horizontal' ? 'h-px' : 'w-px'} ${className}`}
      initial={{ scaleX: direction === 'horizontal' ? 0 : 1, scaleY: direction === 'vertical' ? 0 : 1 }}
      animate={isInView ? { scaleX: 1, scaleY: 1 } : { scaleX: direction === 'horizontal' ? 0 : 1, scaleY: direction === 'vertical' ? 0 : 1 }}
      transition={{
        duration: 1,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      style={{ transformOrigin: 'left' }}
    />
  )
}
