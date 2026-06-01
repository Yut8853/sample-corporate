"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { StatCard } from '@/components/hero/stat-card'
import type { HeroStat, MotionValueStyleProps } from '@/types/hero'

const heroStats: HeroStat[] = [
  { number: "200+", label: "Projects", subLabel: "プロジェクト実績" },
  { number: "50+", label: "Clients", subLabel: "取引企業数" },
  { number: "15", label: "Years", subLabel: "創業からの年数" },
  { number: "98%", label: "Satisfaction", subLabel: "顧客満足度" },
]

export function HeroContent({ opacity }: MotionValueStyleProps) {
  return (
    <motion.div
      className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12 w-full pt-32 pb-20 lg:pt-40 lg:pb-32"
      style={{ opacity }}
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 overflow-hidden"
          >
            <motion.span
              className="h-px bg-accent"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.span
              className="section-label"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Digital Creative Studio
            </motion.span>
          </motion.div>

          <h1 className="title-display overflow-hidden">
            {['Creating', 'Digital', 'Excellence'].map((word, index) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className={`block ${index === 1 ? 'text-gradient' : ''} ${index === 2 ? 'text-accent' : ''}`}
                  initial={{ y: '100%', rotateX: -45 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.15,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              className="max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              私たちは、テクノロジーとクリエイティビティの融合で、
              <br className="hidden sm:block" />
              ビジネスの可能性を最大化します。
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/works"
                className="group flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-foreground transition-all duration-300 hover:gap-5 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
              >
                <span>View Works</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="group flex items-center gap-3 rounded-full border border-foreground/20 px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:bg-foreground/5"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:col-span-5 grid grid-cols-2 gap-4 lg:gap-6"
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
