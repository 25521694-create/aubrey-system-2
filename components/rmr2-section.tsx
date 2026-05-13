import { ArrowRight, AlertTriangle, CheckCircle2, Circle, Clock, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

const milestones = [
  {
    id: 1,
    title: "Initial Funding Secured",
    status: "completed",
    date: "Q3 2024",
  },
  {
    id: 2,
    title: "Protocol Design Complete",
    status: "completed",
    date: "Q1 2025",
  },
  {
    id: 3,
    title: "Mouse Colony Established",
    status: "in-progress",
    date: "Q2 2025",
  },
  {
    id: 4,
    title: "Intervention Phase Begins",
    status: "upcoming",
    date: "Q4 2025",
  },
  {
    id: 5,
    title: "Preliminary Results",
    status: "upcoming",
    date: "Q3 2026",
  },
  {
    id: 6,
    title: "Final Analysis",
    status: "upcoming",
    date: "Q1 2027",
  },
]

const keyMetrics = [
  { label: "Target Raised", value: "$4.2M", subtext: "of $10M goal" },
  { label: "Mice Enrolled", value: "180", subtext: "target: 500" },
  { label: "Interventions", value: "7", subtext: "SENS-aligned" },
]

export function RMR2Section() {
  const progress = 42

  return (
    <section id="rmr2" className="relative py-24 bg-secondary/20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dots-pattern opacity-20" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] orb orb-cyan opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] orb orb-purple opacity-15" />
      <div className="absolute top-0 left-0 right-0 divider-glow" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-4 glow-sm">
            <Sparkles className="h-3 w-3 mr-1" /> Critical Project
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Robust Mouse Rejuvenation 2
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The most ambitious proof-of-concept study for comprehensive rejuvenation. 
            Combining multiple SENS interventions in a single mouse lifespan study.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main content - 3 cols */}
          <div className="lg:col-span-3 space-y-8">
            {/* Progress card */}
            <div className="rounded-2xl glass-card border-glow p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Funding Progress</h3>
                <span className="text-2xl font-semibold text-accent text-glow">{progress}%</span>
              </div>
              
              <div className="relative h-3 rounded-full bg-secondary/80 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent to-chart-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-accent/50 to-chart-2/50 rounded-full blur-sm"
                  style={{ width: `${progress}%` }}
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-accent/10">
                {keyMetrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl sm:text-2xl font-semibold text-foreground">{metric.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{metric.label}</div>
                    <div className="text-xs text-muted-foreground/70">{metric.subtext}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why it matters */}
            <div className="rounded-2xl glass-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Why RMR2 Matters</h3>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  The original Robust Mouse Rejuvenation concept was proposed by Aubrey de Grey in the mid-2000s: 
                  take middle-aged mice, apply all available rejuvenation therapies simultaneously, and demonstrate 
                  that comprehensive intervention can extend healthy lifespan beyond any single therapy alone.
                </p>
                <p>
                  RMR2 is the first serious attempt to execute this vision with modern tools. If successful, 
                  it would provide the clearest evidence yet that the SENS approach can deliver genuine rejuvenation—
                  and dramatically accelerate funding for human trials.
                </p>
              </div>
            </div>

            {/* Uncertainty note */}
            <div className="rounded-xl border border-chart-4/30 bg-chart-4/10 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-chart-4 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Honest Uncertainty</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    We don&apos;t know if RMR2 will succeed. The combination of multiple therapies is complex, 
                    funding remains incomplete, and scientific risks are real. We track this project because 
                    it matters—not because we&apos;re certain of the outcome.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Timeline */}
            <div className="rounded-2xl glass-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">Milestone Timeline</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={milestone.id} className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                      <div className={cn(
                        "flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center",
                        milestone.status === "completed" && "bg-accent/20 glow-sm",
                        milestone.status === "in-progress" && "bg-chart-4/20",
                        milestone.status === "upcoming" && "bg-secondary/80"
                      )}>
                        {milestone.status === "completed" && <CheckCircle2 className="h-4 w-4 text-accent" />}
                        {milestone.status === "in-progress" && <Clock className="h-4 w-4 text-chart-4" />}
                        {milestone.status === "upcoming" && <Circle className="h-3 w-3 text-muted-foreground" />}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className={cn(
                          "w-px h-8 mt-1",
                          milestone.status === "completed" ? "bg-accent/40" : "bg-border/50"
                        )} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0 pb-2">
                      <div className="flex items-center justify-between">
                        <span className={cn(
                          "text-sm font-medium",
                          milestone.status === "upcoming" ? "text-muted-foreground" : "text-foreground"
                        )}>
                          {milestone.title}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">{milestone.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5 p-6 text-center glow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-2">Support RMR2</h3>
              <p className="text-sm text-muted-foreground mb-5">
                Donations directly fund mouse acquisition, veterinary care, and intervention protocols.
              </p>
              <Button asChild size="lg" className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 shimmer-btn glow-sm">
                <a href="https://www.levf.org/donate" target="_blank" rel="noopener noreferrer">
                  Contribute to RMR2 <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Tax-deductible via SENS Research Foundation
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  )
}
