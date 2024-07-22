import { createAsyncThunk } from '@reduxjs/toolkit'
import { IScheduleData } from '../types/schedule'
import { errorHandler } from '@/shared/lib/errorHandler/errorHandler'
import { mainApi } from '@/shared/api/mainApi'

export const getApplicationById = createAsyncThunk<
  IScheduleData[],
  number,
  { rejectValue: string }
>('schedule/getApplicationById', async (applicationId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const response = await mainApi.get(`admin/application/${applicationId}`)

    if (!response.data) throw new Error('No data')
    if (response.data.status === 'CC_DENIED')
      throw new Error('Sorry, the loan has been denied.')

    return response.data.credit.paymentSchedule
  } catch (e) {
    return rejectWithValue(errorHandler(e))
  }
})
