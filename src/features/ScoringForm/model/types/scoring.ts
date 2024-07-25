import { IScoringData } from '@/shared/types/loan'

export interface IScoringDataWithId {
  scoringData: IScoringData
  applicationId: number
}
