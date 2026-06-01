"use client"

import { useState } from 'react'
import type { FormEvent } from 'react'
import type { UseContactFormResult } from '@/types/contact-form'

export function useContactForm(): UseContactFormResult {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!agreed) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return {
    agreed,
    isSubmitted,
    isSubmitting,
    setAgreed,
    handleSubmit,
  }
}
