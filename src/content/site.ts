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
  { label: 'AI engineering', href: '#ai' },
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

export const clients = [
  'Anglo American',
  'London Stock Exchange',
  'Clifford Chance',
  'The SPAR Group',
  'Uniper',
  'Chelsea FC',
] as const
