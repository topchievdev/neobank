import { mainApi } from '@/shared/api/mainApi'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk'
import { IOfferData } from '@/shared/types/loan'
import { applyOffer } from './applyOffer'

const offerData: IOfferData = {
  applicationId: 1,
  requestedAmount: 150000,
  totalAmount: 160000,
  monthlyPayment: 28082.19,
  term: 6,
  rate: 18,
  isInsuranceEnabled: true,
  isSalaryClient: true
}

jest.mock('@/shared/api/mainApi')

const mockedMainApi = jest.mocked(mainApi)

describe('applyOffer', () => {
  test('applyOffer fulfilled', async () => {
    mockedMainApi.post.mockReturnValue(Promise.resolve({ status: 200 }))
    const thunk = new TestAsyncThunk(applyOffer)
    const result = await thunk.callThunk(offerData)

    expect(thunk.dispatch).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('applyOffer rejected', async () => {
    mockedMainApi.post.mockReturnValue(Promise.resolve({ status: 503 }))
    const thunk = new TestAsyncThunk(applyOffer)
    const result = await thunk.callThunk(offerData)

    expect(thunk.dispatch).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
