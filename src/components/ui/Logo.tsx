import { cn } from '@/lib/utils'

/**
 * The company mark, drawn rather than loaded: a terminal prompt in a ring. Inline
 * SVG so it recolours per ground and scales without a second asset.
 */
export function Logo({
  className,
  tone = 'slate',
  title,
}: {
  className?: string
  /** `slate` for the dark ground, `paper` for light. */
  tone?: 'slate' | 'paper'
  /** Set only when the mark is the sole naming of the link; decorative otherwise. */
  title?: string
}) {
  const ring = tone === 'slate' ? '#a6c6c3' : '#5f8a86'
  const chevron = tone === 'slate' ? '#faf8f4' : '#2a3a42'

  return (
    <svg
      className={cn('size-7', className)}
      viewBox="0 0 40 40"
      fill="none"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <circle cx="20" cy="20" r="18" stroke={ring} strokeWidth="2.4" />
      <path
        d="M15 13.5l6.5 6.5-6.5 6.5"
        stroke={chevron}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M23 26.5h5" stroke="#cb8067" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('type-title text-lg tracking-[0.01em] uppercase', className)}>
      CodeStream
    </span>
  )
}
