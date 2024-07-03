import { transformResponseCurrencyList } from '../../model/utils/transformResponseCurrencyList'
import { ICurrencyPair } from '../types/currency'
import { getCurrency } from './getCurrency'

export const getCurrencyList = (currency: ICurrencyPair[]) => {
  return Promise.allSettled(currency.map((pair) => getCurrency(pair)))
    .then((res) => {
      if (!transformResponseCurrencyList(res).length) {
        throw new Error('Sorry, no data available!')
      }
      return transformResponseCurrencyList(res)
    })
    .catch((err) => {
      throw err
    })
}
