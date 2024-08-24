import { mainApi } from '@/shared/api/mainApi'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk'
import { getApplicationById } from './getApplicationById'

const applicationData = {
  credit: {},
  status: 'CC_APPROVED'
}
const applicationId = 1

jest.mock('@/shared/api/mainApi')

const mockedMainApi = jest.mocked(mainApi)

describe('getApplicationById', () => {
  test('getApplicationById fulfilled', async () => {
    mockedMainApi.get.mockReturnValue(Promise.resolve({ data: applicationData }))
    const thunk = new TestAsyncThunk(getApplicationById)
    const result = await thunk.callThunk(applicationId)

    expect(thunk.dispatch).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('getApplicationById rejected', async () => {
    mockedMainApi.get.mockReturnValue(Promise.resolve({ status: 503 }))
    const thunk = new TestAsyncThunk(getApplicationById)
    const result = await thunk.callThunk(applicationId)

    expect(thunk.dispatch).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
