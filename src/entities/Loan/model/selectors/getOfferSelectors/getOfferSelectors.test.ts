import { IStateSchema } from '@/app/providers/StoreProvider'
import {
  getOffer,
  getOfferData,
  getOfferError,
  getOfferIsLoading
} from './getOfferSelectors'

const state: DeepPartial<IStateSchema> = {
  offer: {
    data: [
      {
        applicationId: 1,
        requestedAmount: 150000,
        totalAmount: 150000,
        monthlyPayment: 26702.75,
        term: 6,
        rate: 23,
        isInsuranceEnabled: false,
        isSalaryClient: false
      }
    ],
    error: 'Some error',
    isLoading: false
  }
}

describe('getPrescoring', () => {
  test('Должны вернуться все поля prescoring', () => {
    expect(getOffer(state as IStateSchema)).toEqual(state.offer)
  })

  test('Должно вернуться поле data', () => {
    expect(getOfferData(state as IStateSchema)).toBe(state.offer?.data)
  })

  test('Должно вернуться поле error', () => {
    expect(getOfferError(state as IStateSchema)).toBe('Some error')
  })

  test('Должно вернуться поле isLoading', () => {
    expect(getOfferIsLoading(state as IStateSchema)).toBe(false)
  })
})
