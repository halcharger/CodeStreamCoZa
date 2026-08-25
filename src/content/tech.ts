export type TechGroup = {
  title: string
  items: string[]
  /** The AI column is the emphasis on this section — it inverts onto slate. */
  emphasis?: boolean
}

export const capabilityIntro = {
  heading: 'What we work in',
  body:
    'Deep in the Microsoft stack, comfortable outside it. We pick the boring option unless there is a reason not to.',
} as const

export const techGroups: TechGroup[] = [
  {
    title: 'Cloud & data',
    items: [
      'Microsoft Azure',
      'Azure DevOps',
      'Azure Data Factory',
      'Azure Cosmos DB',
      'SQL Server',
      'PostgreSQL',
      'MongoDB',
      'AWS Lambda',
      'Docker',
    ],
  },
  {
    title: 'Application',
    items: [
      'C# / .NET',
      'ASP.NET Core',
      'TypeScript',
      'Angular',
      'React',
      'Node.js',
      'SignalR',
      'GraphQL',
      'Ionic',
    ],
  },
  {
    title: 'AI systems',
    emphasis: true,
    items: [
      'Azure OpenAI',
      '[YOUR MODEL PROVIDERS]',
      'Retrieval over SQL & documents',
      'Tool-using agents',
      'Evaluation harnesses',
      '[YOUR VECTOR STORE]',
      'Prompt & model versioning',
      'Cost and latency budgeting',
    ],
  },
]

export const contact = {
  heading: ["Tell us what", "isn't working yet"] as const,
  body:
    'Most conversations start with a system that has outgrown itself, or an AI pilot that works in a demo and nowhere else. Send us the shape of the problem and we will tell you honestly whether we are the right people for it.',
} as const
