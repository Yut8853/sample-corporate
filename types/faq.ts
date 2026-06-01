export interface FAQEntry {
  question: string
  answer: string
}

export interface FAQAccordionProps {
  items: FAQEntry[]
}

export interface FAQItemProps extends FAQEntry {
  isOpen: boolean
  onToggle: () => void
  index: number
}

export interface UseFAQAccordionResult {
  openIndex: number | null
  toggleItem: (index: number) => void
}
