# CodeStream (codestream.co.za)

Static marketing website for **CodeStream Systems (PTY) LTD** — Azure specialists and custom software development, delivered with aggressive, responsible AI across development, delivery, and support.

## Stack

- React 19 + TypeScript
- Vite (+ prerender)
- TanStack Router
- Tailwind CSS v4
- Motion
- Cloudflare Pages Functions + Resend (contact form)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Contact API locally

The contact form posts to `/api/contact`, implemented as a Cloudflare Pages Function in `functions/api/contact.ts`.

```bash
cp .dev.vars.example .dev.vars   # add your RESEND_API_KEY
npm run build
npx wrangler pages dev dist
```

## Build

```bash
npm run build
npm run preview
```

Output is written to `dist/`. Cloudflare Pages also deploys the root `functions/` directory with the same build.

## Content

Marketing copy and data live under `src/content/`:

- `site.ts` — nav, hero, clients, legal
- `services.ts` — Dream / Design / Develop / Deliver
- `ai.ts` — AI engineering practices
- `projects.ts` — selected work
- `tech.ts` — capability + contact section copy

## Contact form

Fields: **name**, **email**, **message**.

- Client validation disables **Send** until all fields are valid
- Submit shows a busy state, then success or error
- Cloudflare Pages Function emails `info@codestream.co.za` via Resend (`reply_to` = visitor email)

### Secrets (Cloudflare Pages)

Set these in the Pages project → **Settings → Environment variables** for **Production** and **Preview**:

| Name | Required | Notes |
|------|----------|--------|
| `RESEND_API_KEY` | Yes | Resend API key (Secret) |
| `CONTACT_TO` | No | Defaults to `info@codestream.co.za` |
| `CONTACT_FROM` | No | Defaults to `CodeStream Website <noreply@codestream.co.za>` — domain must be verified in Resend |

### Deploy notes

- **Cloudflare Pages (Git):** build → `dist/` + auto-publish `functions/`. This is the host that supports `/api/contact`.
- **Azure Static Web Apps:** static `dist/` only — `/api/contact` will not work there.

Verify `codestream.co.za` (or your chosen from-domain) in Resend before relying on production sends.
