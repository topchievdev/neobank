import { IPrescoringData } from '@/shared/types/loan'

export interface IPrescoringSchema {
  data?: IPrescoringData[]
  error?: string
  isLoading: boolean
}
