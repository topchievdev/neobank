import { mainApi } from '@/shared/api/mainApi'
import { errorHandler } from '@/shared/lib/errorHandler/errorHandler'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { loanStatusActions } from '../slice/loanStatusSlice'

export const sendSESCode = createAsyncThunk<
  void,
  { applicationId: number; code: string },
  { rejectValue: string }
>('code/sendSESCode', async ({ applicationId, code }, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI

  try {
    const response = await mainApi.post(`/document/${applicationId}/sign/code`, code)

    if (response.status !== 200) throw new Error('Invalid confirmation code')

    dispatch(loanStatusActions.setStep(7))
  } catch (e) {
    return rejectWithValue(errorHandler(e))
  }
})
