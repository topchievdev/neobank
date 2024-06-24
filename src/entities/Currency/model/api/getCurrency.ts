import { exchangeApi } from '@/shared/api/exchangeApi'
import { ICurrencyPair } from '../types/currency'

export const getCurrency = ({ from, to }: ICurrencyPair) => {
  return exchangeApi.get(`exchange?from=${from}&to=${to}`).then((res) => ({
    currency: from.toUpperCase(),
    price: res.data.toFixed(2)
  }))
}
