import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { FAQAccordion } from '@/components/faq-accordion'
import { CTASection } from '@/components/cta-section'
import { AnimatedSection } from '@/components/animated-section'

export const metadata: Metadata = {
  title: 'よくある質問',
  description: '株式会社サンプルへのよくあるご質問とその回答をまとめています。',
}

const faqItems = [
  {
    question: '相談だけでも可能ですか？',
    answer: 'はい、もちろん可能です。具体的なプロジェクトが決まっていなくても、課題感やお困りごとをお聞かせいただければ、最適なアプローチをご提案いたします。まずはお気軽にお問い合わせください。',
  },
  {
    question: '見積もりは無料ですか？',
    answer: 'はい、お見積りは無料です。ヒアリングをさせていただいた上で、最適なプランとお見積りをご提案いたします。お見積りをご確認いただいた上で、ご依頼いただくかどうかをご判断ください。',
  },
  {
    question: '対応エリアはありますか？',
    answer: '基本的に全国対応しております。オンラインでの打ち合わせが可能ですので、遠方のお客様でも問題なくプロジェクトを進めることができます。必要に応じて、対面での打ち合わせも可能です。',
  },
  {
    question: '制作期間はどれくらいですか？',
    answer: 'プロジェクトの規模や内容によって異なりますが、一般的なコーポレートサイトで2〜3ヶ月程度、システム開発で3〜6ヶ月程度を目安としています。詳細はヒアリング後にお見積りと合わせてご案内いたします。',
  },
  {
    question: '公開後のサポートはありますか？',
    answer: 'はい、公開後も継続的にサポートいたします。運用保守プランをご用意しており、更新作業の代行、セキュリティ対策、障害対応などをサポートいたします。また、改善提案も継続的に行います。',
  },
  {
    question: '自社で更新できるようになりますか？',
    answer: 'はい、CMSを導入したサイトであれば、お客様ご自身で更新が可能です。納品時に操作マニュアルをお渡しし、操作方法のレクチャーも行います。不明点があれば、いつでもサポートいたします。',
  },
  {
    question: '途中でデザインの変更は可能ですか？',
    answer: 'プロジェクト進行中でも、可能な範囲で変更に対応いたします。ただし、大幅な変更の場合は追加費用や納期調整が必要になる場合があります。事前に丁寧にヒアリングを行い、認識の齟齬がないよう進めます。',
  },
  {
    question: '予算が限られていますが、相談できますか？',
    answer: 'はい、ご予算に応じた最適なプランをご提案いたします。すべての機能を一度に実装するのではなく、優先度をつけて段階的に進めるなど、柔軟にご相談に応じます。',
  },
  {
    question: '既存サイトのリニューアルも対応していますか？',
    answer: 'はい、もちろん対応しております。現状のサイトの課題分析から、改善提案、リニューアル制作、公開後の運用まで、トータルでサポートいたします。',
  },
  {
    question: 'セキュリティ対策はどのように行っていますか？',
    answer: 'セキュリティを重視した設計・開発を行っています。SSL証明書の導入、定期的なセキュリティアップデート、脆弱性診断、アクセス制御など、多層的な対策を実施しています。',
  },
]

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="よくある質問"
          description="お客様からよくいただくご質問とその回答をまとめました"
        />

        {/* FAQ */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <FAQAccordion items={faqItems} />
          </div>
        </section>

        {/* Additional Info */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                その他のご質問がございましたら
              </h2>
              <p className="mt-4 text-muted-foreground">
                上記以外のご質問や、詳しい内容についてお知りになりたい場合は、
                お気軽にお問い合わせください。担当者が丁寧にご回答いたします。
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="まずはお気軽にご相談ください"
          description="サービス内容やご依頼前のご相談など、どんなことでもお気軽にお問い合わせください。"
          buttonText="お問い合わせする"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}
