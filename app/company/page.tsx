import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { SectionTitle } from '@/components/section-title'
import { AnimatedSection } from '@/components/animated-section'
import { CTASection } from '@/components/cta-section'
import { MapPin, Clock, Train } from 'lucide-react'

export const metadata: Metadata = {
  title: '会社情報',
  description: '株式会社サンプルの会社情報、代表メッセージ、企業理念、沿革、アクセスをご紹介します。',
}

const companyData = {
  name: '株式会社サンプル',
  address: '〒100-0001 東京都千代田区千代田1-1-1 サンプルビル5F',
  representative: '代表取締役 山田 太郎',
  established: '2010年4月1日',
  capital: '1,000万円',
  employees: '50名（2024年4月現在）',
  business: 'Webサイト制作、システム開発、マーケティング支援、運用保守サポート',
  phone: '03-1234-5678',
  email: 'info@sample-corp.co.jp',
}

const history = [
  { year: '2010年', event: '東京都千代田区にて創業' },
  { year: '2012年', event: 'システム開発事業を開始' },
  { year: '2015年', event: '資本金を1,000万円に増資' },
  { year: '2017年', event: 'マーケティング支援事業を開始' },
  { year: '2019年', event: '社員数30名を突破' },
  { year: '2021年', event: '現オフィス（サンプルビル）に移転' },
  { year: '2023年', event: '社員数50名を突破' },
]

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="会社情報"
          description="私たちについてご紹介します"
        />

        {/* Message from CEO */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <AnimatedSection>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/20">CEO</span>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <span className="text-sm font-medium text-primary">代表メッセージ</span>
                <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl text-balance">
                  信頼されるパートナーとして、
                  <br />
                  お客様と共に歩み続けます。
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    株式会社サンプルは、2010年の創業以来、「お客様の課題を自分ごととして捉え、最善の解決策を提供する」という理念のもと、多くの企業様のデジタル化をサポートしてまいりました。
                  </p>
                  <p>
                    私たちが大切にしているのは、単なる「納品」ではなく、お客様のビジネスに本当に貢献できる「価値」を提供することです。そのために、一つひとつのプロジェクトに真摯に向き合い、丁寧なコミュニケーションを心がけています。
                  </p>
                  <p>
                    これからも、技術力とホスピタリティを兼ね備えた企業として、お客様に選ばれ続けるパートナーを目指してまいります。
                  </p>
                </div>
                <p className="mt-6 font-medium text-foreground">
                  代表取締役 山田 太郎
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="企業理念"
              subtitle="私たちが大切にしている価値観"
            />
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <blockquote className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl leading-relaxed text-balance">
                「信頼を積み重ね、
                <br />
                未来をつくる。」
              </blockquote>
              <p className="mt-8 text-muted-foreground leading-relaxed">
                お客様との信頼関係を何よりも大切にし、一つひとつの約束を誠実に守ることで、
                共に成長し、より良い未来を創造していきます。
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="会社概要"
            />
            <AnimatedSection className="mx-auto max-w-3xl">
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <table className="w-full">
                  <tbody className="divide-y divide-border">
                    <tr>
                      <th className="bg-muted/50 px-4 py-4 text-left text-sm font-medium text-foreground w-1/3 sm:px-6">
                        会社名
                      </th>
                      <td className="px-4 py-4 text-sm text-muted-foreground sm:px-6">
                        {companyData.name}
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-muted/50 px-4 py-4 text-left text-sm font-medium text-foreground w-1/3 sm:px-6">
                        所在地
                      </th>
                      <td className="px-4 py-4 text-sm text-muted-foreground sm:px-6">
                        {companyData.address}
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-muted/50 px-4 py-4 text-left text-sm font-medium text-foreground w-1/3 sm:px-6">
                        代表者
                      </th>
                      <td className="px-4 py-4 text-sm text-muted-foreground sm:px-6">
                        {companyData.representative}
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-muted/50 px-4 py-4 text-left text-sm font-medium text-foreground w-1/3 sm:px-6">
                        設立
                      </th>
                      <td className="px-4 py-4 text-sm text-muted-foreground sm:px-6">
                        {companyData.established}
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-muted/50 px-4 py-4 text-left text-sm font-medium text-foreground w-1/3 sm:px-6">
                        資本金
                      </th>
                      <td className="px-4 py-4 text-sm text-muted-foreground sm:px-6">
                        {companyData.capital}
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-muted/50 px-4 py-4 text-left text-sm font-medium text-foreground w-1/3 sm:px-6">
                        従業員数
                      </th>
                      <td className="px-4 py-4 text-sm text-muted-foreground sm:px-6">
                        {companyData.employees}
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-muted/50 px-4 py-4 text-left text-sm font-medium text-foreground w-1/3 sm:px-6">
                        事業内容
                      </th>
                      <td className="px-4 py-4 text-sm text-muted-foreground sm:px-6">
                        {companyData.business}
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-muted/50 px-4 py-4 text-left text-sm font-medium text-foreground w-1/3 sm:px-6">
                        電話番号
                      </th>
                      <td className="px-4 py-4 text-sm text-muted-foreground sm:px-6">
                        {companyData.phone}
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-muted/50 px-4 py-4 text-left text-sm font-medium text-foreground w-1/3 sm:px-6">
                        メールアドレス
                      </th>
                      <td className="px-4 py-4 text-sm text-muted-foreground sm:px-6">
                        {companyData.email}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* History */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="沿革"
              subtitle="私たちの歩み"
            />
            <AnimatedSection className="mx-auto max-w-2xl">
              <div className="relative pl-8 border-l-2 border-primary/20">
                {history.map((item, index) => (
                  <div key={index} className="relative pb-8 last:pb-0">
                    <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                      <span className="text-muted-foreground">{item.event}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Access */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="アクセス"
              subtitle="お越しの際はお気軽にお立ち寄りください"
            />
            <div className="grid gap-8 lg:grid-cols-2">
              <AnimatedSection>
                <div className="aspect-video rounded-xl bg-muted overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7528127!3d35.6852019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d8064d%3A0xd11a5f0b379e6db7!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="オフィス所在地"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">所在地</h3>
                      <p className="mt-1 text-muted-foreground">{companyData.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Train className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">最寄り駅</h3>
                      <p className="mt-1 text-muted-foreground">
                        東京メトロ千代田線「二重橋前駅」徒歩5分
                        <br />
                        JR「東京駅」丸の内南口 徒歩10分
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">営業時間</h3>
                      <p className="mt-1 text-muted-foreground">
                        平日 9:00 - 18:00
                        <br />
                        土日祝日は休業
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
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
