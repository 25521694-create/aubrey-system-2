import type { Metadata } from "next"
import { PageIntro } from "@/components/page-intro"
import { ServicesSection } from "@/components/services-section"

export const metadata: Metadata = {
  title: "Service | Aubrey Intelligence",
  description:
    "Service offerings for the Aubrey-System, including project analysis, consulting, website development, ecosystem advertising, and future product initiatives.",
}

export default function ResearchMappingPage() {
  return (
    <>
      <PageIntro
        badge="Service"
        title="Service"
        description="Execution-focused services that support the Aubrey-System and selected external initiatives when they provide direct strategic value to Aubrey development."
      />
      <ServicesSection />
    </>
  )
}
