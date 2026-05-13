import { ArrowUpRight, BookOpen, GraduationCap, Target, Map, Sparkles } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const featuredItems = [
  {
    id: 1,
    title: "Mitochondrial Mutations and the ALT Pathway",
    summary: "A deep analysis of Chapter 6 from Ending Aging, examining why moving mitochondrial DNA to the nucleus could be the most technically challenging of all SENS interventions.",
    tag: "Ending Aging Analysis",
    readTime: "18 min read",
    icon: BookOpen,
    featured: true,
    glowColor: "cyan",
  },
  {
    id: 2,
    title: "Statistical Frameworks for Longevity Trials",
    summary: "How survival analysis and Bayesian methods from biostatistics coursework apply to designing robust mouse rejuvenation experiments.",
    tag: "University Notes",
    readTime: "12 min read",
    icon: GraduationCap,
    glowColor: "purple",
  },
  {
    id: 3,
    title: "RMR2 Progress: Q1 2026 Update",
    summary: "Current funding status, milestone timeline, and key uncertainties in the Robust Mouse Rejuvenation 2 project.",
    tag: "RMR2",
    readTime: "8 min read",
    icon: Target,
    glowColor: "cyan",
  },
  {
    id: 4,
    title: "Mapping the Aubrey Ecosystem",
    summary: "A strategic overview of organizations, researchers, and funding flows connected to the SENS/damage-repair approach to aging.",
    tag: "Ecosystem Intelligence",
    readTime: "15 min read",
    icon: Map,
    glowColor: "purple",
  },
]

export function FeaturedGrid() {
  return (
    <section id="featured" className="relative py-24 bg-secondary/20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-0 left-0 right-0 divider-glow" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <Badge variant="secondary" className="mb-3 border-accent/30 bg-accent/10 text-accent">
              <Sparkles className="h-3 w-3 mr-1" /> Featured
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Latest Intelligence
            </h2>
            <p className="mt-2 text-muted-foreground max-w-lg">
              Deep analytical work on the science, strategy, and ecosystem of repair-based rejuvenation.
            </p>
          </div>
          <Link
            href="/analyses-development"
            className="hidden sm:flex items-center gap-1 text-sm text-accent/80 hover:text-accent transition-colors"
          >
            View all <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Featured grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {featuredItems.map((item, index) => (
            <article
              key={item.id}
              className={cn(
                "group relative rounded-xl glass-card p-6 card-hover cursor-pointer overflow-hidden",
                item.featured && index === 0 && "md:col-span-2 md:p-8"
              )}
            >
              {/* Subtle glow effect on hover */}
              <div className={cn(
                "absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10",
                item.glowColor === "cyan" ? "bg-accent/20" : "bg-chart-2/20"
              )} />
              
              {/* Top row: tag and time */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "p-1.5 rounded-md",
                    item.glowColor === "cyan" 
                      ? "bg-accent/20 text-accent" 
                      : "bg-chart-2/20 text-chart-2"
                  )}>
                    <item.icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {item.tag}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">{item.readTime}</span>
              </div>

              {/* Title */}
              <h3 className={cn(
                "font-semibold text-foreground group-hover:text-accent transition-colors leading-snug",
                item.featured && index === 0 ? "text-xl sm:text-2xl" : "text-lg"
              )}>
                {item.title}
              </h3>

              {/* Summary */}
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {item.summary}
              </p>

              {/* Read more link */}
              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Read analysis <ArrowUpRight className="h-3 w-3" />
              </div>

              {/* Featured badge */}
              {item.featured && index === 0 && (
                <Badge className="absolute top-4 right-4 bg-accent/20 text-accent border-accent/30 glow-sm">
                  Featured
                </Badge>
              )}
            </article>
          ))}
        </div>
      </div>
      
      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  )
}
