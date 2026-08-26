import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { approachIntro, services, type Service } from "@/content/services";

const ACCENT: Record<Service["accent"], { edge: string; numeral: string }> = {
  slate: { edge: "border-t-slate-deep", numeral: "text-slate-deep" },
  aqua: { edge: "border-t-aqua", numeral: "text-aqua-deep" },
  wheat: { edge: "border-t-wheat", numeral: "text-wheat-deep" },
  coral: { edge: "border-t-coral", numeral: "text-coral-deep" },
};

export function Approach() {
  return (
    <section
      id="approach"
      className="scroll-mt-20 border-t border-rule bg-paper py-16 sm:py-20 lg:py-26"
    >
      <Container>
        <div className="grid gap-x-8 gap-y-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <Eyebrow>Approach</Eyebrow>
            <Reveal delay={60}>
              <h2 className="type-display mt-6 text-4xl leading-[1.05] sm:text-6xl">
                {approachIntro.heading.map((word) => (
                  <span key={word} className="block">
                    {word}
                  </span>
                ))}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140} className="lg:col-span-7 lg:col-start-6">
            <p className="font-serif text-2xl leading-[1.5] font-light text-body italic sm:text-3xl">
              {approachIntro.aside}
            </p>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {services.map((service, index) => {
            const accent = ACCENT[service.accent];
            return (
              <Reveal key={service.number} el="li" delay={index * 80}>
                {/* Reveal owns the entrance animation, this element owns the card and
                    its hover. Keeping them apart means a transform-based hover can never
                    collide with the inline transform Motion writes on the wrapper. */}
                <div
                  className={`group flex h-full flex-col gap-3.5 border-t-[5px] bg-band px-6 py-7 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-paper ${accent.edge}`}
                >
                  <p
                    className={`type-display text-4xl leading-[0.9] ${accent.numeral}`}
                    aria-hidden="true"
                  >
                    {service.number}
                  </p>
                  <h3 className="type-title text-xl transition-colors duration-200 group-hover:text-coral-deep">
                    {service.name}
                  </h3>
                  <p className="text-md leading-[1.7] text-body">
                    {service.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
