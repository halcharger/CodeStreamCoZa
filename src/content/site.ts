export const site = {
  name: 'CodeStream',
  legalName: 'CodeStream Systems (Pty) Ltd',
  vatNumber: '4580279968',
  companyRegistration: '2017/049262/07',
  tagline: 'Dream, design, develop, deliver',
  positioning:
    'Software consultancy · South Africa, working with teams in London, Frankfurt and Sydney',
  url: 'https://codestream.co.za/',
  /** Bracketed values are placeholders — replace before this goes live. */
  phone: '[YOUR NUMBER]',
  linkedin: '[YOUR LINKEDIN]',
} as const

export const nav = [
  { label: 'AI delivery', href: '#ai' },
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'Capability', href: '#capability' },
] as const

export const hero = {
  headline: ['The AI part', 'is new. The', 'discipline'] as const,
  headlineAccent: "isn't.",
  body:
    'For twenty years the people here have built the systems large organisations actually run their day on — intraday exposure reporting at Anglo American, bond research at the London Stock Exchange, master data and a reporting warehouse at SPAR. We are now applying the same engineering discipline to AI.',
  meta: [
    {
      label: 'Practice',
      lines: ['Systems architecture', 'Azure & AWS platform', 'AI systems engineering'],
    },
    {
      label: 'Team',
      lines: ['Senior engineers only', '40+ years combined'],
    },
  ],
} as const

/**
 * Client logos, restored from the previous site.
 *
 * These six assets are inconsistent, which is what the per-logo fields deal with:
 *
 *  - Anglo American, LSE, Chelsea ship with real transparency. Nothing to fix.
 *  - SPAR is a red mark on a white JPEG background. mix-blend-multiply drops the
 *    white against a light ground, so it works as-is.
 *  - Clifford Chance is a WHITE wordmark on a solid black rectangle, and Uniper is
 *    a WHITE wordmark on solid blue. Both are built for dark backgrounds and would
 *    otherwise sit on this page as opaque boxes. `filter` inverts them to dark
 *    artwork on white, which multiply then keys out. Measured: this leaves 94% and
 *    76% of each file as clean ground.
 *
 * `height` is optical, not arithmetic. Divide the target mark height by the share
 * of the file the artwork actually occupies — Clifford Chance is only 46% artwork
 * and 54% padding, so it needs roughly double the height of a tight mark like
 * Anglo American to read at the same size.
 *
 * Replace any of these with an official transparent SVG and its `filter` can go.
 */
export type ClientLogo = {
  name: string
  src: string
  /** Tailwind height classes, chosen by eye against the others. */
  height: string
  /** CSS filter chain, where the source file needs keying. */
  filter?: string
}

export const clientLogos: ClientLogo[] = [
  {
    name: 'Anglo American',
    src: '/images/logos/angloamerican.svg',
    height: 'h-7 sm:h-9',
  },
  {
    name: 'London Stock Exchange',
    src: '/images/logos/londonstockexchange_logo.svg',
    height: 'h-11 sm:h-13',
  },
  {
    name: 'Clifford Chance',
    src: '/images/logos/cliffordchance.png',
    height: 'h-15 sm:h-18',
    filter: 'invert(1) contrast(1.4)',
  },
  {
    name: 'The SPAR Group',
    src: '/images/logos/SPAR.jpg',
    height: 'h-6 sm:h-7',
  },
  {
    name: 'Uniper',
    src: '/images/logos/uniper.png',
    height: 'h-12 sm:h-14',
    filter: 'grayscale(1) invert(1) contrast(3.4) brightness(1.35)',
  },
  {
    name: 'Chelsea Football Club',
    src: '/images/logos/chelsea.webp',
    height: 'h-14 sm:h-16',
  },
]
