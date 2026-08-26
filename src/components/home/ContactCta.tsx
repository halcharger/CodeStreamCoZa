import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ContactForm } from '@/components/home/ContactForm'
import { contact } from '@/content/tech'

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

          <Reveal delay={200} className="lg:col-span-5 lg:col-start-8">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
