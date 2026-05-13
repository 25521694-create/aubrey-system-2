import Link from "next/link"
import { AtSign, Mail, MessageCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DirectMessageForm } from "@/components/direct-message-form"

const contactChannels = [
  {
    icon: AtSign,
    title: "X.com (Twitter)",
    detail: "https://x.com/tyrant2000dame",
    note: "Direct social channel for updates, discussion, and ecosystem connection.",
    href: "https://x.com/tyrant2000dame",
  },
  {
    icon: Mail,
    title: "Personal Gmail",
    detail: "tp5520138@gmail.com",
    note: "For collaboration proposals, investor inquiries, and partnership opportunities.",
    href: "mailto:tp5520138@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "Direct Message on Website",
    detail: "Open live chat below",
    note: "Real-time live chat on this site so we can reply to you directly.",
    href: "#direct-message",
  },
]

export function ContactSection() {
  return (
    <section className="relative py-24 bg-secondary/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 divider-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {contactChannels.map((channel) => (
            <article key={channel.title} className="rounded-xl glass-card p-6 card-hover">
              <div className="h-11 w-11 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center">
                <channel.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{channel.title}</h3>
              <Link
                href={channel.href}
                className="mt-2 inline-block text-sm text-accent hover:text-accent/80 transition-colors"
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {channel.detail}
              </Link>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{channel.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl glass-card border-glow p-6 sm:p-8">
          <Badge variant="secondary" className="mb-4 border-accent/30 bg-accent/10 text-accent">
            Contact
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            Join and Build Aubrey-System Together
          </h2>
          <p className="mt-3 text-muted-foreground max-w-3xl leading-relaxed">
            We believe Aubrey-system progress toward LEV and beyond depends heavily on how much humanity chooses
            to care, invest, and contribute talent. The more attention, funding, and capable people that flow into
            this direction, the faster the field can move.
          </p>
          <div className="mt-5 space-y-2 text-sm text-muted-foreground">
            <p>- We are actively welcoming talented builders, researchers, and technical operators.</p>
            <p>- We are open to investors and strategic supporters who want to accelerate credible execution.</p>
            <p>- We welcome anyone with goodwill who wants to help Aubrey-System and the broader Aubrey ecosystem grow.</p>
          </div>
        </div>

        <div id="direct-message" className="mt-10">
          <DirectMessageForm />
        </div>
      </div>
    </section>
  )
}
