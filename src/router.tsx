import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

/** Shared by the browser entry and the prerender pass, so both build the same tree. */
export function buildRouter() {
  return createRouter({
    routeTree,
    defaultPreload: 'intent',
    scrollRestoration: true,
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof buildRouter>
  }
}
