import { mainApi } from '@/shared/api/mainApi'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk'
import { finishRegistration } from './finishRegistration'
import { IScoringDataWithId } from '../../types/scoring'

const scoringData: IScoringDataWithId = {
  scoringData: {
    gender: 'MALE',
    maritalStatus: 'SINGLE',
    dependentAmount: 0,
    passportIssueDate: '12-12-2000',
    passportIssueBranch: '1231',
    employment: {
      employmentStatus: 'BUSINESS_OWNER',
      employerINN: 123123123123,
      salary: 1000000,
      position: 'OWNER',
      workExperienceTotal: 12,
      workExperienceCurrent: 5
    },
    account: '11223344556677889900'
  },
  applicationId: 1
}

jest.mock('@/shared/api/mainApi')

const mockedMainApi = jest.mocked(mainApi)

describe('finishRegistration', () => {
  test('finishRegistration fulfilled', async () => {
    mockedMainApi.put.mockReturnValue(Promise.resolve({ status: 200 }))
    const thunk = new TestAsyncThunk(finishRegistration)
    const result = await thunk.callThunk(scoringData)

    expect(thunk.dispatch).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('finishRegistration rejected', async () => {
    mockedMainApi.put.mockReturnValue(Promise.resolve({ status: 503 }))
    const thunk = new TestAsyncThunk(finishRegistration)
    const result = await thunk.callThunk(scoringData)

    expect(thunk.dispatch).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
