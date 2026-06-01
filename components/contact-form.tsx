"use client"

import { AnimatedSection } from '@/components/animated-section'
import { ContactFields } from '@/components/contact-form/contact-fields'
import { ContactSubmitButton } from '@/components/contact-form/contact-submit-button'
import { ContactSuccess } from '@/components/contact-form/contact-success'
import { useContactForm } from '@/hooks/use-contact-form'

export function ContactForm() {
  const { agreed, isSubmitted, isSubmitting, setAgreed, handleSubmit } = useContactForm()

  if (isSubmitted) {
    return <ContactSuccess />
  }

  return (
    <AnimatedSection>
      <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 lg:p-8">
        <div className="space-y-6">
          <ContactFields agreed={agreed} onAgreedChange={setAgreed} />
          <ContactSubmitButton disabled={!agreed || isSubmitting} isSubmitting={isSubmitting} />
        </div>
      </form>
    </AnimatedSection>
  )
}
