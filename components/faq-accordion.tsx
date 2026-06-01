"use client"

import { FAQItem } from '@/components/faq-item'
import { useFAQAccordion } from '@/hooks/use-faq-accordion'
import type { FAQAccordionProps } from '@/types/faq'

export function FAQAccordion({ items }: FAQAccordionProps) {
  const { openIndex, toggleItem } = useFAQAccordion()

  return (
    <div className="divide-y-0">
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => toggleItem(index)}
          index={index}
        />
      ))}
    </div>
  )
}
