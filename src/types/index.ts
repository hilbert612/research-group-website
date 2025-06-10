export interface TeamMember {
  id: string
  name: string
  title: string
  description: string
  imageUrl: string
  email: string
  linkedin?: string
  google_scholar?: string
}

export interface Publication {
  id: string
  title: string
  authors: string[]
  journal: string
  year: number
  doi?: string
  abstract: string
  tags: string[]
}

export interface ResearchArea {
  id: string
  title: string
  description: string
  imageUrl: string
  projects: string[]
}

export interface NewsItem {
  id: string
  title: string
  content: string
  date: string
  category: 'publication' | 'award' | 'event' | 'general'
  imageUrl?: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  office_hours: string
} 