export interface Group {
  readonly pos: number
  readonly name: string
  readonly description?: string
  readonly items: Item[]
}

export interface Item {
  readonly name: string
  readonly description?: string
  readonly ingredients?: string[]
  readonly variants: Variant[]
}

export interface Variant {
  readonly name?: string
  readonly price: number
}