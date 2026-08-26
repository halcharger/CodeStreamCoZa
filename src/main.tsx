import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { buildRouter } from './router'
import './styles/app.css'

const router = buildRouter()

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

const app = (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

// The build prerenders the page into #root, so attach to that markup rather than
// throwing it away. An empty root (dev server, or a failed prerender) mounts fresh.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
