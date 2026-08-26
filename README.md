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

The Function reads `RESEND_API_KEY` at **runtime**. If it is missing you get HTTP 500 with `Contact form is not configured`.

Set secrets in the Pages project → **Settings** → **Variables and Secrets** (or **Environment variables**):

| Name | Required | Notes |
|------|----------|--------|
| `RESEND_API_KEY` | Yes | Resend API key — type **Secret** / Encrypt |
| `CONTACT_TO` | No | Defaults to `info@codestream.co.za` |
| `CONTACT_FROM` | No | Defaults to `CodeStream Website <noreply@codestream.co.za>` — domain must be verified in Resend |

Checklist:

1. Add `RESEND_API_KEY` as a **Secret** (not a plain text var).
2. Enable it for **Preview** and **Production** (preview URLs like `feat-redesign001.*.pages.dev` use Preview).
3. Save, then **Retry deployment** or push a commit — existing deploys do not pick up new secrets until redeployed.
4. Confirm in the deploy that Functions were uploaded (`Found Functions directory at /functions`).

### Deploy notes

- **Cloudflare Pages (Git):** dashboard build command `npm run build`, output `dist/`, plus auto-publish of root `functions/`. This is the host that supports `/api/contact`.
- **`wrangler.toml`:** local Pages Functions / vars only. Do not add `pages_build_output_dir` — that makes Pages skip the dashboard build command and fail with `Output directory "dist" not found`.
- **Azure Static Web Apps:** static `dist/` only — `/api/contact` will not work there.

Verify `codestream.co.za` (or your chosen from-domain) in Resend before relying on production sends.
