import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { capabilityIntro, techGroups, type TechGroup } from '@/content/tech'

/* Each card hovers to a lighter version of its own ground rather than all
   converging on paper — otherwise two of the three become identical on hover,
   which is the thing these tones exist to avoid. */
const TONE: Record<TechGroup['tone'], { card: string; heading: string; list: string }> = {
  warm: {
    card: 'bg-band hover:bg-paper',
    heading: 'border-ink text-body transition-colors duration-200 group-hover:text-coral-deep',
    list: 'text-ink-soft',
  },
  cool: {
    card: 'bg-band-cool hover:bg-band-cool-raised',
    heading: 'border-ink text-body transition-colors duration-200 group-hover:text-coral-deep',
    list: 'text-ink-soft',
  },
  dark: {
    card: 'bg-slate-deep hover:bg-slate-raised',
    heading: 'border-coral text-wheat',
    list: 'text-on-slate-list',
  },
}

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
            {techGroups.map((group, index) => {
              const tone = TONE[group.tone]
              return (
                <Reveal
                  key={group.title}
                  delay={index * 90}
                  className={group.tone === 'dark' ? 'sm:col-span-2 lg:col-span-1' : undefined}
                >
                  <div
                    className={`group h-full px-6 py-7 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 ${tone.card}`}
                  >
                    <h3 className={`type-label border-b-2 pb-3 ${tone.heading}`}>{group.title}</h3>
                    <ul className={`mt-4 flex flex-col gap-2.5 text-base ${tone.list}`}>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
