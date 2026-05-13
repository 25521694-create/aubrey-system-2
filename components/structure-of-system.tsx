import Link from "next/link"
import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Target,
  DollarSign,
  ShieldCheck,
  Megaphone,
  Globe,
  ShoppingBag,
  Network,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const developmentTracks = [
  {
    title: "General Research",
    description:
      "Macro-level development and real-world application across the full Aubrey system, grounded in the foundational framework of Ending Aging.",
    href: "/analyses-development",
    icon: Network,
  },
  {
    title: "Deep Research",
    description:
      "Direct development and implementation of specific Aubrey-system capabilities, currently focused on applying AI and Information Systems.",
    href: "/analyses-development",
    icon: BrainCircuit,
  },
]

const serviceBranches = [
  {
    title: "Project Analysis and Advisory",
    description:
      "We analyze, evaluate, and assess the quality, future outlook, and potential of projects within the Aubrey system.",
    icon: ShieldCheck,
  },
  {
    title: "Longevity Product Commerce",
    description: "We build and offer longevity-related products connected to the Aubrey system.",
    icon: ShoppingBag,
  },
  {
    title: "Aubrey Ecosystem Advertising",
    description:
      "We run advertising support for Aubrey-relevant projects, with credible and high-potential initiatives highlighted.",
    icon: Megaphone,
  },
  {
    title: "Web Infrastructure Services",
    description:
      "We design systems, internet infrastructure, and websites for projects in the field or related to the Aubrey system.",
    icon: Globe,
  },
]

export function StructureOfSystem() {
  return (
    <section className="relative min-h-screen pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <Badge variant="secondary" className="mb-4 border-accent/30 bg-accent/10 text-accent">
            Structure of System
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
            Introduction to the Aubrey-System Platform
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            This website exists to develop the Aubrey system (primarily founded and led by Aubrey de Grey) at the
            broadest strategic level. We are prepared to do whatever is necessary to help drive the Aubrey system to
            its highest potential: the near-term target is achieving LEV, and the long-term target is achieving
            indefinite lifespan.
          </p>
        </div>

        <div className="mt-14 grid gap-6">
          <article className="rounded-2xl glass-card p-6 sm:p-8 border-glow">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                1) Theory Development and Practical Application
              </h2>
            </div>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              We analyze and develop the general theory and practical application of the Aubrey system based on the
              foundation of <em className="font-serif text-foreground/90">Ending Aging</em> (Aubrey de Grey). Our work
              is divided into two research types:
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {developmentTracks.map((track) => (
                <div key={track.title} className="rounded-xl glass-card p-5 card-hover">
                  <div className="h-10 w-10 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center">
                    <track.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{track.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{track.description}</p>
                  <Link
                    href={track.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm text-accent/80 hover:text-accent transition-colors"
                  >
                    Explore track <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl glass-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                2) Support RMR2 and the LEVF Execution Path
              </h2>
            </div>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              We support the RMR2 project in reaching full funding (target: $5M-$7M USD), and we commit to doing
              whatever is necessary to support LEVF and RMR2 through subsequent execution phases.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/10 px-3 py-2 text-sm text-accent">
              <DollarSign className="h-4 w-4" />
              Funding objective for RMR2: 5-7M USD
            </div>
            <div className="mt-5">
              <Link
                href="/support-rmr2"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                View RMR2 support structure <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </article>

          <article className="rounded-2xl glass-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                3) Industry Services in Four Branches
              </h2>
            </div>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              We provide industry-facing services through four operating branches:
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {serviceBranches.map((branch) => (
                <div key={branch.title} className="rounded-xl glass-card p-5 card-hover">
                  <div className="h-10 w-10 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center">
                    <branch.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{branch.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{branch.description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
