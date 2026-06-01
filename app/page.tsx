"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { SlideIn, StaggerContainer, StaggerItem, ScaleOnScroll, Parallax } from '@/components/animations/scroll-animations'
import { TextReveal, SplitText } from '@/components/animations/text-reveal'
import { ImageReveal, CardHover, LineDraw } from '@/components/animations/image-animations'

const services = [
  {
    number: '01',
    title: 'Web Design',
    titleJa: 'Webサイト制作',
    description: 'ブランドの本質を捉えた、印象的なデジタル体験をデザインします。',
    href: '/services#web',
  },
  {
    number: '02',
    title: 'Development',
    titleJa: 'システム開発',
    description: '最新技術で、スケーラブルで堅牢なシステムを構築します。',
    href: '/services#system',
  },
  {
    number: '03',
    title: 'Marketing',
    titleJa: 'マーケティング支援',
    description: 'データドリブンな戦略で、ビジネスの成長を加速させます。',
    href: '/services#marketing',
  },
  {
    number: '04',
    title: 'Consulting',
    titleJa: 'DXコンサルティング',
    description: 'デジタル変革を通じて、企業の競争力を高めます。',
    href: '/services#consulting',
  },
]

const works = [
  {
    title: 'Corporate Site Renewal',
    titleJa: 'コーポレートサイトリニューアル',
    company: 'ABC Marketing Inc.',
    category: 'Web Design',
    imageSrc: '/images/works-1.png',
    href: '/works',
  },
  {
    title: 'Business Management System',
    titleJa: '業務管理システム開発',
    company: 'DEF Logistics Co.',
    category: 'Development',
    imageSrc: '/images/works-2.png',
    href: '/works',
  },
  {
    title: 'E-Commerce Platform',
    titleJa: 'ECサイト構築',
    company: 'GHI Foods Ltd.',
    category: 'Web Design',
    imageSrc: '/images/works-3.png',
    href: '/works',
  },
]

const news = [
  {
    date: '2024.12.15',
    category: 'News',
    title: '年末年始の営業日程について',
    href: '/news/1',
  },
  {
    date: '2024.12.01',
    category: 'Release',
    title: '新サービス「クラウド業務管理システム」の提供開始',
    href: '/news/2',
  },
  {
    date: '2024.11.20',
    category: 'Media',
    title: '日経新聞に弊社代表のインタビュー記事が掲載',
    href: '/news/3',
  },
]

export default function HomePage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10])

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <Hero />

        {/* About Section */}
        <section className="relative py-24 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Left - Text */}
              <div className="space-y-8">
                <SlideIn direction="left">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.span 
                      className="h-px bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <span className="section-label">About Us</span>
                  </div>
                </SlideIn>
                <div className="overflow-hidden">
                  <motion.h2 
                    className="title-xl"
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    <span className="block">Transforming Ideas</span>
                    <span className="block text-muted-foreground">Into Digital Reality</span>
                  </motion.h2>
                </div>
                <SlideIn direction="up" delay={0.2}>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    私たちは、デジタルの力でビジネスに変革をもたらすクリエイティブスタジオです。
                    戦略立案からデザイン、開発、運用まで、一貫したサポートでお客様の成功を実現します。
                  </p>
                </SlideIn>
                <SlideIn direction="up" delay={0.3}>
                  <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                    {[
                      { value: '15+', label: 'Years Experience' },
                      { value: '200+', label: 'Projects Done' },
                      { value: '50+', label: 'Happy Clients' },
                    ].map((stat, i) => (
                      <motion.div 
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                      >
                        <span className={`block text-4xl lg:text-5xl font-bold ${i === 0 ? 'text-accent' : 'text-foreground'}`}>
                          {stat.value}
                        </span>
                        <span className="block mt-2 text-sm text-muted-foreground">{stat.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </SlideIn>
                <SlideIn direction="up" delay={0.5}>
                  <Link
                    href="/company"
                    className="group inline-flex items-center gap-2 text-foreground font-medium link-underline"
                  >
                    <span>Learn More About Us</span>
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </SlideIn>
              </div>

              {/* Right - Image */}
              <SlideIn direction="right" delay={0.2} className="relative">
                <motion.div 
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <ImageReveal
                    src="/images/team-office.png"
                    alt="Our creative team"
                    className="w-full h-full"
                    direction="right"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </motion.div>
                {/* Floating Card */}
                <motion.div 
                  className="absolute -bottom-8 -left-8 p-6 rounded-xl bg-card border border-border backdrop-blur-sm"
                  initial={{ opacity: 0, x: -50, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <span className="section-label">Since 2009</span>
                  <p className="mt-2 text-2xl font-bold text-foreground">Creating Excellence</p>
                </motion.div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-24 lg:py-40 bg-card overflow-hidden">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div>
                <SlideIn direction="left">
                  <div className="flex items-center gap-3 mb-6">
                    <LineDraw className="w-12" />
                    <span className="section-label">Our Services</span>
                  </div>
                </SlideIn>
                <div className="overflow-hidden">
                  <motion.h2 
                    className="title-xl"
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    <span className="block">What We</span>
                    <span className="block text-accent">Deliver</span>
                  </motion.h2>
                </div>
              </div>
              <SlideIn direction="right" delay={0.2}>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-foreground/5"
                >
                  <span>View All Services</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </SlideIn>
            </div>

            <StaggerContainer className="grid lg:grid-cols-2 gap-4" staggerDelay={0.15}>
              {services.map((service) => (
                <StaggerItem key={service.number}>
                  <CardHover>
                    <Link href={service.href} className="group block">
                      <div className="relative p-8 lg:p-10 rounded-2xl border border-border bg-background/50 transition-all duration-500 hover:border-accent/50 hover:bg-accent/5 card-shine overflow-hidden">
                        {/* Background number */}
                        <motion.span 
                          className="absolute -right-4 -top-4 text-[12rem] font-bold text-border/10 pointer-events-none"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                        >
                          {service.number}
                        </motion.span>
                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-6">
                            <span className="text-5xl lg:text-6xl font-bold text-border group-hover:text-accent/30 transition-colors duration-500">
                              {service.number}
                            </span>
                            <motion.div
                              whileHover={{ x: 5, y: -5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-accent" />
                            </motion.div>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-500">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">{service.titleJa}</p>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </Link>
                  </CardHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Works Section */}
        <section ref={targetRef} className="relative py-24 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          {/* Large Background Text */}
          <motion.div 
            style={{ y, rotate }}
            className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden"
          >
            <p className="text-[20vw] font-bold leading-none text-border/20 whitespace-nowrap">
              WORKS
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div>
                <SlideIn direction="left">
                  <div className="flex items-center gap-3 mb-6">
                    <LineDraw className="w-12" />
                    <span className="section-label">Featured Works</span>
                  </div>
                </SlideIn>
                <div className="overflow-hidden">
                  <motion.h2 
                    className="title-xl"
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    <span className="block">Selected</span>
                    <span className="block text-muted-foreground">Projects</span>
                  </motion.h2>
                </div>
              </div>
              <SlideIn direction="right" delay={0.2}>
                <Link
                  href="/works"
                  className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-foreground/5"
                >
                  <span>View All Works</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </SlideIn>
            </div>

            <StaggerContainer className="grid lg:grid-cols-3 gap-6" staggerDelay={0.2}>
              {works.map((work) => (
                <StaggerItem key={work.title}>
                  <Link href={work.href} className="group block">
                    <motion.div 
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={work.imageSrc}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div 
                        className="absolute bottom-4 left-4 right-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                          {work.category}
                        </span>
                      </motion.div>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                        {work.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{work.titleJa}</p>
                      <p className="text-sm text-muted-foreground mt-2">{work.company}</p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="py-8 border-y border-border overflow-hidden bg-card">
          <motion.div 
            className="marquee-track"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-6">
                {['Web Design', 'Development', 'Branding', 'Marketing', 'Consulting', 'Strategy'].map((text, j) => (
                  <span key={j} className="text-2xl lg:text-4xl font-bold text-muted-foreground/30 whitespace-nowrap flex items-center gap-12">
                    {text}
                    <motion.span 
                      className="h-3 w-3 rounded-full bg-accent/50"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: j * 0.2 }}
                    />
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </section>

        {/* News Section */}
        <section className="py-24 lg:py-40">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div>
                <SlideIn direction="left">
                  <div className="flex items-center gap-3 mb-6">
                    <LineDraw className="w-12" />
                    <span className="section-label">Latest News</span>
                  </div>
                </SlideIn>
                <div className="overflow-hidden">
                  <motion.h2 
                    className="title-xl"
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    <span className="block">News &</span>
                    <span className="block text-muted-foreground">Updates</span>
                  </motion.h2>
                </div>
              </div>
              <SlideIn direction="right" delay={0.2}>
                <Link
                  href="/news"
                  className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-foreground/5"
                >
                  <span>View All News</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </SlideIn>
            </div>

            <div className="space-y-0">
              {news.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <Link href={item.href} className="group block">
                    <motion.div 
                      className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 py-8 border-b border-border transition-colors hover:border-accent/50"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-4 lg:w-48 shrink-0">
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="flex-1 text-lg lg:text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <motion.div
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-40 overflow-hidden">
          <Parallax speed={0.3} className="absolute inset-0">
            <div className="absolute inset-0 scale-110">
              <Image
                src="/images/about-vision.png"
                alt=""
                fill
                className="object-cover opacity-20"
              />
            </div>
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          
          <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
            <ScaleOnScroll className="text-center max-w-3xl mx-auto">
              <motion.div 
                className="flex items-center justify-center gap-3 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.span 
                  className="h-px bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <span className="section-label">Get In Touch</span>
                <motion.span 
                  className="h-px bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.div>
              <div className="overflow-hidden mb-6">
                <motion.h2 
                  className="title-xl"
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <span className="block">Ready to Start</span>
                  <span className="block text-accent">Your Project?</span>
                </motion.h2>
              </div>
              <motion.p 
                className="text-lg text-muted-foreground mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                お気軽にお問い合わせください。プロジェクトのご相談から、
                サービスに関するご質問まで、専門スタッフが丁寧にご対応いたします。
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="group flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-lg font-medium text-accent-foreground transition-all duration-300 hover:gap-5 hover:shadow-[0_0_40px_rgba(163,230,53,0.3)]"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/services"
                    className="group flex items-center gap-3 rounded-full border border-foreground/20 px-10 py-5 text-lg font-medium text-foreground transition-all duration-300 hover:bg-foreground/5"
                  >
                    <span>Our Services</span>
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </motion.div>
            </ScaleOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
