import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { clientLogos } from '@/content/site'

export function Clients() {
  return (
    <section aria-label="Clients" className="border-b border-rule bg-band">
      <Container>
        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:gap-10 sm:py-10">
          <h2 className="type-eyebrow shrink-0 text-coral-deep">Shipped for</h2>

          <Reveal as="fade" className="sm:flex-1">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-7 sm:justify-between sm:gap-x-6">
              {clientLogos.map((logo) => (
                <li key={logo.name}>
                  {/*
                    mix-blend-multiply drops the white ground SPAR ships baked in, and
                    the white that `filter` leaves behind on Clifford Chance and Uniper.

                    Nothing here may use a transform: it would promote the image to its
                    own compositing layer, which costs mix-blend-mode its backdrop and
                    brings those white boxes straight back.
                  */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    style={{ filter: logo.filter ?? 'grayscale(1)' }}
                    className={`${logo.height} w-auto object-contain opacity-90 mix-blend-multiply`}
                    decoding="async"
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
