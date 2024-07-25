import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ScoringForm } from '@/features'
import { ErrorMessage, InfoMessage, Loader } from '@/shared/ui'
import { getLoanStatusStep } from '@/entities/Loan/model/selectors/getLoanStatusSelectors'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import {
  getScoringError,
  getScoringIsLoading,
  scoringActions
} from '@/features/ScoringForm'
import '@/app/styles/index.scss'

const ScoringPage = () => {
  const dispatch = useAppDispatch()
  const step = useSelector(getLoanStatusStep)
  const error = useSelector(getScoringError)
  const isLoading = useSelector(getScoringIsLoading)

  const resetErrorHandler = useCallback(() => {
    dispatch(scoringActions.resetError())
  }, [])

  if (isLoading) {
    return (
      <main className="page">
        <Loader />
      </main>
    )
  }

  if (error) {
    return (
      <main className="page">
        <ErrorMessage error={error} onClick={resetErrorHandler} />
      </main>
    )
  }

  return (
    <main className="page">
      {step > 3 && (
        <InfoMessage
          title="Wait for a decision on the application"
          text="The answer will come to your mail within 10 minutes"
        />
      )}
      {step === 3 && <ScoringForm />}
    </main>
  )
}

export default ScoringPage
