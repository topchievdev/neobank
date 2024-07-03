import { filterNews } from '../utils/filterNews'
import { newsApi } from '@/shared/api/newsApi'

export const getNews = (
  country: string = 'us',
  category: string = 'business',
  quantity: number = 100
) => {
  return newsApi(
    `top-headlines?country=${country}&category=${category}&pageSize=${quantity}`
  )
    .then((res) => {
      return filterNews
        .filterBrokenImages(res.data.articles)
        .then((res) => filterNews.filterByValidate(res))
    })
    .catch((err) => {
      throw err
    })
}
