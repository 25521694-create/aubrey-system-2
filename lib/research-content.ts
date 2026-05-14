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

/** Filename stem (no extension), as stored on disk. */
function stemFromFilename(filename: string) {
  return path.basename(filename, path.extname(filename))
}

/**
 * URL-safe slug for routing and links. Spaces and a few reserved-ish path
 * characters are normalized so App Router + Vercel resolve the same segment
 * the listing links to (avoids 404s when the Notion export filename contains spaces).
 */
function urlSlugFromStem(stem: string): string {
  let s = stem
    .normalize("NFC")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[%#?&/\\]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
  if (!s) s = "untitled"
  return s
}

function urlSlugFromFilename(filename: string): string {
  return urlSlugFromStem(stemFromFilename(filename))
}

function normalizeRequestSlug(slug: string): string {
  let s = slug
  try {
    s = decodeURIComponent(s)
  } catch {
    /* keep raw */
  }
  return urlSlugFromStem(s)
}

function assertUniqueUrlSlugs(filenames: string[]) {
  const byUrl = new Map<string, string>()
  for (const f of filenames) {
    const u = urlSlugFromFilename(f)
    const prev = byUrl.get(u)
    if (prev) {
      throw new Error(
        `Duplicate URL slug "${u}" from files "${prev}" and "${f}". Rename one of the files (the public URL is derived from the filename).`,
      )
    }
    byUrl.set(u, f)
  }
}

function listMarkdownFiles(track: ResearchTrack): string[] {
  const dir = getTrackDir(track)
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter(isMarkdownFile)
  assertUniqueUrlSlugs(files)
  return files
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
  return listMarkdownFiles(track)
    .map(urlSlugFromFilename)
    .sort((a, b) => a.localeCompare(b))
}

export function getAllResearchMeta(track: ResearchTrack): ResearchArticleMeta[] {
  const dir = getTrackDir(track)
  const files = listMarkdownFiles(track)

  return files
    .map((filename) => {
      const slug = urlSlugFromFilename(filename)
      const fullPath = path.join(dir, filename)
      const rawFile = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(rawFile)
      return parseFrontmatter(track, slug, data as Record<string, unknown>)
    })
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
}

export function getResearchArticleBySlug(track: ResearchTrack, slug: string): ResearchArticle | null {
  const dir = getTrackDir(track)
  if (!fs.existsSync(dir)) return null

  const want = normalizeRequestSlug(slug)
  const files = fs.readdirSync(dir).filter(isMarkdownFile)
  const match = files.find((f) => urlSlugFromFilename(f) === want)
  if (!match) return null

  const fullPath = path.join(dir, match)
  const urlSlug = urlSlugFromFilename(match)

  const rawFile = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(rawFile)
  return {
    meta: parseFrontmatter(track, urlSlug, data as Record<string, unknown>),
    content,
  }
}
