import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type Primitive = 'rise' | 'wipe' | 'fade'
type Tag = 'div' | 'span' | 'li' | 'p' | 'section'

/**
 * The three motion primitives from the motion reference. Each plays once, on first
 * entry into the viewport, and never again on the way back up.
 *
 * The hidden state lives here rather than in the stylesheet on purpose: the
 * prerendered HTML must render at full opacity if the bundle never arrives.
 *
 * Values are passed as objects rather than variant labels deliberately — a Reveal
 * nested inside another Reveal would otherwise inherit the parent's label and never
 * run its own animation.
 */
const FROM: Record<Primitive, Record<string, number>> = {
  rise: { opacity: 0, y: 14 },
  wipe: { scaleX: 0 },
  fade: { opacity: 0 },
}

const TO: Record<Primitive, Record<string, number>> = {
  rise: { opacity: 1, y: 0 },
  wipe: { scaleX: 1 },
  fade: { opacity: 1 },
}

const DURATION: Record<Primitive, number> = { rise: 0.62, wipe: 0.52, fade: 0.72 }
const EASE: Record<Primitive, [number, number, number, number] | 'easeOut'> = {
  rise: [0.22, 0.61, 0.36, 1],
  wipe: [0.22, 0.61, 0.36, 1],
  fade: 'easeOut',
}

/* Resolved once at module scope. Calling motion.create() during render returns a new
   component type on every pass, which remounts the subtree. */
const MOTION = {
  div: motion.div,
  span: motion.span,
  li: motion.li,
  p: motion.p,
  section: motion.section,
} as const

type RevealProps = {
  children?: ReactNode
  /** Which primitive to play. Defaults to `rise`. */
  as?: Primitive
  /** Delay in milliseconds, matching the stagger table in the motion reference. */
  delay?: number
  /** Render as something other than a div. */
  el?: Tag
  className?: string
  /** Skip the viewport check — for anything above the fold at first paint. */
  immediate?: boolean
  id?: string
}

export function Reveal({
  children,
  as = 'rise',
  delay = 0,
  el = 'div',
  className,
  immediate = false,
  id,
}: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    const Static = el
    return (
      <Static className={className} id={id}>
        {children}
      </Static>
    )
  }

  const Component = MOTION[el]
  const transition = { duration: DURATION[as], ease: EASE[as], delay: delay / 1000 }

  return (
    <Component
      id={id}
      className={className}
      style={as === 'wipe' ? { transformOrigin: 'left center' } : undefined}
      initial={FROM[as]}
      transition={transition}
      {...(immediate
        ? { animate: TO[as] }
        : {
            whileInView: TO[as],
            viewport: { once: true, margin: '0px 0px -12%' },
          })}
    >
      {children}
    </Component>
  )
}
