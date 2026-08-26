import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

/**
 * A section label with its rule. The rule is the only thing on the site that wipes
 * rather than fades — it is where the page draws itself.
 */
export function Eyebrow({
  children,
  tone = 'paper',
  className,
  immediate = false,
}: {
  children: React.ReactNode
  tone?: 'paper' | 'slate'
  className?: string
  immediate?: boolean
}) {
  const onSlate = tone === 'slate'
  return (
    <div
      className={cn(
        'type-eyebrow flex items-center gap-3',
        onSlate ? 'text-wheat' : 'text-coral-deep',
        className,
      )}
    >
      <Reveal
        as="wipe"
        el="span"
        immediate={immediate}
        delay={immediate ? 60 : 0}
        className={cn('h-0.5 w-6 shrink-0', onSlate ? 'bg-wheat' : 'bg-coral')}
      />
      <span>{children}</span>
    </div>
  )
}
