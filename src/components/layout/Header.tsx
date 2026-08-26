import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo, Wordmark } from '@/components/ui/Logo'
import { nav } from '@/content/site'
import { cn } from '@/lib/utils'

export function Header() {
  const [open, setOpen] = useState(false)

  // The panel takes over the viewport; don't let the page scroll behind it.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <header className="bg-slate-deep text-paper">
      <Container>
        <div className="flex h-16 items-center justify-between border-b border-slate-line lg:h-[82px]">
          <a href="#top" className="flex items-center gap-3" aria-label="CodeStream, home">
            <Logo />
            <Wordmark />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="type-eyebrow text-on-slate-nav transition-colors hover:text-wheat"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="type-eyebrow bg-coral px-5 py-3 font-medium text-coral-ink transition-colors hover:bg-coral-deep hover:text-paper"
            >
              Start a conversation
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="-mr-2 flex size-11 items-center justify-end lg:hidden"
          >
            {open ? (
              <X className="size-6 text-paper" aria-hidden="true" />
            ) : (
              <Menu className="size-6 text-paper" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn('bg-slate-deep lg:hidden', open && 'border-b border-slate-line')}
      >
        <Container>
          <nav className="flex flex-col py-2" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="type-eyebrow flex min-h-14 items-center border-b border-slate-line text-on-slate-nav"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="type-eyebrow my-4 flex min-h-14 items-center justify-center bg-coral font-medium text-coral-ink"
            >
              Start a conversation
            </a>
          </nav>
        </Container>
      </div>
    </header>
  )
}
