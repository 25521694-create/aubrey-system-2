import { Badge } from "@/components/ui/badge"

type PageIntroProps = {
  badge: string
  title: string
  description: string
}

export function PageIntro({ badge, title, description }: PageIntroProps) {
  return (
    <section className="relative pt-32 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-4 border-accent/30 bg-accent/10 text-accent">
            {badge}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground text-balance">
            {title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
