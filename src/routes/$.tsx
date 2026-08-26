import { createFileRoute } from '@tanstack/react-router'
import { Container } from '@/components/ui/Container'
import { Button, ArrowRight } from '@/components/ui/Button'

export const Route = createFileRoute('/$')({
  component: NotFoundPage,
})

function NotFoundPage() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <Container>
        <p className="type-eyebrow text-coral-deep">Error 404</p>
        <h1 className="type-display mt-6 text-4xl leading-[1.02] sm:text-6xl">
          That page isn’t here
        </h1>
        <p className="mt-6 max-w-[48ch] text-md leading-[1.72] text-body">
          The link may be out of date. Everything on this site lives on the one page —
          the work, the AI practice, and how to reach us.
        </p>
        <div className="mt-9">
          <Button href="/">
            Back to the homepage
            <ArrowRight />
          </Button>
        </div>
      </Container>
    </section>
  )
}
