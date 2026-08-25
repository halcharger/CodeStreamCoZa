import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { aiIntro, aiPractices } from '@/content/ai'

export function AiEngineering() {
  return (
    <section id="ai" className="scroll-mt-20 bg-paper py-16 sm:py-20 lg:py-26">
      <Container>
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>AI-assisted delivery</Eyebrow>
            <Reveal delay={60}>
              <h2 className="type-display mt-6 max-w-[16ch] text-4xl leading-[1.08] sm:text-5xl">
                {aiIntro.heading}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[36ch] text-md leading-[1.72] text-body">
                {aiIntro.body}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <blockquote className="mt-8 border-l-4 border-wheat pl-5">
                <p className="font-serif text-2xl leading-[1.5] font-light text-ink italic">
                  {aiIntro.aside}
                </p>
              </blockquote>
            </Reveal>
          </div>

          <ol className="lg:col-span-7 lg:col-start-6">
            {aiPractices.map((practice, index) => (
              <Reveal
                key={practice.number}
                el="li"
                delay={index * 90}
                className={
                  (index === 0 ? 'border-t-2 border-t-ink' : 'border-t border-rule') +
                  (index === aiPractices.length - 1 ? ' border-b-2 border-b-ink' : '')
                }
              >
                {/* The rules stay pinned to the column; only the tint bleeds past it,
                    so the hover reads as a highlight rather than a shifting grid. */}
                <div className="group -mx-4 grid gap-x-7 gap-y-3 px-4 py-8 transition-colors duration-200 hover:bg-band sm:grid-cols-[108px_minmax(0,1fr)]">
                  <p
                    className="type-display text-6xl leading-[0.9] text-coral transition-[color,translate] duration-200 group-hover:-translate-y-0.5 group-hover:text-coral-deep"
                    aria-hidden="true"
                  >
                    {practice.number}
                  </p>
                  <div>
                    <h3 className="type-title text-3xl">{practice.title}</h3>
                    <p className="mt-3 max-w-[62ch] text-md leading-[1.72] text-body">
                      {practice.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
