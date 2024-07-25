import { Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'
import { Footer, Header, PageLoader } from '@/widgets'
import './styles/index.scss'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { loanStatusActions } from '@/entities/Loan'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loanStatusActions.initLoanStatus())
  }, [])

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
