import type { Metadata } from "next"
import { ArrowUpRight, CalendarDays, ExternalLink } from "lucide-react"
import { PageIntro } from "@/components/page-intro"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const supportCampaignPosts = [
  {
    title: "RMR2 Ecosystem Readiness and Priority Dependencies",
    summary:
      "General strategic research on how governance, funding flow, and partner coordination can improve the overall probability of RMR2 execution success.",
    date: "May 2026",
    track: "General Research",
  },
  {
    title: "Comparative Review of Rejuvenation Initiatives Supporting RMR2",
    summary:
      "A high-level mapping of adjacent initiatives and their practical relevance to accelerating RMR2 milestones and long-term translational impact.",
    date: "Apr 2026",
    track: "General Research",
  },
  {
    title: "AI-Assisted Protocol Intelligence for RMR2 Operations",
    summary:
      "Deep technical research on applying information systems and AI workflows to reduce operational friction across protocol planning and execution.",
    date: "May 2026",
    track: "Deep Research",
  },
  {
    title: "University and Institute Resource Integration for RMR2",
    summary:
      "A branch-level technical roadmap for leveraging institute and university capabilities to support concrete RMR2 deliverables.",
    date: "Apr 2026",
    track: "Deep Research",
  },
]

export const metadata: Metadata = {
  title: "Support RMR2 | Aubrey Intelligence",
  description:
    "Support RMR2 through direct donation and dedicated research tracking across general and deep research tracks.",
}

export default function SupportRMR2Page() {
  return (
    <>
      <PageIntro
        badge="Support RMR2"
        title="Support RMR2"
        description="Two core support modes: direct donation to the primary RMR2 funding channel, and a dedicated research blog focused on RMR2 support strategy and execution."
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5 p-6 sm:p-8 glow-sm">
            <Badge variant="secondary" className="mb-3 border-accent/30 bg-accent/10 text-accent">
              Direct Donation
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              Main Donation Channel for RMR2
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
              This is the primary donation destination for supporting RMR2. Click below to donate directly.
            </p>
            <div className="mt-6">
              <Button asChild size="lg" className="gap-2 btn-primary rounded-full">
                <a href="https://www.levf.org/donate" target="_blank" rel="noopener noreferrer">
                  Donate Directly to LEV Foundation <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </article>

          <div className="mt-12">
            <Badge variant="secondary" className="mb-3 border-accent/30 bg-accent/10 text-accent">
              RMR2 Support Campaign
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              RMR2 Support Campaign
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Toàn bộ research phục vụ mục tiêu hỗ trợ RMR2 được gộp vào một chiến dịch duy nhất, bao gồm cả hướng
              tổng quan hệ sinh thái và hướng kỹ thuật chuyên sâu.
            </p>
            <div className="mt-6 grid gap-5">
              {supportCampaignPosts.map((post) => (
                <article key={post.title} className="group relative rounded-xl glass-card p-6 card-hover cursor-pointer">
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="secondary" className="text-xs border-border/50 bg-secondary/50">
                      {post.track}
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
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
