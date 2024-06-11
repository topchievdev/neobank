import { Exchange, Features, Intro, Subscribe, World } from '@/widgets'
import '@/app/styles/index.scss'
import './HomePage.scss'

const HomePage = () => {
  return (
    <main className="home page">
      <Intro />
      <Features />
      <Exchange />
      <World />
      <Subscribe />
    </main>
  )
}

export default HomePage
