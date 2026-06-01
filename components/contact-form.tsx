"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AnimatedSection } from '@/components/animated-section'

const inquiryTypes = [
  'サービスについて',
  'お見積りのご依頼',
  '採用について',
  'その他',
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!agreed) return
    
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
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

  return (
    <AnimatedSection>
      <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 lg:p-8">
        <div className="space-y-6">
          {/* Name */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-foreground">
                お名前 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="山田 太郎"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="company" className="text-sm font-medium text-foreground">
                会社名
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="株式会社サンプル"
                className="mt-2"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                メールアドレス <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="example@example.com"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                電話番号
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="03-1234-5678"
                className="mt-2"
              />
            </div>
          </div>

          {/* Inquiry Type */}
          <div>
            <Label htmlFor="type" className="text-sm font-medium text-foreground">
              お問い合わせ種別 <span className="text-destructive">*</span>
            </Label>
            <select
              id="type"
              name="type"
              required
              className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <option value="">選択してください</option>
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-sm font-medium text-foreground">
              お問い合わせ内容 <span className="text-destructive">*</span>
            </Label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="お問い合わせ内容をご記入ください"
              className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
            />
          </div>

          {/* Privacy Policy Agreement */}
          <div className="flex items-start gap-3">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-input"
            />
            <Label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
              <a href="/privacy" target="_blank" className="text-primary hover:underline">
                プライバシーポリシー
              </a>
              に同意の上、送信してください。
            </Label>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={!agreed || isSubmitting}
            className="w-full rounded-full"
            size="lg"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                送信中...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                送信する
              </span>
            )}
          </Button>
        </div>
      </form>
    </AnimatedSection>
  )
}
