export interface ICurrencyPair {
  from: string
  to: string
}

export interface ICurrencyItem {
  currency: string
  price: string
}

export type TCurrencyData = (ICurrencyItem | null)[]
export type TCurrencyError = string | null
