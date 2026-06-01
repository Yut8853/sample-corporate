"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'

interface WorksCardProps {
  title: string
  company: string
  industry: string
  description: string
  imageSrc?: string
  index?: number
}

export function WorksCard({ title, company, industry, description, imageSrc, index = 0 }: WorksCardProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group h-full overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="relative aspect-video overflow-hidden bg-muted">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
              <span className="text-4xl font-bold text-primary/20">{company.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {industry}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-card-foreground">{company}</h3>
          <p className="mt-1 text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">{description}</p>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}
