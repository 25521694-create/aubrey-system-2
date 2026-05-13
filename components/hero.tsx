import Link from "next/link"
import { ArrowRight, BookOpen, Activity, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Credibility line */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs text-white/70 mb-8 animate-fade-in-up">
          <Sparkles className="h-3 w-3 text-cyan-400 animate-pulse" />
          <span>Research analysis, ecosystem mapping, and strategic support for repair-based rejuvenation</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] text-balance animate-fade-in-up text-glow" style={{ animationDelay: '0.1s' }}>
          Intelligence for the
          <br />
          <span className="gradient-text">Longevity Frontier</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed text-balance animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Deep analytical coverage of Aubrey de Grey&apos;s damage-repair paradigm. 
          We read, analyze, and extend the ideas from <em className="font-serif text-white/90">Ending Aging</em>—and 
          track the path toward Robust Mouse Rejuvenation.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button size="lg" className="gap-2 px-8 h-12 text-base btn-primary rounded-full">
            <BookOpen className="h-4 w-4" />
            Read Latest Analysis
          </Button>
          <Button variant="outline" size="lg" className="gap-2 px-8 h-12 text-base btn-secondary rounded-full">
            <Activity className="h-4 w-4" />
            View RMR2 Tracker
          </Button>
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-semibold text-white text-glow">7</div>
            <div className="text-xs text-white/60 mt-1">Damage Categories</div>
          </div>
          <div className="text-center border-x border-cyan-400/20">
            <div className="text-2xl sm:text-3xl font-semibold text-white text-glow">25+</div>
            <div className="text-xs text-white/60 mt-1">Deep Analyses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-semibold text-white text-glow">1</div>
            <div className="text-xs text-white/60 mt-1">Mission: LEV</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#featured" className="text-cyan-400/60 hover:text-cyan-400 transition-colors">
            <ArrowRight className="h-5 w-5 rotate-90" />
          </Link>
        </div>
      </div>
      
      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  )
}
