import type { Metadata } from "next"
import { ArrowUpRight, CalendarDays } from "lucide-react"
import Link from "next/link"
import { PageIntro } from "@/components/page-intro"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { getAllResearchMeta } from "@/lib/research-content"

export const metadata: Metadata = {
  title: "Analyses & Development | Aubrey Intelligence",
  description:
    "Deep analyses, strategic commentary, and development support for rejuvenation biotechnology and longevity ecosystem infrastructure.",
}

export default function AnalysesDevelopmentPage() {
  const generalResearchPosts = getAllResearchMeta("general-research").map((meta) => ({
    title: meta.title,
    summary: meta.summary,
    date: meta.date,
    tag: "General Research",
    href: `/analyses-development/general-research/${meta.slug}`,
  }))

  const deepResearchPosts = getAllResearchMeta("deep-research").map((meta) => ({
    title: meta.title,
    summary: meta.summary,
    date: meta.date,
    tag: "Deep Research",
    href: `/analyses-development/deep-research/${meta.slug}`,
  }))

  return (
    <>
      <PageIntro
        badge="Research Library"
        title="Analyses & Development Aubrey-System"
        description="Aubrey-System research blog, organized into two layers: General Research for overall system growth, and Deep Research for targeted technical development."
      />
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            <div>
              <Badge variant="secondary" className="mb-3 border-accent/30 bg-accent/10 text-accent">
                General Research
              </Badge>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                General Research Track
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Focuses on developing the Aubrey system as a whole: strategic direction, ecosystem-level
                analysis, roadmap thinking, and cross-domain coordination that strengthens the entire
                Aubrey framework.
              </p>
              <div className="mt-6 grid gap-5">
                {generalResearchPosts.map((post) => (
                  <Link key={post.href} href={post.href} className="group relative rounded-xl glass-card p-6 card-hover block">
                    <div className="flex items-center justify-between gap-3">
                      <Badge variant="secondary" className="text-xs border-border/50 bg-secondary/50">
                        {post.tag}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <CalendarDays className="h-3 w-3" /> {post.date}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{post.summary}</p>
                    <ArrowUpRight className="absolute top-5 right-5 h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <Badge variant="secondary" className="mb-3 border-accent/30 bg-accent/10 text-accent">
                Deep Research
              </Badge>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Deep Research Track
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Focuses on information systems and AI capabilities to develop selected Aubrey branches in
                depth, using available resources from research institutes and universities for concrete,
                branch-specific progress.
              </p>
              <div className="mt-6 grid gap-5">
                {deepResearchPosts.map((post) => (
                  <Link key={post.href} href={post.href} className="group relative rounded-xl glass-card p-6 card-hover block">
                    <div className="flex items-center justify-between gap-3">
                      <Badge variant="secondary" className={cn("text-xs border-border/50 bg-secondary/50")}>
                        {post.tag}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <CalendarDays className="h-3 w-3" /> {post.date}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{post.summary}</p>
                    <ArrowUpRight className="absolute top-5 right-5 h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
