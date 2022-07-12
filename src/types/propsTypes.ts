export type UserType = {
  id: string
  name: string
  balance: {
    points: number
    miles: number
    currency: number
  }
  image: string
}

export type ActivityType = {
  id: string
  date: string
  description: string
}

export type ProgramType = {
  id: string
  name: string
}

export type LevelType = {
  id: string
  order: number
  name: string
  programId: string
  description: string
}

export type UserFormattedType = {
  id: string
  name: string
  balance: {
    points: number
    miles: number
    currency: number
  }
  image: string
  currentLevel: string
  program: string
}
