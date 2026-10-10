import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { AnimatedSection } from '@/components/animated-section'
import { CTASection } from '@/components/cta-section'
import { workProjects } from '@/data/work-projects'

export const metadata: Metadata = {
  title: '実績・導入事例',
  description: '株式会社サンプルがサポートさせていただいた企業様の導入事例をご紹介します。',
}

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
              {workProjects.map((work, index) => (
                <AnimatedSection key={work.id} delay={index * 0.1}>
                  <article className="h-full rounded-xl border border-border bg-card overflow-hidden">
                    <div className="relative min-h-56 bg-gradient-to-br from-primary via-primary/80 to-accent p-6 text-primary-foreground lg:p-8">
                      <div className="absolute inset-0 opacity-15 grid-pattern" />
                      <div className="relative flex h-full flex-col justify-between gap-12">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium">
                            {work.category}
                          </span>
                          <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium">
                            {work.ownerType}
                          </span>
                          <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium">
                            {work.year}
                          </span>
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">{work.title}</h2>
                          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/80">
                            {work.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {work.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-6 space-y-5">
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">担当範囲</h3>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{work.role}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">制作スコープ</h3>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{work.scope}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">成果</h3>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{work.outcome}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">ハイライト</h3>
                          <ul className="mt-2 space-y-2">
                            {work.highlights.map((highlight) => (
                              <li key={highlight} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">技術スタック</h3>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {work.stack.map((item) => (
                              <span key={item} className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                                {item}
                              </span>
                            ))}
                          </div>
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
