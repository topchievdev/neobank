import { useEffect, useState } from 'react'
import { ICurrencyPair, TCurrencyData, TCurrencyError } from '../types/currency'
import { errorHandler } from '@/shared/lib/errorHandler/errorHandler'
import { getCurrencyList } from '../api/getCurrencyList'
import { minutesToMs } from '@/shared/lib/utils/utils'

export const useGetCurrencyList = (currency: ICurrencyPair[]) => {
  const [data, setData] = useState<TCurrencyData>([])
  const [error, setError] = useState<TCurrencyError>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getData = (currency: ICurrencyPair[]) => {
    setError(null)
    setIsLoading(true)

    getCurrencyList(currency)
      .then((res) => {
        if (!res.length) {
          throw new Error('No data')
        }
        setData(res)
      })
      .catch((err) => setError(errorHandler(err)))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getData(currency)
    const updateData = setInterval(() => getData(currency), minutesToMs(15))
    return () => clearInterval(updateData)
  }, [currency])

  return { getData, data, error, isLoading }
}
