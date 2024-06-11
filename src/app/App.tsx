import { Suspense } from 'react'
import { AppRouter } from './providers/router'
import { Footer, Header, PageLoader } from '@/widgets'
import './styles/index.scss'

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<PageLoader />}>
        <div className="container">
          <Header />
          <AppRouter />
        </div>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
