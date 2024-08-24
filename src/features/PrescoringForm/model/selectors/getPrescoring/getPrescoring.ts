import { IStateSchema } from '@/app/providers/StoreProvider'

export const getPrescoring = (state: IStateSchema) => state.prescoring

export const getPrescoringError = (state: IStateSchema) => state.prescoring.error
export const getPrescoringIsLoading = (state: IStateSchema) =>
  state.prescoring.isLoading
