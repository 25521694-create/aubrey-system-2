"use client"

import { useState } from "react"
import { Search, ChevronDown, ArrowUpRight, Clock, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  "All",
  "Ending Aging",
  "Aubrey Strategy",
  "RMR2",
  "Longevity Science",
  "University Notes",
  "Ecosystem Intel",
  "Funding",
]

const articles = [
  {
    id: 1,
    title: "Nuclear DNA Damage: What Ending Aging Gets Right (and Wrong)",
    summary: "A critical examination of Chapter 10's claims about cancer and nuclear mutations in light of 2024 research.",
    category: "Ending Aging",
    date: "Apr 28, 2026",
    readTime: "22 min",
    featured: true,
  },
  {
    id: 2,
    title: "The SENS Research Foundation Funding Landscape",
    summary: "Tracking donations, grants, and spending patterns across the core SENS-aligned organizations.",
    category: "Funding",
    date: "Apr 15, 2026",
    readTime: "14 min",
    featured: false,
  },
  {
    id: 3,
    title: "Systems Biology Approaches to Damage Quantification",
    summary: "How network models and differential equations from systems biology coursework apply to measuring biological age.",
    category: "University Notes",
    date: "Apr 8, 2026",
    readTime: "16 min",
    featured: false,
  },
  {
    id: 4,
    title: "Why RMR2 Is Different from RMR",
    summary: "The original Robust Mouse Rejuvenation project stalled. What's changed in methodology, funding, and scientific readiness?",
    category: "RMR2",
    date: "Mar 29, 2026",
    readTime: "11 min",
    featured: true,
  },
  {
    id: 5,
    title: "Crosslinks and Glucosepane: Progress Report",
    summary: "Reviewing the state of AGE-breaking drugs and Revel Pharmaceuticals' work on glucosepane.",
    category: "Longevity Science",
    date: "Mar 18, 2026",
    readTime: "19 min",
    featured: false,
  },
  {
    id: 6,
    title: "Aubrey's Strategic Communication Style",
    summary: "Analyzing how Aubrey de Grey frames longevity research for different audiences—and where it succeeds or fails.",
    category: "Aubrey Strategy",
    date: "Mar 5, 2026",
    readTime: "13 min",
    featured: false,
  },
]

export function AnalysesSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="analyses" className="relative py-24 bg-secondary/20">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 divider-glow" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <Badge variant="secondary" className="mb-3 border-accent/30 bg-accent/10 text-accent">
            Research Library
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Deep Analyses
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Original research, commentary, and strategic insight on the Aubrey ecosystem and longevity science.
          </p>
        </div>

        {/* Search and filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search analyses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/50 border-border/50 focus:border-accent/50 focus:ring-accent/20"
            />
          </div>
          <Button variant="outline" className="gap-2 w-fit border-border/50 hover:border-accent/50 hover:bg-accent/10">
            Sort by Date <ChevronDown className="h-3 w-3" />
          </Button>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-accent text-accent-foreground glow-sm"
                  : "glass-card text-muted-foreground hover:text-foreground hover:border-accent/30"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid gap-4 sm:gap-5">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group relative rounded-xl glass-card p-5 sm:p-6 card-hover cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs border-border/50 bg-secondary/50">
                      {article.category}
                    </Badge>
                    {article.featured && (
                      <Badge className="bg-accent/20 text-accent border-accent/30 gap-1 text-xs">
                        <Star className="h-2.5 w-2.5" /> Featured
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 text-xs text-muted-foreground sm:min-w-[100px]">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {article.readTime}
                  </span>
                </div>
              </div>

              {/* Arrow on hover */}
              <ArrowUpRight className="absolute top-5 right-5 h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-10 text-center">
          <Button variant="outline" className="gap-2 border-accent/30 hover:border-accent/50 hover:bg-accent/10 text-foreground">
            Load More Analyses <ChevronDown className="h-3 w-3" />
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  )
}
