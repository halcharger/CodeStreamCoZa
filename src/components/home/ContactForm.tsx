import { useState, type FormEvent } from 'react'
import { LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import {
  contactFieldLimits,
  isContactFormValid,
  type ContactFormValues,
} from '@/lib/contact'
import { CONTACT_EMAIL, mailtoHref, cn } from '@/lib/utils'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const emptyValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
}

/** Stable IDs — avoid useId() here; prerender HTML must match client hydration. */
const FIELD_IDS = {
  name: 'contact-name',
  email: 'contact-email',
  message: 'contact-message',
  company: 'contact-company',
} as const

const fieldClassName =
  'min-h-11 w-full border border-slate-line bg-slate-raised px-3 py-2.5 text-md text-paper outline-none transition-colors placeholder:text-on-slate-meta focus:border-aqua'

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyValues)
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const valid = isContactFormValid(values)
  const busy = status === 'submitting'
  const canSubmit = valid && !busy

  function updateField<K extends keyof ContactFormValues>(key: K, value: string) {
    setValues((current) => ({ ...current, [key]: value }))
    if (status === 'success' || status === 'error') {
      setStatus('idle')
      setErrorMessage(null)
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!canSubmit) return

    setStatus('submitting')
    setErrorMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          company: honeypot,
        }),
      })

      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null

      if (!response.ok || !payload?.ok) {
        setStatus('error')
        setErrorMessage(payload?.error ?? 'Something went wrong. Please try again.')
        return
      }

      setValues(emptyValues)
      setHoneypot('')
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Could not reach the server. Please try again or email us directly.')
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative bg-slate-deep px-7 py-8 text-paper"
      noValidate
      aria-busy={busy}
    >
      <p className="type-label text-wheat">Contact</p>
      <p className="mt-2 text-sm leading-6 text-on-slate">
        Send a note and we’ll get back to you. Or email{' '}
        <a href={mailtoHref()} className="text-aqua underline-offset-2 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor={FIELD_IDS.name} className="type-label text-aqua">
            Name
          </label>
          <input
            id={FIELD_IDS.name}
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={contactFieldLimits.name}
            value={values.name}
            disabled={busy}
            onChange={(event) => updateField('name', event.target.value)}
            className={cn(fieldClassName, 'mt-2')}
          />
        </div>

        <div>
          <label htmlFor={FIELD_IDS.email} className="type-label text-aqua">
            Email
          </label>
          <input
            id={FIELD_IDS.email}
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={contactFieldLimits.email}
            value={values.email}
            disabled={busy}
            onChange={(event) => updateField('email', event.target.value)}
            className={cn(fieldClassName, 'mt-2')}
          />
        </div>

        <div>
          <label htmlFor={FIELD_IDS.message} className="type-label text-aqua">
            Message
          </label>
          <textarea
            id={FIELD_IDS.message}
            name="message"
            required
            rows={5}
            maxLength={contactFieldLimits.message}
            value={values.message}
            disabled={busy}
            onChange={(event) => updateField('message', event.target.value)}
            className={cn(fieldClassName, 'mt-2 min-h-28 resize-y')}
          />
        </div>

        {/* Honeypot — hidden from people, not from naive bots */}
        <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor={FIELD_IDS.company}>Company</label>
          <input
            id={FIELD_IDS.company}
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          disabled={!canSubmit}
          className="w-full justify-center disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy ? (
            <>
              <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            'Send'
          )}
        </Button>
      </div>

      <div className="mt-4 min-h-6" aria-live="polite">
        {status === 'success' ? (
          <p className="text-sm text-wheat">Thanks — your message is on its way.</p>
        ) : null}
        {status === 'error' && errorMessage ? (
          <p className="text-sm text-coral">{errorMessage}</p>
        ) : null}
      </div>
    </form>
  )
}
