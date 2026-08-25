import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { contact } from '@/content/tech'
import { site } from '@/content/site'
import { CONTACT_EMAIL, mailtoHref } from '@/lib/utils'

const DETAILS = [
  { label: 'Email', value: CONTACT_EMAIL, href: mailtoHref() },
  { label: 'Telephone', value: site.phone, href: undefined },
  { label: 'LinkedIn', value: site.linkedin, href: undefined },
] as const

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

          <Reveal
            delay={200}
            className="bg-slate-deep px-7 py-8 text-paper lg:col-span-4 lg:col-start-9"
          >
            <dl className="flex flex-col gap-6">
              {DETAILS.map((detail) => (
                <div key={detail.label}>
                  <dt className="type-label text-wheat">{detail.label}</dt>
                  <dd className="type-title mt-2 text-2xl">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="inline-flex min-h-11 items-center transition-colors hover:text-wheat"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="inline-flex min-h-11 items-center">{detail.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
