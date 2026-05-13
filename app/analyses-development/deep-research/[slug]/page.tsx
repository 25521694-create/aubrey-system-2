import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { Badge } from "@/components/ui/badge"
import { PageIntro } from "@/components/page-intro"
import { mdxComponents } from "@/components/mdx-components"
import { getAllResearchSlugs, getResearchArticleBySlug } from "@/lib/research-content"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllResearchSlugs("deep-research").map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getResearchArticleBySlug("deep-research", slug)
  if (!article) return {}
  return {
    title: `${article.meta.title} | Aubrey Intelligence`,
    description: article.meta.summary,
  }
}

export default async function DeepResearchArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getResearchArticleBySlug("deep-research", slug)
  if (!article) notFound()

  const { content } = await compileMDX({
    source: article.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
      },
    },
  })

  return (
    <>
      <PageIntro badge="Research Article" title={article.meta.title} description={article.meta.summary} />
      <section className="relative pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl glass-card border-glow p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="text-xs border-border/50 bg-secondary/50">
                Deep Research
              </Badge>
              {article.meta.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs border-border/50 bg-secondary/30 text-muted-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-6">{content}</div>
          </div>
        </div>
      </section>
    </>
  )
}

