"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Globe, Code, BarChart3, Wrench } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'

const iconMap = {
  Globe,
  Code,
  BarChart3,
  Wrench,
}

type IconName = keyof typeof iconMap

interface ServiceCardProps {
  iconName: IconName
  title: string
  description: string
  href: string
  index?: number
}

export function ServiceCard({ iconName, title, description, href, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[iconName]
  
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group relative h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-accent"
        >
          詳しく見る
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </AnimatedSection>
  )
}
