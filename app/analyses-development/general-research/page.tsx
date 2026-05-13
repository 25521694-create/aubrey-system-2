import type { Metadata } from "next"
import { ArrowUpRight, CalendarDays } from "lucide-react"
import Link from "next/link"
import { PageIntro } from "@/components/page-intro"
import { Badge } from "@/components/ui/badge"
import { getAllResearchMeta } from "@/lib/research-content"

export const metadata: Metadata = {
  title: "General Research | Analyses & Development | Aubrey Intelligence",
  description: "General Research articles for developing the Aubrey system as a whole.",
}

export default function GeneralResearchListingPage() {
  const posts = getAllResearchMeta("general-research").map((meta) => ({
    title: meta.title,
    summary: meta.summary,
    date: meta.date,
    href: `/analyses-development/general-research/${meta.slug}`,
    tags: meta.tags,
  }))

  return (
    <>
      <PageIntro
        badge="Research Track"
        title="General Research"
        description="Strategic direction, ecosystem-level analysis, roadmap thinking, and cross-domain coordination that strengthens the entire Aubrey framework."
      />
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 grid gap-5">
            {posts.map((post) => (
              <Link key={post.href} href={post.href} className="group relative rounded-xl glass-card p-6 card-hover block">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="text-xs border-border/50 bg-secondary/50">
                      General Research
                    </Badge>
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs border-border/50 bg-secondary/30 text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
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
      </section>
    </>
  )
}

