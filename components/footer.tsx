import Link from "next/link"
import { Dna } from "lucide-react"

const footerLinks = {
  ideals: [
    { label: "Mission: Accelerate LEV", href: "/" },
    { label: "Long-Term Vision: Indefinite Lifespan", href: "/" },
    { label: "Repair-Based Rejuvenation Commitment", href: "/" },
    { label: "Intellectual Honesty and Rigor", href: "/" },
  ],
  strategy: [
    { label: "General Research Strategy", href: "/analyses-development" },
    { label: "Deep Research Strategy", href: "/analyses-development" },
    { label: "RMR2 Support Campaign", href: "/support-rmr2" },
    { label: "Ecosystem-Building Priorities", href: "/" },
  ],
  system: [
    { label: "Structure of System", href: "/" },
    { label: "Service Model", href: "/research-mapping" },
    { label: "About & Contact", href: "/about" },
    { label: "Platform Direction", href: "/" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-accent/10">
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 divider-glow" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/20 border border-accent/30 text-accent group-hover:bg-accent/30 transition-all">
                <Dna className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                Aubrey-System
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              This platform is built to develop the Aubrey system at the broadest strategic level through
              rigorous research, coordinated execution, and long-horizon infrastructure thinking.
            </p>
            <p className="mt-6 text-xs text-muted-foreground/70">
              We aim to support the path to LEV and beyond through disciplined, system-level work.
            </p>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Ideals</h4>
            <ul className="space-y-2.5">
              {footerLinks.ideals.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Plan</h4>
            <ul className="space-y-2.5">
              {footerLinks.strategy.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">System</h4>
            <ul className="space-y-2.5">
              {footerLinks.system.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-accent/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} Aubrey-System. Independent research platform.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                RSS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
