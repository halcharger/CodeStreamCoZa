# CodeStream (codestream.co.za)

Static marketing website for **CodeStream Systems (PTY) LTD** — Azure specialists and custom software development, delivered with aggressive, responsible AI across development, delivery, and support.

## Stack

- React 19 + TypeScript
- Vite
- TanStack Router
- Tailwind CSS v4
- Framer Motion

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Output is written to `dist/` for Azure Static Web Apps.

## Content

Marketing copy and data live under `src/content/`:

- `clients.ts` — client logos
- `services.ts` — Dream / Design / Develop / Deliver
- `ai.ts` — AI-embracing positioning
- `projects.ts` — selected work
- `tech.ts` — expertise groups

## Deploy

GitHub Actions deploys to Azure Static Web Apps on push to `master` (see `.github/workflows/`).
