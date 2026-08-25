/**
 * This section is about building clients' business systems WITH AI — the delivery
 * advantage — not about building AI products for them. Keep the register concrete:
 * what changes, what deliberately doesn't, and who stays accountable.
 */
export const aiIntro = {
  heading: 'Built faster, held to the same bar',
  body:
    'AI has changed how quickly a system can be built. It has not changed what makes one correct, maintainable, or safe to put in front of your customers.',
  aside: 'Generated code is a draft. Someone still has to be accountable for what ships.',
} as const

export type AiPractice = {
  number: string
  title: string
  body: string
}

export const aiPractices: AiPractice[] = [
  {
    number: '01',
    title: 'Agents do the typing, engineers own the design',
    body:
      'The architecture, the data model and the failure modes are still decided by people who have run production systems for two decades. What AI removes is the fortnight of boilerplate between making that decision and having a working slice to argue with — not the decision itself.',
  },
  {
    number: '02',
    title: 'Context is the actual work',
    body:
      'A coding agent is only as useful as what it can see: your schema, your conventions, your existing services, and the reason the ticket exists at all. We spend the setup time assembling that context and curating the skills an agent reuses, because it is the whole difference between plausible code and code that fits your system.',
  },
  {
    number: '03',
    title: 'Review that assumes the code is wrong',
    body:
      'Everything generated goes through the same tests, the same pipeline and the same human review as anything hand-written, and rather more scepticism — a confident wrong answer looks exactly like a right one. The speed comes from the drafting. It never comes from skipping the checks.',
  },
  {
    number: '04',
    title: 'You get a codebase, not a dependency on us',
    body:
      'Delivered quickly is worth nothing if what lands is unmaintainable. Structure, naming, tests and documentation are held to the standard your own team would have to work in — whether or not they use the same tools we did.',
  },
]
