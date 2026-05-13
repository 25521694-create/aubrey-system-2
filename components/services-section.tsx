import { FileText, Code, ShoppingBag, Megaphone, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: FileText,
    title: "Project Evaluation, Analysis & Development Consulting",
    description:
      "Assessment, analysis, development planning, and consulting for projects in the Aubrey system, and for external systems when that work creates clear strategic value for Aubrey.",
    status: "Active",
    available: true,
  },
  {
    icon: Code,
    title: "Website Development Service",
    description:
      "Website strategy, design implementation, and development for projects in the Aubrey system, and for selected external projects when they contribute meaningful leverage to Aubrey goals.",
    status: "Active",
    available: true,
  },
  {
    icon: Megaphone,
    title: "Aubrey-Aligned Advertising",
    description:
      "Advertising support for initiatives related to the Aubrey ecosystem, with a simple criterion: the campaign should provide useful value to system growth and ecosystem traction.",
    status: "Active",
    available: true,
  },
  {
    icon: ShoppingBag,
    title: "Product Sales (In Research)",
    description:
      "Future product line likely centered on Aubrey-system-related products. Product standards and selection criteria are currently under active research before rollout.",
    status: "In Research",
    available: true,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] orb orb-purple opacity-20" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 border-accent/30 bg-accent/10 text-accent">
            Service
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Aubrey-System Services
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Service offerings designed to strengthen the Aubrey ecosystem through analysis, technical execution,
            promotion, and future product infrastructure.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-6 rounded-xl transition-all overflow-hidden",
                service.available 
                  ? "glass-card card-hover cursor-pointer" 
                  : "glass-card opacity-60"
              )}
            >
              {/* Glow effect on hover for active */}
              {service.available && (
                <div className="absolute -inset-1 rounded-xl bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
              )}
              
              {/* Icon */}
              <div className={cn(
                "h-12 w-12 rounded-lg flex items-center justify-center mb-4 border",
                service.available 
                  ? "bg-accent/15 border-accent/20" 
                  : "bg-secondary/50 border-border/30"
              )}>
                <service.icon className={cn(
                  "h-6 w-6",
                  service.available ? "text-accent" : "text-muted-foreground"
                )} />
              </div>

              {/* Status badge */}
              <Badge 
                className={cn(
                  "absolute top-4 right-4 text-xs",
                  service.available 
                    ? "bg-accent/20 text-accent border-accent/30" 
                    : "bg-secondary/50 text-muted-foreground border-border/30"
                )}
              >
                {service.status}
              </Badge>

              {/* Content */}
              <h3 className={cn(
                "text-lg font-semibold transition-colors",
                service.available ? "text-foreground group-hover:text-accent" : "text-muted-foreground"
              )}>
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              {service.available && (
                <ArrowUpRight className="absolute bottom-6 right-6 h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Interested in working together?{" "}
            <Link href="/contact" className="text-accent hover:underline hover:text-glow transition-all">
              Get in touch →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
