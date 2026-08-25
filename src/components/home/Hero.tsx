import { Container } from '@/components/ui/Container'
import { Button, ArrowRight } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { hero, site } from '@/content/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-deep text-paper">
      <Container className="relative">
        {/*
          Lives inside the Container so it anchors to the content column rather than
          the full-bleed section — right-0 puts its edge on the same line the copy
          and the meta column end on.
        */}
        <svg
          className="pointer-events-none absolute top-10 right-0 hidden size-[620px] xl:block"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="20" cy="20" r="18" stroke="#54727d" strokeWidth="1" />
          <path
            d="M15 13.5l6.5 6.5-6.5 6.5"
            stroke="#54727d"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* relative so the copy is a positioned sibling and paints above the mark —
            without it the absolute svg wins the painting order and sits over the text */}
        <div className="relative grid gap-x-8 gap-y-12 py-14 sm:py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-9">
            <Reveal immediate>
              <div className="type-eyebrow flex items-center gap-3 text-wheat">
                <Reveal
                  as="wipe"
                  el="span"
                  immediate
                  delay={60}
                  className="h-0.5 w-8 shrink-0 bg-wheat"
                />
                <span>{site.positioning}</span>
              </div>
            </Reveal>

            <Reveal immediate delay={90}>
              <h1 className="type-display mt-6 text-4xl leading-[1.0] text-balance sm:text-6xl lg:text-8xl xl:text-9xl">
                {hero.headline.map((line, lineIndex) => (
                  <span key={lineIndex} className="block">
                    {line.map((run, runIndex) => (
                      <span key={runIndex} className={run.accent ? 'text-coral' : undefined}>
                        {run.text}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>
            </Reveal>

            <Reveal immediate delay={190}>
              <p className="mt-7 max-w-[56ch] text-lg leading-[1.65] text-on-slate sm:text-xl">
                {hero.body}
              </p>
            </Reveal>

            <Reveal immediate delay={280}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
                <Button href="#contact" className="justify-between sm:justify-center">
                  Start a conversation
                  <ArrowRight />
                </Button>
                <Button href="#work" variant="onSlate">
                  See the work
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal
            immediate
            delay={370}
            className="flex flex-col gap-6 font-mono text-sm leading-[1.7] text-on-slate lg:col-span-3 lg:self-end"
          >
            {hero.meta.map((block) => (
              <div key={block.label}>
                <p className="type-label text-aqua">{block.label}</p>
                <p className="mt-2">
                  {block.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
