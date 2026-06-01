"use client"

import { useState } from 'react'
import type { UseFAQAccordionResult } from '@/types/faq'

export function useFAQAccordion(): UseFAQAccordionResult {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return {
    openIndex,
    toggleItem: (index) => {
      setOpenIndex((current) => (current === index ? null : index))
    },
  }
}
