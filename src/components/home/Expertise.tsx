import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { capabilityIntro, techGroups } from '@/content/tech'

export function Expertise() {
  return (
    <section
      id="capability"
      className="scroll-mt-20 border-t border-rule bg-paper py-16 sm:py-20 lg:py-26"
    >
      <Container>
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Capability</Eyebrow>
            <Reveal delay={60}>
              <h2 className="type-display mt-6 max-w-[10ch] text-4xl leading-[1.08] sm:text-5xl">
                {capabilityIntro.heading}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[34ch] text-md leading-[1.72] text-body">
                {capabilityIntro.body}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:grid-cols-3">
            {techGroups.map((group, index) => (
              <Reveal
                key={group.title}
                delay={index * 90}
                className={
                  group.emphasis
                    ? 'bg-slate-deep px-6 py-7 sm:col-span-2 lg:col-span-1'
                    : 'bg-band px-6 py-7'
                }
              >
                <h3
                  className={
                    group.emphasis
                      ? 'type-label border-b-2 border-coral pb-3 text-wheat'
                      : 'type-label border-b-2 border-ink pb-3 text-body'
                  }
                >
                  {group.title}
                </h3>
                <ul
                  className={
                    'mt-4 flex flex-col gap-2.5 text-base ' +
                    (group.emphasis ? 'text-on-slate-list' : 'text-ink-soft')
                  }
                >
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
