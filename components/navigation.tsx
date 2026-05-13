"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight, Dna } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Structure of system" },
  { href: "/analyses-development", label: "Analyses & Development Aubrey-System" },
  { href: "/research-mapping", label: "Service" },
  { href: "/about", label: "About & Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#030b1a]/90 backdrop-blur-xl border-b border-cyan-400/10"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 group-hover:bg-cyan-400/30 group-hover:border-cyan-400/50 transition-all">
              <Dna className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Aubrey-System
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                  pathname === item.href
                    ? "text-cyan-400 bg-white/5"
                    : "text-white hover:text-cyan-400 hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="sm" className="gap-1 btn-primary rounded-full">
              <Link href="/support-rmr2">
                Support RMR2 <ChevronRight className="h-3 w-3" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-white/5 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-400/10">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2.5 text-sm font-medium transition-colors rounded-md",
                    pathname === item.href
                      ? "text-cyan-400 bg-white/5"
                      : "text-white hover:text-cyan-400 hover:bg-white/5"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-cyan-400/10">
                <Button asChild size="sm" className="gap-1 btn-primary rounded-full">
                  <Link href="/support-rmr2" onClick={() => setIsOpen(false)}>
                    Support RMR2 <ChevronRight className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
