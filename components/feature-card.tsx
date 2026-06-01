"use client"

import { motion } from 'framer-motion'
import { Lightbulb, Shield, Handshake, MessageSquare, ClipboardList, HeartHandshake } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'

const iconMap = {
  Lightbulb,
  Shield,
  Handshake,
  MessageSquare,
  ClipboardList,
  HeartHandshake,
}

type IconName = keyof typeof iconMap

interface FeatureCardProps {
  iconName: IconName
  title: string
  description: string
  index?: number
}

export function FeatureCard({ iconName, title, description, index = 0 }: FeatureCardProps) {
  const Icon = iconMap[iconName]
  
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group relative h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md lg:p-8"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      </motion.div>
    </AnimatedSection>
  )
}
