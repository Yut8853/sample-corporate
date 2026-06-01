import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { SectionTitle } from '@/components/section-title'
import { AnimatedSection } from '@/components/animated-section'
import { CTASection } from '@/components/cta-section'
import { Globe, Code, BarChart3, Wrench, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '事業内容',
  description: 'Webサイト制作、システム開発、マーケティング支援、運用保守サポートなど、株式会社サンプルの事業内容をご紹介します。',
}

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Webサイト制作',
    description: 'お客様のビジネス目標に合わせた、効果的なWebサイトを制作します。',
    features: [
      'コーポレートサイト制作',
      'ECサイト構築',
      'ランディングページ制作',
      'オウンドメディア構築',
      'Webサイトリニューアル',
      'WordPress構築・カスタマイズ',
    ],
    details: 'ただ見た目が良いだけのサイトではなく、お客様のビジネスに貢献するWebサイトを目指します。ターゲットユーザーの行動分析から、UI/UX設計、SEO対策、公開後の運用まで、トータルでサポートいたします。',
  },
  {
    id: 'system',
    icon: Code,
    title: 'システム開発',
    description: '業務効率化や新規事業に必要なシステムを、設計から運用まで一貫してサポートします。',
    features: [
      '業務システム開発',
      'Webアプリケーション開発',
      'API開発・連携',
      'データベース設計',
      'クラウドインフラ構築',
      '既存システムの保守・改修',
    ],
    details: '要件定義から設計、開発、テスト、運用まで、一貫した体制でプロジェクトを推進します。お客様の業務フローを深く理解し、本当に使いやすく、効果のあるシステムをご提案します。',
  },
  {
    id: 'marketing',
    icon: BarChart3,
    title: 'マーケティング支援',
    description: 'デジタルマーケティング戦略の立案から実行まで、成果につながる施策をご提案します。',
    features: [
      'デジタルマーケティング戦略立案',
      'SEO対策・コンテンツマーケティング',
      'Web広告運用（リスティング・SNS）',
      'SNS運用支援',
      'アクセス解析・改善提案',
      'MA（マーケティングオートメーション）導入',
    ],
    details: '単なる施策の実行ではなく、お客様のビジネス目標から逆算した戦略的なアプローチで、持続的な成果を追求します。データに基づいたPDCAサイクルで、継続的な改善を行います。',
  },
  {
    id: 'support',
    icon: Wrench,
    title: '運用保守サポート',
    description: 'サイトやシステムの安定稼働を支え、継続的な改善と運用をサポートします。',
    features: [
      'Webサイト更新・運用代行',
      'システム監視・障害対応',
      'セキュリティ対策',
      'パフォーマンス改善',
      'サーバー保守・管理',
      '定期的なレポート・改善提案',
    ],
    details: '公開・リリースして終わりではなく、長期的なパートナーとして、お客様のビジネスの成長をサポートします。定期的なレポートと改善提案で、常に最適な状態を維持します。',
  },
]

const flowSteps = [
  {
    step: '01',
    title: 'お問い合わせ・ヒアリング',
    description: 'まずはお気軽にお問い合わせください。課題やご要望を丁寧にヒアリングします。',
  },
  {
    step: '02',
    title: 'ご提案・お見積り',
    description: 'ヒアリング内容をもとに、最適なプランとお見積りをご提案します。',
  },
  {
    step: '03',
    title: 'ご契約・キックオフ',
    description: '内容にご納得いただけましたら、契約を締結し、プロジェクトを開始します。',
  },
  {
    step: '04',
    title: '設計・開発',
    description: '定期的な進捗共有を行いながら、設計・開発を進めます。',
  },
  {
    step: '05',
    title: 'テスト・検収',
    description: '品質チェックを行い、お客様にご確認いただきます。',
  },
  {
    step: '06',
    title: '納品・運用開始',
    description: '納品後もサポートを継続し、安定した運用をお手伝いします。',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="事業内容"
          description="Webサイト制作からシステム開発、マーケティング支援まで幅広くサポート"
        />

        {/* Services List */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-start ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}>
                    <AnimatedSection className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <service.icon className="h-24 w-24 text-primary/30" />
                      </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {service.details}
                      </p>
                      <div className="mt-8">
                        <h3 className="text-sm font-semibold text-foreground mb-4">提供サービス</h3>
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Flow */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="サービスの流れ"
              subtitle="お問い合わせから納品まで、丁寧にサポートします"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {flowSteps.map((item, index) => (
                <AnimatedSection key={item.step} delay={index * 0.1}>
                  <div className="relative h-full rounded-xl border border-border bg-card p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-bold text-primary/20">{item.step}</span>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    {index < flowSteps.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground/30" />
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
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
