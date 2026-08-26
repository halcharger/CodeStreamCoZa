export type TechGroup = {
  title: string
  items: string[]
  /**
   * Card ground. All three differ, so the set reads as three blocks rather than a
   * pair plus an odd one out: warm neutral, cool tint, then the dark card that
   * carries the emphasis of the section.
   */
  tone: 'warm' | 'cool' | 'dark'
}

export const capabilityIntro = {
  heading: 'What we work in',
  body:
    'Deep in the Microsoft stack, comfortable outside it. We pick the boring option unless there is a reason not to.',
} as const

export const techGroups: TechGroup[] = [
  {
    title: 'Cloud & data',
    tone: 'warm',
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
    tone: 'cool',
    items: [
      'C# / .NET',
      'ASP.NET Core',
      'TypeScript',
      'Angular',
      'React',
      'Node.js',
      'SignalR',
      'GraphQL',
      'React Native',
    ],
  },
  {
    // This card is about building your systems WITH AI, not about building AI
    // products. Name the tools and the practices, not the buzzwords.
    title: 'AI systems',
    tone: 'dark',
    items: [
      'Claude Code',
      'OpenAI Codex',
      'Grok',
      'Context engineering',
      'Skills curation',
      'Subagent orchestration',
      'MCP tool integration',
      'Spec-driven delivery',
      'Automated code review',
    ],
  },
]

export const contact = {
  heading: ["Tell us what", "isn't working yet"] as const,
  body:
    'Most conversations start with a system that has outgrown itself, or an AI pilot that works in a demo and nowhere else. Send us the shape of the problem and we will tell you honestly whether we are the right people for it.',
} as const
