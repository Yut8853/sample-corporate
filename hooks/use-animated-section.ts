"use client"

import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useAnimatedSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return { ref, isInView }
}
