import type { Metadata } from "next"
import { PageIntro } from "@/components/page-intro"
import { FrameworkSection } from "@/components/framework-section"

export const metadata: Metadata = {
  title: "Aubrey Framework | Aubrey Intelligence",
  description:
    "A structured analysis of Aubrey de Grey's damage-repair paradigm, SENS categories, and engineering-first path to rejuvenation.",
}

export default function AubreyFrameworkPage() {
  return (
    <>
      <PageIntro
        badge="Core Theory"
        title="Aubrey Framework"
        description="A rigorous reading of the damage-repair paradigm and its implications for practical rejuvenation engineering."
      />
      <FrameworkSection />
    </>
  )
}
