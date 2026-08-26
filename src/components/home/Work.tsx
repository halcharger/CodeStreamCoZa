import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { projects } from '@/content/projects'

/* Five columns at xl, four at lg (the ref drops out), and a stacked card below that.
   One DOM either way — the row is the record, the table is just how it sits at width. */
const ROW =
  'grid gap-x-7 xl:grid-cols-[54px_minmax(0,2fr)_minmax(0,3.4fr)_minmax(0,2.6fr)_104px] lg:grid-cols-[minmax(0,2fr)_minmax(0,3.4fr)_minmax(0,2.6fr)_104px]'

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 bg-slate-deep py-16 text-paper sm:py-20 lg:py-26">
      <Container>
        <Eyebrow tone="slate">Selected work</Eyebrow>
        <Reveal delay={60}>
          <h2 className="type-display mt-6 text-4xl leading-[1.04] sm:text-6xl lg:text-7xl">
            Systems in production,
            <span className="block text-aqua">not slideware</span>
          </h2>
        </Reveal>

        <div className="mt-10 lg:mt-14">
          <div
            className={`${ROW} type-label hidden border-b-2 border-coral pb-3 text-2xs text-aqua lg:grid`}
            aria-hidden="true"
          >
            <span className="hidden xl:block">No.</span>
            <span>Client</span>
            <span>What we built</span>
            <span>Stack</span>
            <span className="text-right">Where</span>
          </div>

          <ul>
            {projects.map((project, index) => (
              <Reveal
                key={project.ref}
                el="li"
                delay={Math.min(index * 40, 420)}
                className={`${ROW} group relative items-baseline border-b border-slate-line py-5 transition-colors duration-200 hover:bg-slate-raised lg:py-6`}
              >
                {/* the eyebrow rule motif again: the row draws its own edge on hover */}
                <span
                  aria-hidden="true"
                  className="absolute -left-4 top-0 h-full w-0.5 origin-top scale-y-0 bg-coral transition-transform duration-200 group-hover:scale-y-100"
                />
                <p className="hidden font-mono text-sm text-wheat transition-colors duration-200 group-hover:text-coral xl:block">
                  <span className="sr-only">Reference </span>
                  {project.ref}
                </p>

                <h3 className="type-title flex items-baseline justify-between gap-4 text-xl lg:block">
                  {project.client}
                  <span className="font-mono text-xs font-normal tracking-normal text-wheat lg:hidden">
                    {project.location}
                  </span>
                </h3>

                <p className="mt-2 text-md leading-[1.6] text-on-slate lg:mt-0">
                  {project.summary}
                </p>

                <p className="mt-2 font-mono text-sm leading-[1.65] text-on-slate-meta lg:mt-0">
                  {project.stack.join(' · ')}
                </p>

                <p className="hidden font-mono text-xs text-on-slate-meta lg:block lg:text-right">
                  {project.location}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
