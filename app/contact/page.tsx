import type { Metadata } from "next"
import { PageIntro } from "@/components/page-intro"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact | Aubrey Intelligence",
  description:
    "Contact Aubrey Intelligence for research analysis, ecosystem mapping, and strategic longevity biotechnology collaborations.",
}

export default function ContactPage() {
  return (
    <>
      <PageIntro
        badge="Contact"
        title="Contact Aubrey Intelligence"
        description="Connect for collaborations, analytical support, and long-term infrastructure work in rejuvenation biotechnology."
      />
      <ContactSection />
    </>
  )
}
