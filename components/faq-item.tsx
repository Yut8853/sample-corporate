"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import type { FAQItemProps } from '@/types/faq'

export function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <AnimatedSection delay={index * 0.05}>
      <div className="border-b border-border">
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
        >
          <span className="text-base font-medium text-foreground pr-4">{question}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
          >
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-sm text-muted-foreground leading-relaxed">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  )
}
