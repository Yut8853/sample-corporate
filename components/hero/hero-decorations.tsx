"use client"

import { motion } from 'framer-motion'

export function HeroDecorations() {
  return (
    <>
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-32 left-12 w-px h-32 bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden lg:block"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-32 right-12 w-px h-32 bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden lg:block"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      />

      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 rounded-full bg-accent/60"
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + (index % 3) * 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        />
      ))}
    </>
  )
}
