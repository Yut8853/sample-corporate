interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative bg-gradient-to-b from-muted/50 to-background pt-24 pb-12 lg:pt-32 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
