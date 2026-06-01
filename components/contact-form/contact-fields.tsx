"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { ContactFieldsProps, InquiryType } from '@/types/contact-form'

const inquiryTypes: InquiryType[] = [
  'サービスについて',
  'お見積りのご依頼',
  '採用について',
  'その他',
]

export function ContactFields({ agreed, onAgreedChange }: ContactFieldsProps) {
  return (
    <>
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

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          checked={agreed}
          onChange={(event) => onAgreedChange(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-input"
        />
        <Label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
          <a href="/privacy" target="_blank" className="text-primary hover:underline">
            プライバシーポリシー
          </a>
          に同意の上、送信してください。
        </Label>
      </div>
    </>
  )
}
