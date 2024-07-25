import {
  ICodeSchema,
  IDenySchema,
  IDocumentsSchema,
  ILoanStatusSchema,
  IOfferSchema
} from '@/entities/Loan'
import { IPrescoringSchema } from '@/features/PrescoringForm'
import { IScheduleSchema } from '@/features/ScheduleTable'
import { IScoringSchema } from '@/features/ScoringForm'

export interface IStateSchema {
  loanStatus: ILoanStatusSchema
  prescoring: IPrescoringSchema
  offer: IOfferSchema
  scoring: IScoringSchema
  schedule: IScheduleSchema
  deny: IDenySchema
  documents: IDocumentsSchema
  code: ICodeSchema
}
