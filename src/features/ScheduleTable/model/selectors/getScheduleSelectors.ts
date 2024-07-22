import { IStateSchema } from '@/app/providers/StoreProvider'

export const getScheduleData = (state: IStateSchema) => state.schedule.data
export const getScheduleError = (state: IStateSchema) => state.schedule.error
export const getScheduleIsLoading = (state: IStateSchema) => state.schedule.isLoading
