import { INewsItem } from '../../model/types/news'
import { classNames } from '@classNames'

interface INewsItemProps {
  className?: string
  item: INewsItem
}

export const NewsItem = (props: INewsItemProps) => {
  const { className, item } = props

  return (
    <a
      className={classNames('news-list__link', {}, [className])}
      href={item?.url}
      target="_blank"
      rel="noopener noreferrer"
      key={item?.description}
      draggable="false"
    >
      <img
        className="news-list__img"
        src={item?.urlToImage}
        alt={item?.title}
        draggable="false"
      />
      <h4 className="news-list__title">{item?.title}</h4>
      <p className="news-list__description">{item?.description}</p>
    </a>
  )
}
