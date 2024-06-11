import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from '@/app/App'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
)
