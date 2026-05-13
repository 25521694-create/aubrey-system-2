import { Zap, RefreshCw, Target, Microscope } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const principles = [
  {
    icon: Microscope,
    title: "Damage-Repair Paradigm",
    description: "Aging is the accumulation of cellular and molecular damage. Address the damage directly, rather than trying to slow metabolism.",
  },
  {
    icon: RefreshCw,
    title: "Seven Categories of Damage",
    description: "From extracellular aggregates to mitochondrial mutations, each type of age-related damage requires a specific repair strategy.",
  },
  {
    icon: Target,
    title: "Longevity Escape Velocity",
    description: "Therapies don&apos;t need to be perfect—they need to extend life long enough for the next generation of therapies to arrive.",
  },
  {
    icon: Zap,
    title: "Engineering Over Gerontology",
    description: "Apply engineering principles to biology. We don&apos;t need to fully understand aging to start repairing it.",
  },
]

export function FrameworkSection() {
  return (
    <section id="framework" className="relative py-24 bg-background overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] orb orb-purple opacity-30" />
      <div className="absolute bottom-1/4 -left-32 w-[300px] h-[300px] orb orb-cyan opacity-20" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column: explanation */}
          <div>
            <Badge variant="secondary" className="mb-4 border-accent/30 bg-accent/10 text-accent">
              The Aubrey Framework
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground leading-tight">
              A Different Approach to Aging
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Aubrey de Grey&apos;s book <em className="font-serif text-foreground/90">Ending Aging</em> (2007) 
                laid out a radical but coherent framework: aging is not a mysterious process but the 
                accumulation of specific, identifiable damage.
              </p>
              <p>
                This site exists to read that framework carefully, analyze its scientific claims, 
                connect them to current research, and translate university-level technical knowledge 
                into ecosystem insight.
              </p>
              <p>
                We don&apos;t claim certainty. We embrace honest critique. But we believe the 
                damage-repair paradigm represents the most promising path toward genuine 
                rejuvenation—and it deserves rigorous analytical support.
              </p>
            </div>

            {/* Book reference */}
            <div className="mt-8 p-5 rounded-xl glass-card border-glow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-24 bg-gradient-to-br from-accent/30 to-chart-2/30 rounded-lg border border-accent/20 flex items-center justify-center glow-sm">
                  <span className="text-2xl font-serif text-accent">EA</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ending Aging</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Aubrey de Grey & Michael Rae, 2007
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    The foundational text for the SENS approach. Our analysis covers all 15 chapters.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: principles */}
          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl glass-card hover:border-accent/40 transition-all card-hover"
              >
                <div className="h-10 w-10 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/25 group-hover:glow-sm transition-all">
                  <principle.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
