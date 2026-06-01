import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { AnimatedSection } from '@/components/animated-section'
import { CTASection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'お知らせ',
  description: '株式会社サンプルからのお知らせ、プレスリリース、メディア掲載情報などをお届けします。',
}

const news = [
  {
    id: '1',
    date: '2024.12.15',
    category: 'お知らせ',
    title: '年末年始の営業日程について',
    excerpt: '誠に勝手ながら、2024年12月28日（土）〜2025年1月5日（日）まで、年末年始休業とさせていただきます。',
  },
  {
    id: '2',
    date: '2024.12.01',
    category: 'プレスリリース',
    title: '新サービス「クラウド業務管理システム」の提供開始のお知らせ',
    excerpt: '中小企業向けに、導入しやすく使いやすいクラウド型の業務管理システムの提供を開始しました。',
  },
  {
    id: '3',
    date: '2024.11.20',
    category: 'メディア掲載',
    title: '日経新聞に弊社代表のインタビュー記事が掲載されました',
    excerpt: '中小企業のDX推進についてのインタビュー記事が日経新聞に掲載されました。',
  },
  {
    id: '4',
    date: '2024.11.01',
    category: 'お知らせ',
    title: '採用強化のお知らせ',
    excerpt: '事業拡大に伴い、エンジニア、デザイナー、ディレクターの採用を強化しています。',
  },
  {
    id: '5',
    date: '2024.10.15',
    category: 'イベント',
    title: 'DXセミナー開催のお知らせ',
    excerpt: '中小企業向けのDX推進セミナーを11月に開催いたします。参加費無料。',
  },
  {
    id: '6',
    date: '2024.10.01',
    category: 'プレスリリース',
    title: '株式会社ABCマーケティング様のサイトリニューアルを担当しました',
    excerpt: 'コーポレートサイトの全面リニューアルを担当し、問い合わせ数150%増加を達成しました。',
  },
  {
    id: '7',
    date: '2024.09.15',
    category: 'お知らせ',
    title: 'オフィス移転のお知らせ',
    excerpt: '事業拡大に伴い、2024年10月1日より新オフィスに移転いたしました。',
  },
  {
    id: '8',
    date: '2024.09.01',
    category: 'メディア掲載',
    title: 'IT専門誌「TechReview」に特集記事が掲載されました',
    excerpt: '中小企業のシステム開発事例として、弊社の取り組みが紹介されました。',
  },
]

const categories = ['すべて', 'お知らせ', 'プレスリリース', 'メディア掲載', 'イベント']

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="お知らせ"
          description="最新の情報をお届けします"
        />

        {/* News List */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <AnimatedSection className="mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      category === 'すべて'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* News Items */}
            <div className="space-y-0 divide-y divide-border">
              {news.map((item, index) => (
                <AnimatedSection key={item.id} delay={index * 0.05}>
                  <Link
                    href={`/news/${item.id}`}
                    className="group block py-6 transition-colors hover:bg-muted/30 -mx-4 px-4 rounded-lg"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
                      <div className="shrink-0 sm:w-28">
                        <time className="text-sm text-muted-foreground">{item.date}</time>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary mb-2">
                          {item.category}
                        </span>
                        <h2 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary sm:text-lg">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
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
