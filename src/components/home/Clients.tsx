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
            {/* Hovering one name recedes the rest. Dimming the siblings rather than
                lifting the hovered one keeps the row from jumping, and avoids an
                underline — these are client names, not links. */}
            <ul className="flex flex-col gap-y-1 text-md text-ink-soft [&:hover>li:not(:hover)]:opacity-40 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-2 sm:text-lg">
              {clients.map((name) => (
                <li
                  key={name}
                  className="type-title font-semibold transition-[opacity,color] duration-200 hover:text-ink"
                >
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
