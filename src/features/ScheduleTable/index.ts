export { ScheduleTable } from './ui/ScheduleTable'
export { scheduleReducer, scheduleActions } from './model/slice/scheduleSlice'
export { IScheduleSchema } from './model/types/schedule'
export {
  getScheduleData,
  getScheduleError,
  getScheduleIsLoading
} from './model/selectors/getScheduleSelectors'
