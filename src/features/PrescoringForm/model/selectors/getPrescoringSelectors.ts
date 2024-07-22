import { IStateSchema } from '@/app/providers/StoreProvider'

export const getPrescoringData = (state: IStateSchema) => state.prescoring.data
export const getPrescoringError = (state: IStateSchema) => state.prescoring.error
export const getPrescoringIsLoading = (state: IStateSchema) =>
  state.prescoring.isLoading
