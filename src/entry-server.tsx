import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { RouterProvider, createMemoryHistory } from '@tanstack/react-router'
import { buildRouter } from './router'

/** Render one route to static HTML at build time. Called by scripts/prerender.mjs. */
export async function render(url: string): Promise<string> {
  const router = buildRouter()
  router.update({
    history: createMemoryHistory({ initialEntries: [url] }),
  })
  await router.load()

  return renderToString(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
