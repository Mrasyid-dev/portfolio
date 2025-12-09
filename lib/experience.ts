// Experience data loader
// Data diambil dari file JSON untuk mudah di-edit

import experienceData from '@/data/experience.json'

export interface ExperienceItem {
  title: string
  company: string
  period: string
  responsibilities: string[]
  achievements?: string[]
  skills: string[]
}

export const getExperience = (): ExperienceItem[] => {
  return experienceData as ExperienceItem[]
}

