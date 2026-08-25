export type Project = {
  /** Display ordinal. Keep three digits; the table sets them in mono. */
  ref: string
  client: string
  summary: string
  stack: string[]
  location: string
}

export const projects: Project[] = [
  {
    ref: '001',
    client: 'Anglo American',
    summary: 'Live intraday exposure reporting for the trading desk',
    stack: ['Angular', 'C#', 'SignalR', 'Azure'],
    location: 'London',
  },
  {
    ref: '002',
    client: 'London Stock Exchange',
    summary: 'US municipal bonds information and research platform',
    stack: ['Web Components (lit)', 'GraphQL', 'AWS Lambda'],
    location: 'London',
  },
  {
    ref: '003',
    client: 'Clifford Chance',
    summary: 'Partner remuneration across multiple tax regions',
    stack: ['Angular', 'C#', 'ASP.NET Core', 'Azure SQL'],
    location: 'London',
  },
  {
    ref: '004',
    client: 'The SPAR Group',
    summary: 'Store and vendor master data, plus a reporting data lake migrated to Azure',
    stack: ['Angular', 'C# REST API', 'Azure DevOps'],
    location: 'Durban',
  },
  {
    ref: '005',
    client: 'Uniper',
    summary: 'Power purchase agreement valuation, visualising large time-series datasets',
    stack: ['Angular', 'SignalR', 'C#', 'Azure Cosmos DB'],
    location: 'Germany',
  },
  {
    ref: '006',
    client: 'Chelsea Football Club',
    summary: 'Live player analysis, ingesting streaming data from the pitch',
    stack: ['Azure', 'streaming ingest', 'C#'],
    location: 'London',
  },
  {
    ref: '007',
    client: 'Fluenty IT — Lisa',
    summary:
      'Lead-to-lease platform: marketing automation, deal management and portfolio analytics',
    stack: ['React', 'SignalR', 'C#', 'AWS', 'PostgreSQL'],
    location: 'South Africa',
  },
  {
    ref: '008',
    client: 'DigitalTwin',
    summary: 'Live asset tracking over Bluetooth low-energy beacons',
    stack: ['Angular', 'C#', 'SignalR', 'Azure IoT', 'SQL Server'],
    location: 'South Africa',
  },
  {
    ref: '009',
    client: 'SMEasy',
    summary: 'Online accounting package for small business',
    stack: ['Angular', 'ASP.NET', 'Azure SQL', 'Azure DevOps'],
    location: 'South Africa',
  },
  {
    ref: '010',
    client: 'CashRewards',
    summary: 'Customer coupon management',
    stack: ['Angular'],
    location: 'Australia',
  },
]
