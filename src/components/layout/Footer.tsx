import { Container } from '@/components/ui/Container'
import { Logo, Wordmark } from '@/components/ui/Logo'
import { site } from '@/content/site'

export function Footer() {
  return (
    <footer className="bg-slate-deep text-on-slate">
      <Container>
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between lg:py-12">
          <div className="flex items-center gap-3">
            <Logo className="size-8" />
            <div>
              <Wordmark className="text-md" />
              <p className="font-mono text-2xs tracking-[0.1em] text-on-slate-meta">
                {site.tagline}
              </p>
            </div>
          </div>

          <p className="font-mono text-2xs leading-[1.9] text-on-slate-meta sm:text-right">
            {site.legalName}
            <span className="hidden sm:inline"> · </span>
            <br className="sm:hidden" />
            Reg {site.companyRegistration} · VAT {site.vatNumber}
            <br />© {new Date().getFullYear()} · All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  )
}
