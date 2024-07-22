import { IOfferData } from '@/shared/types/loan'

export interface IOfferSchema {
  data?: IOfferData[]
  error?: string
  isLoading: boolean
}
