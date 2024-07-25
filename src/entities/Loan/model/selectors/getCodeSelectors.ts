import { IStateSchema } from '@/app/providers/StoreProvider'

export const getCodeError = (state: IStateSchema) => state.code.error
export const getCodeIsLoading = (state: IStateSchema) => state.code.isLoading
