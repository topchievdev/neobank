import { IStateSchema } from '@/app/providers/StoreProvider'

export const getLoanStatusStep = (state: IStateSchema) =>
  state?.loanStatus?.step || 1

export const getLoanStatusApplicationId = (state: IStateSchema) =>
  state?.loanStatus?.applicationId
