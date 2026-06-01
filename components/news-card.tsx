"use client"

import Link from 'next/link'
import { AnimatedSection } from '@/components/animated-section'

interface NewsCardProps {
  date: string
  category: string
  title: string
  href: string
  index?: number
}

export function NewsCard({ date, category, title, href, index = 0 }: NewsCardProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <Link
        href={href}
        className="group flex items-start gap-4 border-b border-border py-4 transition-colors hover:bg-muted/30 px-2 -mx-2 rounded-lg last:border-b-0"
      >
        <div className="shrink-0">
          <time className="text-sm text-muted-foreground">{date}</time>
        </div>
        <div className="flex-1 min-w-0">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary mb-2">
            {category}
          </span>
          <h3 className="text-sm font-medium text-foreground transition-colors group-hover:text-primary line-clamp-2">
            {title}
          </h3>
        </div>
      </Link>
    </AnimatedSection>
  )
}
