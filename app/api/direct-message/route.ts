type DirectMessagePayload = {
  name?: string
  email?: string
  message?: string
}

export const runtime = "nodejs"

type ResendSendEmailResponse =
  | { id: string }
  | {
      name: string
      message: string
      statusCode?: number
    }

export async function POST(request: Request) {
  const requestId = crypto.randomUUID()

  let body: DirectMessagePayload
  try {
    body = (await request.json()) as DirectMessagePayload
  } catch (error) {
    console.error("[direct-message] invalid json", { requestId, error })
    return Response.json({ error: "Invalid request body." }, { status: 400 })
  }

  const email = body.email?.trim() ?? ""
  const message = body.message?.trim() ?? ""
  const name = body.name?.trim() ?? "Anonymous"

  if (!email || !message) {
    return Response.json(
      { error: "Email and message are required." },
      { status: 400 }
    )
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL

  if (!resendApiKey || !toEmail || !fromEmail) {
    console.error("[direct-message] missing env", {
      requestId,
      hasResendApiKey: Boolean(resendApiKey),
      hasToEmail: Boolean(toEmail),
      hasFromEmail: Boolean(fromEmail),
    })
    return Response.json(
      { error: "Messaging service is not configured. Please try again later." },
      { status: 500 }
    )
  }

  const subject = `New website DM from ${name}`
  const createdAt = new Date().toISOString()

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text: `You received a new direct message.\n\nFrom: ${name}\nEmail: ${email}\nTime: ${createdAt}\n\nMessage:\n${message}\n\nRequest ID: ${requestId}\n`,
        html: `<div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height: 1.4;">
  <p><strong>You received a new direct message.</strong></p>
  <p><strong>From:</strong> ${escapeHtml(name)}<br/>
     <strong>Email:</strong> ${escapeHtml(email)}<br/>
     <strong>Time:</strong> ${escapeHtml(createdAt)}</p>
  <hr/>
  <pre style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</pre>
  <hr/>
  <p style="color: #666; font-size: 12px; margin-top: 12px;">Request ID: ${escapeHtml(requestId)}</p>
</div>`,
      }),
    })

    const payload = (await response.json()) as ResendSendEmailResponse

    if (!response.ok || !("id" in payload)) {
      console.error("[direct-message] resend error", {
        requestId,
        status: response.status,
        payload,
      })
      return Response.json(
        { error: "Unable to send right now. Please try again later." },
        { status: 502 }
      )
    }

    return Response.json({ messageId: payload.id }, { status: 201 })
  } catch (error) {
    console.error("[direct-message] request failed", { requestId, error })
    return Response.json(
      { error: "Unable to send right now. Please try again later." },
      { status: 502 }
    )
  }
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}
