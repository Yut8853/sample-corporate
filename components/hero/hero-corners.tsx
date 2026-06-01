"use client"

import { motion } from 'framer-motion'

export function HeroCorners() {
  return (
    <>
      <motion.div
        className="absolute top-8 right-8 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute top-0 right-0 w-12 h-px bg-accent/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            style={{ transformOrigin: 'right' }}
          />
          <motion.div
            className="absolute top-0 right-0 w-px h-12 bg-accent/50"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            style={{ transformOrigin: 'top' }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-8 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute bottom-0 left-0 w-12 h-px bg-accent/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-px h-12 bg-accent/50"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            style={{ transformOrigin: 'bottom' }}
          />
        </div>
      </motion.div>
    </>
  )
}
