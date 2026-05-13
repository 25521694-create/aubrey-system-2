"use client"

import type { MDXComponents } from "mdx/types"
import Link from "next/link"

export const mdxComponents: MDXComponents = {
  a: ({ href, children, ...props }) => {
    const isExternal = typeof href === "string" && /^https?:\/\//.test(href)
    if (typeof href === "string" && href.startsWith("/")) {
      return (
        <Link href={href} className="text-accent hover:underline" {...props}>
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        className="text-accent hover:underline"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    )
  },
  h1: ({ children, ...props }) => (
    <h1 className="mt-8 scroll-m-20 text-3xl font-semibold tracking-tight text-foreground" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-foreground" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mt-7 scroll-m-20 text-xl font-semibold tracking-tight text-foreground" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="mt-4 leading-7 text-muted-foreground" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="mt-4 ml-5 list-disc space-y-2 text-muted-foreground" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mt-4 ml-5 list-decimal space-y-2 text-muted-foreground" {...props}>
      {children}
    </ol>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="mt-6 border-l-2 border-accent/40 pl-4 text-muted-foreground italic" {...props}>
      {children}
    </blockquote>
  ),
  pre: ({ children, ...props }) => (
    <pre className="mt-6 overflow-x-auto rounded-xl bg-black/40 border border-border/40 p-4 text-sm" {...props}>
      {children}
    </pre>
  ),
  code: ({ children, ...props }) => (
    <code className="rounded-md bg-black/30 px-1.5 py-0.5 text-[0.9em] text-foreground" {...props}>
      {children}
    </code>
  ),
  table: ({ children, ...props }) => (
    <div className="mt-6 w-full overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th className="border border-border/40 bg-secondary/30 px-3 py-2 text-left font-semibold text-foreground" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border border-border/40 px-3 py-2 text-muted-foreground align-top" {...props}>
      {children}
    </td>
  ),
}

