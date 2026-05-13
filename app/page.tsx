import type { Metadata } from "next"
import { StructureOfSystem } from "@/components/structure-of-system"

export const metadata: Metadata = {
  title: "Structure of System | Aubrey Intelligence",
  description:
    "Introduction to how Aubrey-System operates: theory development, RMR2 support, and industry services for the longevity ecosystem.",
}

export default function Home() {
  return (
    <>
      <StructureOfSystem />
    </>
  )
}
