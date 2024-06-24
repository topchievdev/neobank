import { useEffect, useState } from 'react'
import { getNews } from '../api/getNews'
import { TNewsData, TNewsError } from '../types/news'
import { errorHandler } from '@/shared/lib/errorHandler/errorHandler'
import { LOCAL_STORAGE_NEWS_LIST_KEY } from '@/shared/const/localstorage'
import {
  addToLocalStorage,
  getFromLocalStorage
} from '@/shared/lib/utils/localstorage'

export const useGetNews = () => {
  const [data, setData] = useState<TNewsData>([])
  const [error, setError] = useState<TNewsError>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getData = () => {
    setError(null)
    setIsLoading(true)

    getNews()
      .then((res) => {
        if (!res.length) {
          throw new Error('No data')
        }
        setData(res)
        addToLocalStorage<TNewsData>(LOCAL_STORAGE_NEWS_LIST_KEY, res, 15)
      })
      .catch((err) => setError(errorHandler(err)))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    const news = getFromLocalStorage<TNewsData>(LOCAL_STORAGE_NEWS_LIST_KEY)
    news ? setData(news) : getData()
  }, [])

  return { getData, data, error, isLoading }
}
