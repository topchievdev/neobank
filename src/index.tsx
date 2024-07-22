import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from '@/app/App'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { StoreProvider } from './app/providers/StoreProvider'

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)
