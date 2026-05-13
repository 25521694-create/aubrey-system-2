"use client"

import Script from "next/script"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void
      onLoad?: () => void
    }
    Tawk_LoadStart?: Date
  }
}

function openTawkChat() {
  if (typeof window === "undefined") return
  const api = (window.Tawk_API = window.Tawk_API || {})
  if (typeof api.maximize === "function") {
    api.maximize()
    return
  }
  const previousOnLoad = api.onLoad
  api.onLoad = function () {
    previousOnLoad?.()
    api.maximize?.()
  }
}

export function DirectMessageForm() {
  return (
    <div className="rounded-2xl glass-card border-glow p-6 sm:p-8">
      <Script id="tawk-to" strategy="afterInteractive">
        {`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6a0383ad8acb811c36855747/1joerknh7';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
        `}
      </Script>

      <div className="flex items-center gap-2">
        <MessageCircle className="h-5 w-5 text-accent" />
        <h3 className="text-xl font-semibold text-foreground">Direct Message on Website</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        Open the live chat to message us in real time. You can also use the chat bubble when it appears in the
        corner of the page.
      </p>

      <div className="mt-6">
        <Button type="button" onClick={openTawkChat} className="gap-2 btn-primary rounded-full">
          <MessageCircle className="h-4 w-4" />
          Open live chat
        </Button>
      </div>
    </div>
  )
}
