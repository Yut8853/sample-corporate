"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

export function CTASection({ title, description, buttonText, buttonHref }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl text-balance">
            {title}
          </h2>
          <p className="mt-4 text-base text-primary-foreground/80 sm:text-lg max-w-2xl mx-auto text-pretty">
            {description}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full px-8 group"
            >
              <Link href={buttonHref}>
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
