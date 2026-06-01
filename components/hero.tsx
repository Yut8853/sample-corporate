"use client"

import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const HeroWebGLBackground = dynamic(
  () => import('@/components/hero-webgl-background').then(mod => mod.HeroWebGLBackground),
  { ssr: false }
)

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      {/* WebGL Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      >
        <HeroWebGLBackground />
      </motion.div>

      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated Decorative Elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated Lines */}
      <motion.div 
        className="absolute top-32 left-12 w-px h-32 bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden lg:block"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-32 right-12 w-px h-32 bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden lg:block"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      />

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/60"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Content */}
      <motion.div 
        className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12 w-full pt-32 pb-20 lg:pt-40 lg:pb-32"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Label with Line Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 overflow-hidden"
            >
              <motion.span 
                className="h-px bg-accent"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.span 
                className="section-label"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Digital Creative Studio
              </motion.span>
            </motion.div>

            {/* Main Title with Stagger */}
            <h1 className="title-display overflow-hidden">
              {['Creating', 'Digital', 'Excellence'].map((word, i) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    className={`block ${i === 1 ? 'text-gradient' : ''} ${i === 2 ? 'text-accent' : ''}`}
                    initial={{ y: '100%', rotateX: -45 }}
                    animate={{ y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.2 + i * 0.15,
                      ease: [0.25, 0.4, 0.25, 1]
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Description with Character Animation */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                className="max-w-xl text-lg text-muted-foreground leading-relaxed"
              >
                私たちは、テクノロジーとクリエイティビティの融合で、
                <br className="hidden sm:block" />
                ビジネスの可能性を最大化します。
              </motion.p>
            </div>

            {/* CTA Buttons with Scale Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/works"
                  className="group flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-foreground transition-all duration-300 hover:gap-5 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                >
                  <span>View Works</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="group flex items-center gap-3 rounded-full border border-foreground/20 px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:bg-foreground/5"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Stats with Stagger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 lg:gap-6"
          >
            {[
              { number: "200+", label: "Projects", subLabel: "プロジェクト実績" },
              { number: "50+", label: "Clients", subLabel: "取引企業数" },
              { number: "15", label: "Years", subLabel: "創業からの年数" },
              { number: "98%", label: "Satisfaction", subLabel: "顧客満足度" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + i * 0.1,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.span 
            className="text-xs tracking-widest text-muted-foreground uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll
          </motion.span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Side Text */}
      <motion.div 
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span className="text-xs tracking-[0.3em] text-muted-foreground [writing-mode:vertical-lr] rotate-180">
          NEXUS CREATIVE 2024
        </span>
      </motion.div>

      {/* Corner Decorations */}
      <motion.div 
        className="absolute top-8 right-8 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="relative w-24 h-24">
          <motion.div 
            className="absolute top-0 right-0 w-12 h-px bg-accent/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            style={{ transformOrigin: 'right' }}
          />
          <motion.div 
            className="absolute top-0 right-0 w-px h-12 bg-accent/50"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            style={{ transformOrigin: 'top' }}
          />
        </div>
      </motion.div>
      <motion.div 
        className="absolute bottom-8 left-8 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="relative w-24 h-24">
          <motion.div 
            className="absolute bottom-0 left-0 w-12 h-px bg-accent/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-px h-12 bg-accent/50"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            style={{ transformOrigin: 'bottom' }}
          />
        </div>
      </motion.div>
    </section>
  )
}

function StatCard({ number, label, subLabel }: { number: string; label: string; subLabel: string }) {
  return (
    <motion.div 
      className="group relative p-5 lg:p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm card-shine overflow-hidden"
      whileHover={{ 
        y: -5,
        borderColor: 'rgba(163, 230, 53, 0.3)',
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated corner dot */}
      <motion.div 
        className="absolute top-3 right-3 h-2 w-2 rounded-full bg-accent/50"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="block text-3xl lg:text-4xl font-bold text-foreground">{number}</span>
      <span className="block mt-1 text-sm font-medium tracking-wide text-foreground">{label}</span>
      <span className="block mt-0.5 text-xs text-muted-foreground">{subLabel}</span>
      
      {/* Hover gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </motion.div>
  )
}
