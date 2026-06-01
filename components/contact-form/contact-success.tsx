"use client"

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'

export function ContactSuccess() {
  return (
    <AnimatedSection>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-xl border border-border bg-card p-8 text-center lg:p-12"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">お問い合わせを受け付けました</h3>
        <p className="mt-4 text-muted-foreground">
          お問い合わせいただきありがとうございます。
          <br />
          内容を確認の上、担当者より2営業日以内にご連絡いたします。
        </p>
      </motion.div>
    </AnimatedSection>
  )
}
