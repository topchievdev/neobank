export interface INewsItem {
  urlToImage: string
  description: string
  title: string
  url: string
}

export type TNewsData = INewsItem[]
export type TNewsError = string | null
