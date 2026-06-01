"use client"

import { motion } from 'framer-motion'
import type { HeroStat } from '@/types/hero'

export function StatCard({ number, label, subLabel }: HeroStat) {
  return (
    <motion.div
      className="group relative p-5 lg:p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm card-shine overflow-hidden"
      whileHover={{
        y: -5,
        borderColor: 'rgba(163, 230, 53, 0.3)',
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="absolute top-3 right-3 h-2 w-2 rounded-full bg-accent/50"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="block text-3xl lg:text-4xl font-bold text-foreground">{number}</span>
      <span className="block mt-1 text-sm font-medium tracking-wide text-foreground">{label}</span>
      <span className="block mt-0.5 text-xs text-muted-foreground">{subLabel}</span>
      <motion.div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}
