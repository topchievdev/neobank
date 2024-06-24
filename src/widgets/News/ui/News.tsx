import { NewsList } from '@/entities'
import './News.scss'

export const News = () => {
  return (
    <section className="news">
      <h2 className="news__title">Current news from the world of finance</h2>
      <p className="news__info">
        We update the news feed every 15 minutes. You can learn more by clicking on
        the news you are interested in.
      </p>
      <NewsList />
    </section>
  )
}
