import { useGetNews } from '../../model/hooks/useGetNews'
import { Button, Skeleton, Slider } from '@/shared/ui'
import { NewsItem } from '../NewsItem/NewsItem'
import './NewsList.scss'

export const NewsList = () => {
  const { getData, data, error, isLoading } = useGetNews()

  if (error) {
    {
      return (
        <div className="news-list__error">
          <p className="news-list__info">{error}</p>
          <Button className="news-list__button" onClick={() => getData()}>
            Try again
          </Button>
        </div>
      )
    }
  }

  if (isLoading) {
    const content = (
      <div className="news-list__link">
        <Skeleton className="news-list__img" />
        <Skeleton className="news-list__title" />
        <Skeleton className="news-list__description" />
      </div>
    )
    const slides = new Array(10)
      .fill(content)
      .map((content, key) => ({ content, key }))
    return <Slider slides={slides} />
  }

  if (data) {
    const slides = data.map((item) => ({
      content: <NewsItem item={item} />,
      key: item!.description
    }))
    return <Slider slides={slides} />
  }
}
