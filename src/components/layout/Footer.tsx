import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Logo, Wordmark } from '@/components/ui/Logo'
import { site } from '@/content/site'
import { cn } from '@/lib/utils'

export function Footer() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <footer className="bg-slate-deep text-on-slate">
      <Container>
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between lg:py-12">
          <div className="flex items-center gap-3">
            <Logo className="size-8" />
            <div>
              {/*
                Carried over from the previous site: the registration and VAT numbers
                stay out of the way until someone clicks the wordmark, which is how
                they get copied when a client needs them for procurement.

                It was a plain <p onClick> before, so it was mouse-only and silent to
                assistive tech. Same behaviour, but as a real control.

                Deliberately no hover state and no pointer cursor: this is meant to
                stay unadvertised, so it must look identical to the surrounding text.
                Do not "fix" it by adding an affordance. Keyboard focus and the
                aria-expanded announcement are what keep it reachable.
              */}
              <button
                type="button"
                onClick={() => setShowDetails((open) => !open)}
                aria-expanded={showDetails}
                aria-controls="company-details"
                className="-my-3.5 block cursor-default py-3.5 text-left"
              >
                <Wordmark className="text-md" />
                <span className="sr-only">
                  {showDetails ? 'Hide company registration details' : 'Show company registration details'}
                </span>
              </button>
              <p className="font-mono text-2xs tracking-[0.1em] text-on-slate-meta">
                {site.tagline}
              </p>
            </div>
          </div>

          <div className="font-mono text-2xs leading-[1.9] text-on-slate-meta sm:text-right">
            <p>&copy; {new Date().getFullYear()} &middot; All rights reserved</p>
            {/* Always in layout (`invisible`, not `hidden`) so toggling does not
                change footer height. Middots keep it on one line. */}
            <p
              id="company-details"
              aria-hidden={!showDetails}
              className={cn('mt-1 text-on-slate', !showDetails && 'invisible')}
            >
              {site.legalName}
              <span aria-hidden="true"> &middot; </span>
              Company registration{' '}
              <strong className="font-semibold text-paper">{site.companyRegistration}</strong>
              <span aria-hidden="true"> &middot; </span>
              VAT registration{' '}
              <strong className="font-semibold text-paper">{site.vatNumber}</strong>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
