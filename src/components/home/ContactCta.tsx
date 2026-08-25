import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { contact } from '@/content/tech'
import { CONTACT_EMAIL, mailtoHref } from '@/lib/utils'

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-20 bg-coral py-16 text-coral-ink sm:py-20 lg:py-26">
      <Container>
        <div className="grid gap-x-8 gap-y-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="type-display text-4xl leading-[1.02] sm:text-6xl lg:text-8xl">
                {contact.heading.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 max-w-[50ch] text-lg leading-[1.65] text-coral-body">
                {contact.body}
              </p>
            </Reveal>
          </div>

          {/* One way in, on purpose. Email is the only channel this site offers. */}
          <Reveal
            delay={200}
            className="bg-slate-deep px-7 py-8 text-paper lg:col-span-4 lg:col-start-9"
          >
            <p className="type-label text-wheat">Email</p>
            <a
              href={mailtoHref()}
              className="type-title mt-3 inline-flex min-h-11 items-center text-2xl break-all transition-colors hover:text-wheat sm:text-3xl"
            >
              {CONTACT_EMAIL}
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
