import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { OffersList } from '@/entities'
import { PrescoringForm } from '@/features'
import { ErrorMessage, Loader } from '@/shared/ui'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import {
  getLoanStatusStep,
  getOfferData,
  getOfferError,
  getOfferIsLoading,
  offerActions,
  OfferMessage
} from '@/entities/Loan'
import {
  getPrescoringError,
  getPrescoringIsLoading,
  prescoringActions
} from '@/features/PrescoringForm'

export const Prescoring = () => {
  const dispatch = useAppDispatch()
  const data = useSelector(getOfferData)
  const step = useSelector(getLoanStatusStep)
  const prescoringError = useSelector(getPrescoringError)
  const offerError = useSelector(getOfferError)
  const prescoringIsLoading = useSelector(getPrescoringIsLoading)
  const offerIsLoading = useSelector(getOfferIsLoading)

  const error = prescoringError || offerError
  const isLoading = prescoringIsLoading || offerIsLoading

  const resetErrorHandler = useCallback(() => {
    dispatch(prescoringActions.resetError())
    dispatch(offerActions.resetError())
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return (
      <section>
        <ErrorMessage error={error} onClick={resetErrorHandler} />
      </section>
    )
  }

  return (
    <section id="prescoring">
      {step === 1 && <PrescoringForm />}
      {step === 2 && data && <OffersList items={data} />}
      {step > 2 && <OfferMessage />}
    </section>
  )
}
