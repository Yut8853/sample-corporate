"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

const navigation = {
  main: [
    { name: 'About', nameJa: '会社情報', href: '/company' },
    { name: 'Services', nameJa: '事業内容', href: '/services' },
    { name: 'Works', nameJa: '実績', href: '/works' },
    { name: 'News', nameJa: 'お知らせ', href: '/news' },
    { name: 'Careers', nameJa: '採用情報', href: '/recruit' },
  ],
  legal: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
}

const companyInfo = {
  name: 'NEXUS CREATIVE',
  nameJa: 'ネクサスクリエイティブ株式会社',
  address: '〒100-0001 東京都千代田区千代田1-1-1',
  building: 'NEXUS Tower 15F',
  email: 'hello@nexus-creative.co.jp',
}

export function Footer() {
  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand & CTA */}
            <div className="lg:col-span-5 space-y-8">
              <Link href="/" className="group inline-flex items-center gap-3">
                <div className="relative flex h-12 w-12 items-center justify-center">
                  <div className="absolute inset-0 rounded-xl bg-accent/20" />
                  <span className="relative text-2xl font-bold text-accent">N</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-wider text-foreground">{companyInfo.name}</span>
                  <span className="text-xs tracking-wider text-muted-foreground">{companyInfo.nameJa}</span>
                </div>
              </Link>
              
              <p className="max-w-sm text-muted-foreground leading-relaxed">
                テクノロジーとクリエイティビティの融合で、
                ビジネスの可能性を最大化するデジタルクリエイティブスタジオ。
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-foreground transition-all duration-300 hover:gap-5"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-3">
              <h3 className="section-label mb-6">Navigation</h3>
              <ul className="space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-baseline gap-2 text-foreground transition-colors hover:text-accent"
                    >
                      <span className="text-base font-medium">{item.name}</span>
                      <span className="text-xs text-muted-foreground">{item.nameJa}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Contact */}
            <div className="lg:col-span-2">
              <h3 className="section-label mb-6">Legal</h3>
              <ul className="space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h3 className="section-label mb-6">Contact</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-accent shrink-0" />
                  <div className="text-muted-foreground">
                    <p>{companyInfo.address}</p>
                    <p>{companyInfo.building}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent shrink-0" />
                  <a 
                    href={`mailto:${companyInfo.email}`} 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs tracking-widest text-muted-foreground">
                TOKYO, JAPAN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[15vw] font-bold leading-none text-border/30 whitespace-nowrap"
        >
          NEXUS CREATIVE
        </motion.p>
      </div>
    </footer>
  )
}
