import { cn } from '@/lib/utils'

/** Brand mark strokes — keep header + hero watermark in lockstep. */
export const logoColors = {
  slate: {
    ring: '#a6c6c3', // aqua
    chevron: '#faf8f4', // paper
    cursor: '#cb8067', // coral
  },
  paper: {
    ring: '#5f8a86', // aqua-deep
    chevron: '#2a3a42', // ink
    cursor: '#cb8067', // coral
  },
} as const

/**
 * The company mark, drawn rather than loaded: a terminal prompt in a ring. Inline
 * SVG so it recolours per ground and scales without a second asset.
 */
export function Logo({
  className,
  tone = 'slate',
  title,
  variant = 'default',
}: {
  className?: string
  /** `slate` for the dark ground, `paper` for light. */
  tone?: 'slate' | 'paper'
  /** Set only when the mark is the sole naming of the link; decorative otherwise. */
  title?: string
  /**
   * `watermark` keeps the same brand colours as the header mark but draws with a
   * finer stroke so it can sit large in the background without a CSS opacity wash
   * (which muddies aqua/coral into the slate ground).
   */
  variant?: 'default' | 'watermark'
}) {
  const { ring, chevron, cursor } = logoColors[tone]
  const strokeWidth = variant === 'watermark' ? 1.15 : 2.4

  return (
    <svg
      className={cn('size-7', className)}
      viewBox="0 0 40 40"
      fill="none"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <circle cx="20" cy="20" r="18" stroke={ring} strokeWidth={strokeWidth} />
      <path
        d="M15 13.5l6.5 6.5-6.5 6.5"
        stroke={chevron}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 26.5h5"
        stroke={cursor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
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
