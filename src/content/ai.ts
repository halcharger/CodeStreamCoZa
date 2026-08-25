export const aiIntro = {
  heading: 'Where AI actually pays',
  body:
    'Most AI pilots stall at the point where they meet a real system of record. That is the part we have been doing for twenty years.',
  aside: 'The model is the easy part. Everything it has to touch is not.',
} as const

export type AiPractice = {
  number: string
  title: string
  body: string
}

export const aiPractices: AiPractice[] = [
  {
    number: '01',
    title: 'Retrieval over the systems you already run',
    body:
      'Your knowledge is in SQL Server, Azure Cosmos DB, a data lake and fifteen years of documents — not in a vector database someone stood up last quarter. We build retrieval that reads those systems in place, respects the permissions already on them, and returns answers that can be traced back to a row.',
  },
  {
    number: '02',
    title: 'Agents with a known blast radius',
    body:
      'An agent that can write to a production system needs what any other deploy needs: scoped credentials, an audit trail, a rollback, and a human in the loop where the money is. We design the boundary first and the prompt second, so the result can be handed to an operations team rather than babysat by its author.',
  },
  {
    number: '03',
    title: 'Evaluation before enthusiasm',
    body:
      'We build the evaluation harness before we build the feature, against your data and your definition of a correct answer. It is the only honest way to tell whether a model change helped — and the fastest way to find out that a problem did not need a model at all.',
  },
  {
    number: '04',
    title: 'Running it after launch',
    body:
      'Cost per request, latency budgets, prompt and model versioning, drift as the underlying data moves. AI systems have an operational profile that looks nothing like a CRUD application, and it is where the second-year budget goes if nobody planned for it.',
  },
]
