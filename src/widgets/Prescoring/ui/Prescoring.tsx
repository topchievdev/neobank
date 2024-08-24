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
  createLoanApplication,
  getPrescoringError,
  getPrescoringIsLoading,
  prescoringActions
} from '@/features/PrescoringForm'
import { IPrescoringData } from '@/shared/types/loan'

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

  const onSubmit = (data: IPrescoringData) => {
    const term = Number(data.term)
    const middleName = data.middleName || null
    dispatch(createLoanApplication({ ...data, term, middleName }))
  }

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
      {step === 1 && <PrescoringForm onSubmit={onSubmit} />}
      {step === 2 && data && <OffersList items={data} />}
      {step > 2 && <OfferMessage />}
    </section>
  )
}
