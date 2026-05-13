import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export type ResearchTrack = "general-research" | "deep-research"

export type ResearchFrontmatter = {
  title: string
  date: string
  summary: string
  tags: string[]
  coverImage?: string
  author?: string
}

export type ResearchArticleMeta = ResearchFrontmatter & {
  slug: string
  track: ResearchTrack
}

export type ResearchArticle = {
  meta: ResearchArticleMeta
  content: string
}

const CONTENT_ROOT = path.join(process.cwd(), "content", "analyses-development")

function getTrackDir(track: ResearchTrack) {
  return path.join(CONTENT_ROOT, track)
}

function isMarkdownFile(filename: string) {
  const ext = path.extname(filename).toLowerCase()
  return ext === ".md" || ext === ".mdx"
}

function slugFromFilename(filename: string) {
  return path.basename(filename, path.extname(filename))
}

function normalizeTags(raw: unknown): string[] {
  if (Array.isArray(raw)) return raw.filter((t) => typeof t === "string") as string[]
  if (typeof raw === "string") return raw.split(",").map((s) => s.trim()).filter(Boolean)
  return []
}

function parseFrontmatter(track: ResearchTrack, slug: string, raw: Record<string, unknown>): ResearchArticleMeta {
  const title = typeof raw.title === "string" ? raw.title : slug
  const date = typeof raw.date === "string" ? raw.date : ""
  const summary = typeof raw.summary === "string" ? raw.summary : ""
  const tags = normalizeTags(raw.tags)
  const coverImage = typeof raw.coverImage === "string" ? raw.coverImage : undefined
  const author = typeof raw.author === "string" ? raw.author : undefined

  return { track, slug, title, date, summary, tags, coverImage, author }
}

export function getAllResearchSlugs(track: ResearchTrack): string[] {
  const dir = getTrackDir(track)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter(isMarkdownFile)
    .map(slugFromFilename)
    .sort((a, b) => a.localeCompare(b))
}

export function getAllResearchMeta(track: ResearchTrack): ResearchArticleMeta[] {
  const dir = getTrackDir(track)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter(isMarkdownFile)
    .map((filename) => {
      const slug = slugFromFilename(filename)
      const fullPath = path.join(dir, filename)
      const rawFile = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(rawFile)
      return parseFrontmatter(track, slug, data as Record<string, unknown>)
    })
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
}

export function getResearchArticleBySlug(track: ResearchTrack, slug: string): ResearchArticle | null {
  const dir = getTrackDir(track)
  const mdxPath = path.join(dir, `${slug}.mdx`)
  const mdPath = path.join(dir, `${slug}.md`)

  const fullPath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null
  if (!fullPath) return null

  const rawFile = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(rawFile)
  return {
    meta: parseFrontmatter(track, slug, data as Record<string, unknown>),
    content,
  }
}

