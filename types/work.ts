export type WorkOwnerType = 'owned' | 'client'

export interface WorkProject {
  id: number
  title: string
  category: string
  ownerType: WorkOwnerType
  description: string
  role: string
  scope: string
  outcome: string
  highlights: string[]
  tags: string[]
  stack: string[]
  url: string
  year: string
}
