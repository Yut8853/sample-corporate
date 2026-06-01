import { AnimatedSection } from '@/components/animated-section'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  return (
    <AnimatedSection className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg max-w-2xl mx-auto text-pretty">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
