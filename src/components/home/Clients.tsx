import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { clients } from '@/content/site'

export function Clients() {
  return (
    <section aria-label="Clients" className="border-b border-rule bg-band">
      <Container>
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-baseline sm:gap-10">
          <h2 className="type-eyebrow shrink-0 text-coral-deep">Shipped for</h2>
          <Reveal as="fade">
            <ul className="flex flex-col gap-y-1 text-md text-ink-soft sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-2 sm:text-lg">
              {clients.map((name) => (
                <li key={name} className="type-title font-semibold">
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
