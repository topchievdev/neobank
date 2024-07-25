import { IStateSchema } from '@/app/providers/StoreProvider'

export const getDocumentsError = (state: IStateSchema) => state.documents.error
export const getDocumentsIsLoading = (state: IStateSchema) =>
  state.documents.isLoading
