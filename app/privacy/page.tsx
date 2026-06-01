import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { AnimatedSection } from '@/components/animated-section'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '株式会社サンプルのプライバシーポリシー（個人情報保護方針）についてご説明します。',
}

const sections = [
  {
    title: '1. 個人情報の定義',
    content: `本プライバシーポリシーにおいて、「個人情報」とは、個人情報保護法に規定される「個人情報」を指し、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報を指します。`,
  },
  {
    title: '2. 個人情報の収集方法',
    content: `当社は、お客様がお問い合わせフォームへの入力、サービスのお申し込み、アンケートへのご回答等を行う際に、氏名、メールアドレス、電話番号、住所、会社名等の個人情報を収集することがあります。`,
  },
  {
    title: '3. 個人情報の利用目的',
    content: `当社が個人情報を収集・利用する目的は、以下のとおりです。

• お客様からのお問い合わせに対応するため
• 当社サービスの提供・運営のため
• お客様への連絡（契約内容の確認、サービスに関するお知らせ等）のため
• 当社サービスの改善・新サービスの開発のため
• マーケティング活動（アンケート調査、キャンペーンの案内等）のため
• 上記の利用目的に付随する目的のため`,
  },
  {
    title: '4. 個人情報の第三者提供',
    content: `当社は、以下の場合を除き、あらかじめお客様の同意を得ることなく、第三者に個人情報を提供することはありません。

• 法令に基づく場合
• 人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
• 公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
• 国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき`,
  },
  {
    title: '5. 個人情報の安全管理',
    content: `当社は、個人情報の紛失、破壊、改ざんおよび漏洩等を防止するため、適切なセキュリティ対策を実施し、個人情報の安全管理に努めます。`,
  },
  {
    title: '6. 個人情報の開示・訂正・削除',
    content: `お客様は、当社に対して、ご自身の個人情報の開示、訂正、追加、削除、利用停止を請求することができます。請求を受けた場合、当社は、本人確認を行った上で、合理的な期間内に対応いたします。`,
  },
  {
    title: '7. Cookieの使用について',
    content: `当社のウェブサイトでは、お客様の利便性向上およびウェブサイトの利用状況の分析のため、Cookieを使用しています。Cookieの使用を希望されない場合は、ブラウザの設定でCookieを無効にすることができます。ただし、Cookieを無効にした場合、当社ウェブサイトの一部の機能が利用できなくなる場合があります。`,
  },
  {
    title: '8. アクセス解析ツールの使用',
    content: `当社ウェブサイトでは、Google Analyticsをはじめとするアクセス解析ツールを使用しています。これらのツールはCookieを使用してデータを収集しますが、このデータは匿名で収集されており、個人を特定するものではありません。`,
  },
  {
    title: '9. プライバシーポリシーの変更',
    content: `当社は、必要に応じて、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。`,
  },
  {
    title: '10. お問い合わせ窓口',
    content: `本プライバシーポリシーに関するお問い合わせは、下記までご連絡ください。

株式会社サンプル
〒100-0001 東京都千代田区千代田1-1-1 サンプルビル5F
電話番号：03-1234-5678
メールアドレス：info@sample-corp.co.jp`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="プライバシーポリシー"
          description="個人情報の取り扱いについて"
        />

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-muted-foreground leading-relaxed mb-12">
                株式会社サンプル（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と認識し、
                以下のプライバシーポリシーに従って、個人情報を適切に取り扱います。
              </p>
            </AnimatedSection>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <AnimatedSection key={section.title} delay={index * 0.05}>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">{section.title}</h2>
                    <div className="mt-4 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.5} className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                制定日：2024年1月1日
                <br />
                最終改定日：2024年12月1日
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
