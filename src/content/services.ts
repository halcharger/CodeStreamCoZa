/** The four words that have been on the door for years. Order is the order of work. */
export type Service = {
  number: string
  name: string
  body: string
  /** Token name for the card's top edge and numeral. */
  accent: 'slate' | 'aqua' | 'wheat' | 'coral'
}

export const approachIntro = {
  heading: ['Dream', 'Design', 'Develop', 'Deliver'] as const,
  aside:
    'Four words we have had on the door for years. They are not a methodology diagram — they are the order in which we do the work.',
} as const

export const services: Service[] = [
  {
    number: '01',
    name: 'Dream',
    accent: 'slate',
    body:
      'We start with the outcome, not the ticket list. What would this business be able to do that it cannot do today, and is software actually the thing standing in the way?',
  },
  {
    number: '02',
    name: 'Design',
    accent: 'aqua',
    body:
      'Architecture decided before the first sprint: where state lives, what fails independently, what the system does at ten times the load. The expensive mistakes are all made here.',
  },
  {
    number: '03',
    name: 'Develop',
    accent: 'wheat',
    body:
      'Small increments behind tests and a build pipeline, reviewed by people who have run production. You get working software to argue with rather than a status report.',
  },
  {
    number: '04',
    name: 'Deliver',
    accent: 'coral',
    body:
      'Into your environment on a short, regular interval, with the handover written as we go. Nobody should wait six months to discover a project is behind.',
  },
]
