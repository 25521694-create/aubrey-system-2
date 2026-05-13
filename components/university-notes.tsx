import { FlaskConical, BarChart3, Cpu, Dna, Wrench, BookOpen, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const knowledgeAreas = [
  {
    icon: Dna,
    title: "Molecular Biology",
    count: 12,
    description: "Gene expression, protein synthesis, cellular repair mechanisms",
    glowColor: "cyan",
  },
  {
    icon: BarChart3,
    title: "Biostatistics",
    count: 8,
    description: "Survival analysis, clinical trial design, Bayesian inference",
    glowColor: "purple",
  },
  {
    icon: Cpu,
    title: "Systems Engineering",
    count: 6,
    description: "Complex systems modeling, feedback loops, robustness analysis",
    glowColor: "cyan",
  },
  {
    icon: FlaskConical,
    title: "Biotechnology Methods",
    count: 9,
    description: "CRISPR, gene therapy vectors, cell culture techniques",
    glowColor: "purple",
  },
  {
    icon: Wrench,
    title: "Research Methodology",
    count: 5,
    description: "Experimental design, reproducibility, scientific rigor",
    glowColor: "cyan",
  },
  {
    icon: BookOpen,
    title: "AI & Data Analysis",
    count: 7,
    description: "Machine learning in biology, bioinformatics, data pipelines",
    glowColor: "purple",
  },
]

export function UniversityNotes() {
  return (
    <section id="notes" className="relative py-24 bg-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] orb orb-cyan opacity-20" />
      <div className="absolute bottom-1/4 -left-48 w-[400px] h-[400px] orb orb-purple opacity-15" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 border-accent/30 bg-accent/10 text-accent">
            Knowledge Bank
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            University Notes
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Translating university-level technical knowledge into ecosystem insight. 
            A bridge between academic coursework and the practical needs of longevity research.
          </p>
        </div>

        {/* Visual intro block */}
        <div className="relative mb-12 p-8 rounded-2xl glass-card border-glow overflow-hidden">
          {/* Decorative grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Icon cluster */}
            <div className="flex-shrink-0 grid grid-cols-3 gap-2 p-4">
              {[Dna, BarChart3, Cpu, FlaskConical, Wrench, BookOpen].map((Icon, i) => (
                <div 
                  key={i} 
                  className="h-12 w-12 rounded-lg bg-secondary/50 border border-accent/20 flex items-center justify-center group-hover:border-accent/40 transition-all"
                  style={{ transform: `rotate(${(i - 2.5) * 3}deg)` }}
                >
                  <Icon className="h-5 w-5 text-accent/70" />
                </div>
              ))}
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-foreground">
                From Coursework to Ecosystem Value
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed max-w-xl">
                These notes represent an ongoing effort to connect formal education with the 
                specific questions that matter for understanding and supporting the Aubrey ecosystem. 
                Not polished papers—working translations.
              </p>
            </div>
          </div>
        </div>

        {/* Knowledge area cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {knowledgeAreas.map((area, index) => (
            <div
              key={index}
              className="group relative p-5 rounded-xl glass-card card-hover cursor-pointer overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className={cn(
                "absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10",
                area.glowColor === "cyan" ? "bg-accent/20" : "bg-chart-2/20"
              )} />
              
              <div className="flex items-start justify-between mb-3">
                <div className={cn(
                  "p-2.5 rounded-lg border",
                  area.glowColor === "cyan" 
                    ? "bg-accent/15 border-accent/20 text-accent" 
                    : "bg-chart-2/15 border-chart-2/20 text-chart-2"
                )}>
                  <area.icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground font-medium px-2 py-1 rounded-full bg-secondary/50">
                  {area.count} notes
                </span>
              </div>
              
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {area.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>

              <ArrowUpRight className="absolute bottom-5 right-5 h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
