import { ICurrencyItem } from '../types/currency'

export const transformResponseCurrencyList = (
  res: PromiseSettledResult<ICurrencyItem>[]
) => {
  return res
    .map((item) => (item.status === 'fulfilled' ? item.value : null))
    .filter((item) => !!item)
}
