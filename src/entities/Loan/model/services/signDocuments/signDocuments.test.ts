import { mainApi } from '@/shared/api/mainApi'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk'
import { signDocuments } from './signDocuments'

const applicationId = 1

jest.mock('@/shared/api/mainApi')

const mockedMainApi = jest.mocked(mainApi)

describe('signDocuments', () => {
  test('signDocuments fulfilled', async () => {
    mockedMainApi.post.mockReturnValue(Promise.resolve({ status: 200 }))
    const thunk = new TestAsyncThunk(signDocuments)
    const result = await thunk.callThunk(applicationId)

    expect(thunk.dispatch).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('signDocuments rejected', async () => {
    mockedMainApi.post.mockReturnValue(Promise.resolve({ status: 503 }))
    const thunk = new TestAsyncThunk(signDocuments)
    const result = await thunk.callThunk(applicationId)

    expect(thunk.dispatch).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
