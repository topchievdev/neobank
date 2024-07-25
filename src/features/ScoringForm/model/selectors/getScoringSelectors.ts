import { IStateSchema } from '@/app/providers/StoreProvider'

export const getScoringError = (state: IStateSchema) => state?.scoring?.error
export const getScoringIsLoading = (state: IStateSchema) => state?.scoring?.isLoading
