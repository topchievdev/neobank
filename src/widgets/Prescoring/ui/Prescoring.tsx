import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { OffersList } from '@/entities'
import { PrescoringForm } from '@/features'
import { ErrorMessage, Loader } from '@/shared/ui'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import {
  OfferMessage,
  offerActions,
  getOfferData,
  getOfferError,
  getOfferIsLoading,
  getLoanStatusStep
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
  const offerError = useSelector(getOfferError)
  const offerIsLoading = useSelector(getOfferIsLoading)
  const prescoringError = useSelector(getPrescoringError)
  const prescoringIsLoading = useSelector(getPrescoringIsLoading)

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
    return <ErrorMessage error={error} onClick={resetErrorHandler} />
  }

  return (
    <section id="prescoring">
      {step === 1 && <PrescoringForm />}
      {step === 2 && data && <OffersList items={data} />}
      {step > 2 && <OfferMessage />}
    </section>
  )
}
