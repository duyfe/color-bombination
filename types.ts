export type CombinationImage = {
  alt: string
  url: string
}

export type CombinationColor = {
  slug: string
  hex: string
  name: string
}

export type Combination = {
  liked: boolean
  id: number
  slug: string
  color: CombinationColor
  featuredImage: CombinationImage
  name: string
  likes: number
  colors: CombinationColor[]
}

export type RelatedCombination = {
  id: number
  name: string
  slug: string
  colors: string[]
  likes: number
  liked: boolean
}

export type CombinationResponse = {
  combination: Combination
  relatedCombinations: RelatedCombination[]
}
