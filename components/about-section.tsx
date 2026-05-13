import { Target, Eye, Scale } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Everything we publish serves one goal: supporting the path toward longevity escape velocity.",
  },
  {
    icon: Eye,
    title: "Intellectual Honesty",
    description: "We embrace uncertainty and honest critique. Progress requires acknowledging what we don&apos;t know.",
  },
  {
    icon: Scale,
    title: "Rigorous Analysis",
    description: "No hype, no vague inspiration. Our work is grounded in careful reading and technical understanding.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-secondary/20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 divider-glow" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] orb orb-cyan opacity-15" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: About text */}
          <div>
            <Badge variant="secondary" className="mb-4 border-accent/30 bg-accent/10 text-accent">
              About
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground leading-tight">
              Why This Platform Exists
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Aubrey-System is an independent research and analysis platform centered on 
                Aubrey de Grey&apos;s damage-repair framework for addressing aging.
              </p>
              <p>
                We believe the ideas in <em className="font-serif text-foreground/90">Ending Aging</em> represent 
                the most coherent and actionable approach to genuine rejuvenation. But coherence alone isn&apos;t 
                enough—these ideas need sustained analytical attention, ecosystem mapping, and strategic support.
              </p>
              <p>
                That&apos;s what we&apos;re building: an analysis layer around the Aubrey ecosystem. Not cheerleading. 
                Not hype. Careful, honest, technically-grounded intelligence for anyone who cares about 
                extending healthy human lifespan.
              </p>
              <p className="text-accent font-medium">
                We aim to help the field succeed—by understanding it clearly.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-accent/30 bg-accent/10 p-5">
              <h3 className="text-lg font-semibold text-foreground">Why Participation Matters</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Comprehensive progress toward LEV and long-horizon lifespan goals depends on collective participation.
                As more serious talent, capital, and collaborators commit to this direction, execution quality rises
                and the Aubrey ecosystem advances faster.
              </p>
            </div>
          </div>

          {/* Right: Values */}
          <div className="space-y-5">
            {values.map((value, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 rounded-xl glass-card card-hover"
              >
                <div className="flex-shrink-0 h-11 w-11 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center group-hover:bg-accent/25 transition-all">
                  <value.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  )
}
