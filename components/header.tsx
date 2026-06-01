"use client"

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useHeaderState } from '@/hooks/use-header-state'
import type { NavigationItem } from '@/types/header'

const navigation: NavigationItem[] = [
  { name: 'About', nameJa: '会社情報', href: '/company' },
  { name: 'Services', nameJa: '事業内容', href: '/services' },
  { name: 'Works', nameJa: '実績', href: '/works' },
  { name: 'News', nameJa: 'お知らせ', href: '/news' },
  { name: 'Careers', nameJa: '採用情報', href: '/recruit' },
]

export function Header() {
  const { closeMobileMenu, isMobileMenuOpen, isScrolled, toggleMobileMenu } = useHeaderState()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-accent/20 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative text-xl font-bold text-accent">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider text-foreground">NEXUS</span>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground">CREATIVE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-5 py-2"
              >
                <span className="text-sm font-medium tracking-wide text-muted-foreground transition-colors group-hover:text-foreground">
                  {item.name}
                </span>
                <span className="absolute bottom-1 left-5 right-5 h-px bg-accent scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent"
            >
              <span>Contact</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden relative z-50 flex h-12 w-12 items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label="メニューを開く"
          >
            <div className="relative h-5 w-6">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="absolute top-0 left-0 h-0.5 w-full bg-foreground"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute top-2 left-0 h-0.5 w-full bg-foreground"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="absolute top-4 left-0 h-0.5 w-full bg-foreground"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background" />
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative flex flex-col justify-center h-full px-8 pt-24"
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-baseline gap-4 py-4 border-b border-border"
                    onClick={closeMobileMenu}
                  >
                    <span className="text-3xl font-bold text-foreground transition-colors group-hover:text-accent">
                      {item.name}
                    </span>
                    <span className="text-sm text-muted-foreground">{item.nameJa}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-medium text-accent-foreground"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
