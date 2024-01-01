export interface Group {
  readonly uuid: string
  readonly name: string
  readonly description?: string
  readonly items: Item[]
}

export interface Item {
  readonly name: string
  readonly description?: string
  readonly ingredients?: string[]
  readonly price: number
  readonly formattedVolume?: string
  readonly vegan?: boolean
}