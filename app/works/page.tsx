import { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { AnimatedSection } from '@/components/animated-section'
import { CTASection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: '実績・導入事例',
  description: '株式会社サンプルがサポートさせていただいた企業様の導入事例をご紹介します。',
}

const works = [
  {
    id: 1,
    title: 'コーポレートサイトリニューアル',
    company: '株式会社ABCマーケティング',
    industry: 'マーケティング',
    service: 'Webサイト制作',
    imageSrc: '/images/works-1.png',
    challenge: '創業10年を迎え、企業イメージの刷新と問い合わせ数の向上が課題でした。既存サイトは情報が整理されておらず、ユーザーが求める情報にたどり着きにくい状態でした。',
    solution: 'ユーザーリサーチを実施し、ターゲット顧客の行動パターンを分析。情報設計を見直し、問い合わせまでの導線を最適化しました。デザインは信頼感と先進性を両立させた現代的なビジュアルに刷新。',
    result: 'サイトリニューアル後、問い合わせ数が150%増加。直帰率も30%改善し、サイト全体の回遊率が向上しました。',
  },
  {
    id: 2,
    title: '業務管理システム開発',
    company: '株式会社DEF物流',
    industry: '物流',
    service: 'システム開発',
    imageSrc: '/images/works-2.png',
    challenge: '複数の業務システムが乱立し、データ連携が手作業で行われていたため、業務効率の低下と人的ミスが発生していました。',
    solution: '既存システムを統合する業務管理システムを設計・開発。API連携により自動化を実現し、ダッシュボードで全体の状況を可視化できる仕組みを構築しました。',
    result: '業務効率が40%向上し、月間の作業時間を約200時間削減。ヒューマンエラーもほぼゼロになりました。',
  },
  {
    id: 3,
    title: 'ECサイト構築',
    company: '株式会社GHIフーズ',
    industry: '食品',
    service: 'Webサイト制作',
    imageSrc: '/images/works-3.png',
    challenge: '実店舗のみでの販売に限界を感じ、オンライン販売を開始したいと考えていました。ECサイトの構築経験がなく、運用面での不安もありました。',
    solution: '使いやすいECプラットフォームを選定し、商品の魅力が伝わるサイトデザインを制作。運用マニュアルの整備と、スタッフ向けの運用トレーニングも実施しました。',
    result: 'オープン半年で月商500万円を達成。リピート率も40%を超え、安定した売上基盤を構築できました。',
  },
  {
    id: 4,
    title: 'マーケティング施策支援',
    company: '株式会社JKLソリューションズ',
    industry: 'ITサービス',
    service: 'マーケティング支援',
    imageSrc: '/images/works-4.png',
    challenge: 'リード獲得が営業の紹介に依存しており、安定した新規顧客獲得の仕組みがありませんでした。',
    solution: 'コンテンツマーケティングとリスティング広告を組み合わせた施策を立案・実行。MA（マーケティングオートメーション）を導入し、リードナーチャリングの仕組みを構築しました。',
    result: 'Web経由のリード数が月間30件から150件に増加。営業効率も向上し、成約率が20%改善しました。',
  },
  {
    id: 5,
    title: '採用サイト制作',
    company: '株式会社MNOコンサルティング',
    industry: 'コンサルティング',
    service: 'Webサイト制作',
    imageSrc: '/images/works-5.png',
    challenge: '採用活動がうまくいかず、特に若手人材の応募が少ない状況でした。企業の魅力が伝わるコンテンツがないことが課題でした。',
    solution: '社員インタビューや職場の雰囲気が伝わる動画コンテンツを制作。応募までの導線を最適化し、スマートフォンでも見やすいデザインに。',
    result: '応募数が3倍に増加。特に20代からの応募が大幅に増え、採用の質も向上しました。',
  },
  {
    id: 6,
    title: '基幹システム刷新',
    company: '株式会社PQR製造',
    industry: '製造業',
    service: 'システム開発',
    imageSrc: '/images/works-6.png',
    challenge: '20年以上使用していた基幹システムが老朽化し、保守が困難な状況でした。また、新しい業務要件に対応できないことも課題でした。',
    solution: '段階的な移行計画を策定し、業務を止めることなくシステムを刷新。クラウドベースの新システムで、柔軟な拡張性と安定性を実現しました。',
    result: 'システム運用コストが年間30%削減。新機能の追加も容易になり、業務効率が大幅に向上しました。',
  },
]

export default function WorksPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="実績・導入事例"
          description="これまでにサポートさせていただいた企業様の事例をご紹介します"
        />

        {/* Works List */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {works.map((work, index) => (
                <AnimatedSection key={work.id} delay={index * 0.1}>
                  <article className="h-full rounded-xl border border-border bg-card overflow-hidden">
                    <div className="relative aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/10">
                      <Image
                        src={work.imageSrc}
                        alt={work.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {work.industry}
                        </span>
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                          {work.service}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-card-foreground">{work.company}</h2>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">{work.title}</p>
                      
                      <div className="mt-6 space-y-4">
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">課題</h3>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{work.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">解決策</h3>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{work.solution}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">成果</h3>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{work.result}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="あなたの課題も、一緒に解決しませんか？"
          description="事例についての詳細や、同様の課題をお持ちの方はお気軽にご相談ください。"
          buttonText="お問い合わせする"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}
