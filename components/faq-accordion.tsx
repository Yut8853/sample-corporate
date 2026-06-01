"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
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

interface FAQAccordionProps {
  items: { question: string; answer: string }[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y-0">
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          index={index}
        />
      ))}
    </div>
  )
}
