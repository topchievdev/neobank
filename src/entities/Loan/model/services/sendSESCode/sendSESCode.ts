import { createAsyncThunk } from '@reduxjs/toolkit'
import { mainApi } from '@/shared/api/mainApi'
import { loanStatusActions } from '../../slice/loanStatusSlice'

export const sendSESCode = createAsyncThunk<
  void,
  { applicationId: number; code: string },
  { rejectValue: string }
>('code/sendSESCode', async ({ applicationId, code }, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI

  try {
    await mainApi.post(`/document/${applicationId}/sign/code`, code)

    dispatch(loanStatusActions.setStep(7))
  } catch (e) {
    return rejectWithValue('Invalid confirmation code')
  }
})
