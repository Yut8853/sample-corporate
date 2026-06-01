import type { FormEvent } from 'react'

export type InquiryType =
  | 'サービスについて'
  | 'お見積りのご依頼'
  | '採用について'
  | 'その他'

export interface UseContactFormResult {
  agreed: boolean
  isSubmitted: boolean
  isSubmitting: boolean
  setAgreed: (agreed: boolean) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
}

export interface ContactFieldsProps {
  agreed: boolean
  onAgreedChange: (agreed: boolean) => void
}

export interface ContactSubmitButtonProps {
  disabled: boolean
  isSubmitting: boolean
}
