interface Env {
  RESEND_API_KEY: string
  CONTACT_TO?: string
  CONTACT_FROM?: string
}

type ContactBody = {
  name?: unknown
  email?: unknown
  message?: unknown
  company?: unknown // honeypot
}

const LIMITS = {
  name: 120,
  email: 254,
  message: 5000,
} as const

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  })
}

function asTrimmedString(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  if (!trimmed || trimmed.length > max) return null
  return trimmed
}

function isValidEmail(value: string) {
  return value.length <= LIMITS.email && EMAIL_PATTERN.test(value)
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

type PagesContext = {
  request: Request
  env: Env
}

export async function onRequestPost(context: PagesContext) {
  const { request, env } = context
  const contentType = request.headers.get('content-type') ?? ''
  if (!contentType.toLowerCase().includes('application/json')) {
    return json(415, { error: 'Unsupported media type' })
  }

  let body: ContactBody
  try {
    body = (await request.json()) as ContactBody
  } catch {
    return json(400, { error: 'Invalid JSON body' })
  }

  // Honeypot: bots that fill hidden fields get a fake success.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return json(200, { ok: true })
  }

  const name = asTrimmedString(body.name, LIMITS.name)
  const email = asTrimmedString(body.email, LIMITS.email)
  const message = asTrimmedString(body.message, LIMITS.message)

  if (!name || !email || !message || !isValidEmail(email)) {
    return json(400, { error: 'Please provide a valid name, email, and message' })
  }

  const apiKey = env.RESEND_API_KEY
  if (!apiKey) {
    return json(500, { error: 'Contact form is not configured' })
  }

  const to = env.CONTACT_TO?.trim() || 'info@codestream.co.za'
  const from =
    env.CONTACT_FROM?.trim() || 'CodeStream Website <noreply@codestream.co.za>'
  const sentAt = new Date().toISOString()

  const text = [
    'New website enquiry',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Sent at: ${sentAt}`,
    '',
    'Message:',
    message,
  ].join('\n')

  const html = `
    <div style="font-family: system-ui, sans-serif; line-height: 1.5; color: #2a3a42;">
      <h2 style="margin: 0 0 16px;">New website enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Sent at:</strong> ${escapeHtml(sentAt)}</p>
      <p style="margin-top: 20px;"><strong>Message</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Website enquiry from ${name}`,
      text,
      html,
    }),
  })

  if (!resendResponse.ok) {
    return json(502, { error: 'Failed to send message' })
  }

  return json(200, { ok: true })
}

export async function onRequest(context: PagesContext) {
  if (context.request.method === 'POST') {
    return onRequestPost(context)
  }
  return json(405, { error: 'Method not allowed' })
}
