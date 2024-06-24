import { isHTML } from '@/shared/lib/utils/utils'
import { INewsItem } from '../types/news'

const checkProps = (article: INewsItem) => {
  return article.urlToImage && article.description && article.title && article.url
}

const checkType = (article: INewsItem) => {
  return Object.values(article).every((item) => typeof item === 'string')
}

const checkIsNotHtml = (article: INewsItem) => {
  return !Object.values(article).some((value) => isHTML(value))
}

const checkIsNotRemoved = (article: INewsItem) => {
  return Object.values(article).every((item) => item !== '[Removed]')
}

export const validateNews = {
  checkProps,
  checkType,
  checkIsNotHtml,
  checkIsNotRemoved
}
