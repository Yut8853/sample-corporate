import type { MotionValue } from 'framer-motion'

export interface HeroStat {
  number: string
  label: string
  subLabel: string
}

export interface MotionValueStyleProps {
  opacity: MotionValue<number>
}

export interface HeroBackgroundProps {
  backgroundY: MotionValue<number>
  scale: MotionValue<number>
  webglY: MotionValue<number>
}
