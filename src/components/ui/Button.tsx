import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* Square corners, flat fills, no shadow and no gradient — the page gets its depth
   from the colour blocks. See the design reference artboard. */
const variants = {
  primary: 'bg-coral text-coral-ink hover:bg-coral-deep hover:text-paper',
  onSlate: 'text-paper border-b-2 border-aqua pb-1 hover:text-wheat hover:border-wheat',
  onPaper: 'text-body border-b-2 border-rule pb-1 hover:text-coral-deep hover:border-coral',
} as const

type Variant = keyof typeof variants

type CommonProps = {
  variant?: Variant
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const isFill = variant === 'primary'
  const classes = cn(
    'group inline-flex items-center gap-3 text-md font-semibold transition-colors',
    // 44px minimum hit target, everywhere
    isFill ? 'min-h-11 px-6 py-4 sm:px-7' : 'min-h-11',
    variants[variant],
    className,
  )

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = props as ButtonAsButton
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={cn('size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5', className)}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  )
}
