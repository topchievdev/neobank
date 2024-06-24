import { Exchange, Features, Intro, News, Subscribe, World } from '@/widgets'
import '@/app/styles/index.scss'
import './HomePage.scss'

const HomePage = () => {
  return (
    <main className="home page">
      <Intro />
      <Features />
      <Exchange />
      <World />
      <News />
      <Subscribe />
    </main>
  )
}

export default HomePage
