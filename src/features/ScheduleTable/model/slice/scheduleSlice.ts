import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IScheduleData, IScheduleSchema } from '../types/schedule'
import { getApplicationById } from '../services/getApplicationById'

const initialState: IScheduleSchema = {
  data: undefined,
  error: undefined,
  isLoading: false
}

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = undefined
    }
  },
  extraReducers: ({ addCase }) => {
    addCase(getApplicationById.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    addCase(
      getApplicationById.fulfilled,
      (state, action: PayloadAction<IScheduleData[]>) => {
        state.isLoading = false
        state.data = action.payload
      }
    )
    addCase(getApplicationById.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: scheduleReducer } = scheduleSlice
export const { actions: scheduleActions } = scheduleSlice
