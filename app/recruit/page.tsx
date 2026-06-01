import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { SectionTitle } from '@/components/section-title'
import { AnimatedSection } from '@/components/animated-section'
import { CTASection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'
import { Users, Heart, Lightbulb, TrendingUp, ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: '採用情報',
  description: '株式会社サンプルでは、ともに成長する仲間を募集しています。募集職種や働く環境についてご紹介します。',
}

const values = [
  {
    icon: Heart,
    title: '誠実さ',
    description: 'お客様にも仲間にも、常に誠実に向き合います。',
  },
  {
    icon: Lightbulb,
    title: '学び続ける姿勢',
    description: '技術も考え方も、常に新しいことを学び続けます。',
  },
  {
    icon: Users,
    title: 'チームワーク',
    description: '一人ではできないことも、チームで乗り越えます。',
  },
  {
    icon: TrendingUp,
    title: '成長志向',
    description: '会社も個人も、常に成長を目指します。',
  },
]

const positions = [
  {
    id: 'engineer',
    title: 'Webエンジニア',
    type: '正社員',
    location: '東京（リモート可）',
    description: 'Webアプリケーション、システム開発を担当していただきます。フロントエンドからバックエンドまで、幅広い技術に触れることができます。',
    requirements: [
      'Webアプリケーション開発経験2年以上',
      'HTML/CSS/JavaScriptの実務経験',
      'チーム開発の経験',
    ],
    preferred: [
      'React、Vue.js等のフレームワーク経験',
      'サーバーサイド開発経験',
      'AWSなどのクラウド経験',
    ],
  },
  {
    id: 'designer',
    title: 'Webデザイナー',
    type: '正社員',
    location: '東京（リモート可）',
    description: 'Webサイト、アプリケーションのUI/UXデザインを担当していただきます。ユーザー視点でのデザインを大切にしています。',
    requirements: [
      'WebデザインもしくはUIデザイン経験2年以上',
      'Figma、Adobe XDなどのデザインツール経験',
      'レスポンシブデザインの実務経験',
    ],
    preferred: [
      'UXリサーチの経験',
      'HTML/CSSの基礎知識',
      'デザインシステム構築経験',
    ],
  },
  {
    id: 'director',
    title: 'Webディレクター',
    type: '正社員',
    location: '東京',
    description: 'Webサイト制作プロジェクトの企画・進行管理を担当していただきます。お客様との折衝から、チームマネジメントまで幅広く活躍いただけます。',
    requirements: [
      'Webディレクション経験3年以上',
      'プロジェクトマネジメント経験',
      '顧客折衝経験',
    ],
    preferred: [
      'Web制作の実務経験',
      'マーケティングの知識',
      '提案書作成経験',
    ],
  },
]

const benefits = [
  '完全週休2日制（土日祝）',
  '年間休日120日以上',
  'リモートワーク可（週2-3日）',
  'フレックスタイム制',
  '各種社会保険完備',
  '交通費全額支給',
  '書籍購入支援',
  '資格取得支援',
  'セミナー参加費用補助',
  '定期健康診断',
  '産休・育休制度',
  'オフィスにフリードリンク',
]

const flow = [
  {
    step: '01',
    title: 'エントリー',
    description: '下記のエントリーボタンからご応募ください。',
  },
  {
    step: '02',
    title: '書類選考',
    description: '履歴書・職務経歴書をもとに選考いたします。',
  },
  {
    step: '03',
    title: '面接（2回）',
    description: '担当者面接と役員面接を行います。',
  },
  {
    step: '04',
    title: '内定',
    description: '条件面を確認し、内定となります。',
  },
]

export default function RecruitPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="採用情報"
          description="ともに成長する仲間を募集しています"
        />

        {/* Message */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
                あなたの力を、
                <br />
                お客様の課題解決に。
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                私たちは、お客様のビジネス課題を解決するプロフェッショナル集団です。
                技術力だけでなく、コミュニケーション力や提案力を持ち、
                お客様に寄り添いながら価値を提供できる仲間を求めています。
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="求める人物像"
              subtitle="私たちが大切にしている価値観に共感いただける方"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <div className="h-full rounded-xl border border-border bg-card p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Positions */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="募集職種"
              subtitle="あなたの経験とスキルを活かせるポジション"
            />
            <div className="space-y-8">
              {positions.map((position, index) => (
                <AnimatedSection key={position.id} delay={index * 0.1}>
                  <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-card-foreground">{position.title}</h3>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {position.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{position.description}</p>
                    
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">必須要件</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req) => (
                            <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">歓迎要件</h4>
                        <ul className="space-y-2">
                          {position.preferred.map((pref) => (
                            <li key={pref} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                              {pref}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="働く環境"
              subtitle="社員が働きやすい環境を整えています"
            />
            <AnimatedSection className="mx-auto max-w-3xl">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Flow */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="応募の流れ"
              subtitle="エントリーから内定まで"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {flow.map((item, index) => (
                <AnimatedSection key={item.step} delay={index * 0.1}>
                  <div className="relative h-full rounded-xl border border-border bg-card p-6 text-center">
                    <span className="text-4xl font-bold text-primary/20">{item.step}</span>
                    <h3 className="mt-2 text-lg font-semibold text-card-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    {index < flow.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground/30" />
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Entry CTA */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl text-balance">
                ご応募お待ちしています
              </h2>
              <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
                まずはカジュアル面談からでも構いません。
                お気軽にエントリーください。
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                  <Link href="/contact">
                    エントリーする
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
