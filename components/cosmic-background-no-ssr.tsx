"use client"

import dynamic from "next/dynamic"

export const CosmicBackgroundNoSSR = dynamic(
  () => import("./cosmic-background").then((mod) => mod.CosmicBackground),
  { ssr: false }
)

