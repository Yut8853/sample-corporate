import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { AnimatedSection } from '@/components/animated-section'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '株式会社サンプルへのお問い合わせはこちらから。サービスに関するご質問、お見積りのご依頼など、お気軽にご連絡ください。',
}

const contactInfo = [
  {
    icon: Phone,
    title: '電話番号',
    content: '03-1234-5678',
    href: 'tel:03-1234-5678',
  },
  {
    icon: Mail,
    title: 'メールアドレス',
    content: 'info@sample-corp.co.jp',
    href: 'mailto:info@sample-corp.co.jp',
  },
  {
    icon: MapPin,
    title: '所在地',
    content: '〒100-0001 東京都千代田区千代田1-1-1 サンプルビル5F',
  },
  {
    icon: Clock,
    title: '営業時間',
    content: '平日 9:00 - 18:00',
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="お問い合わせ"
          description="サービスに関するご質問、お見積りのご依頼など、お気軽にご連絡ください"
        />

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <AnimatedSection>
                  <h2 className="text-xl font-bold text-foreground">お問い合わせ先</h2>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    下記のフォームからお問い合わせいただくか、
                    電話・メールでも受け付けております。
                  </p>
                </AnimatedSection>
                
                <div className="mt-8 space-y-6">
                  {contactInfo.map((item, index) => (
                    <AnimatedSection key={item.title} delay={index * 0.1}>
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="mt-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="mt-1 text-sm text-muted-foreground">{item.content}</p>
                          )}
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
