import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** 1264px of content inside 88px margins at 1440 — the grid on the design reference. */
export function Container({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1264px] px-5 sm:px-8 lg:px-12 xl:px-0', className)}>
      {children}
    </div>
  )
}
