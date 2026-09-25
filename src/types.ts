export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail' | 'twitter' | 'globe'
}

export interface NavItem {
  id: string
  label: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Experience {
  company: string
  role: string
  focus?: string
  location: string
  startDate: string
  endDate: string
  current?: boolean
  highlights: string[]
  stack: string[]
}

export interface Project {
  name: string
  description: string
  tech: string[]
  links: { label: string; href: string }[]
  featured?: boolean
}

export interface Education {
  institution: string
  degree: string
  field: string
  startYear: string
  endYear: string
  description?: string
}

export interface BlogPost {
  title: string
  excerpt: string
  url: string
  /** ISO date, e.g. '2025-12-09' */
  publishedAt: string
  readMinutes: number
  tags: string[]
}
