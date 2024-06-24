import { checkImageSrc } from '@/shared/lib/utils/utils'
import { validateNews } from './validateNews'
import { INewsItem } from '../types/news'

const filterByValidate = (articles: INewsItem[]): INewsItem[] => {
  const { checkProps, checkType, checkIsNotHtml, checkIsNotRemoved } = validateNews

  return articles.filter(
    (article) =>
      checkProps(article) &&
      checkType(article) &&
      checkIsNotHtml(article) &&
      checkIsNotRemoved(article)
  )
}

const filterBrokenImages = (articles: INewsItem[]) => {
  const promises = articles.map((article) => {
    if (article.urlToImage) {
      return checkImageSrc(article.urlToImage).then((res) => {
        return res === true
          ? { ...article, valid: true }
          : { ...article, valid: false }
      })
    }
  })

  return Promise.allSettled(promises).then((res) => {
    const articles = res
      .filter((item) => item.status === 'fulfilled' && item.value?.valid)
      .map((item) => {
        if (item.status === 'fulfilled' && item.value) {
          const { description, urlToImage, title, url } = item.value
          return { description, urlToImage, title, url }
        }
      })
      .filter((item): item is INewsItem => item !== undefined)

    return articles
  })
}

export const filterNews = { filterBrokenImages, filterByValidate }
