import type { Metadata } from "next"
import { PageIntro } from "@/components/page-intro"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "About & Contact | Aubrey Intelligence",
  description:
    "About and contact information for Aubrey-System, an independent longevity analysis platform focused on repair-based rejuvenation infrastructure.",
}

export default function AboutPage() {
  return (
    <>
      <PageIntro
        badge="About & Contact"
        title="About & Contact"
        description="An independent analysis layer built to strengthen serious rejuvenation biotechnology efforts through clarity, rigor, strategic insight, and direct collaboration."
      />
      <AboutSection />
      <ContactSection />
    </>
  )
}
