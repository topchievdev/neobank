import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Denied, PaymentSchedule } from '@/widgets'
import { ErrorMessage, InfoMessage, Loader } from '@/shared/ui'
import { getLoanStatusApplicationId, getLoanStatusStep } from '@/entities/Loan'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import {
  getApplicationById,
  getScheduleError,
  getScheduleIsLoading,
  getScheduleStatus
} from '@/features/ScheduleTable'
import '@/app/styles/index.scss'
import './DocumentPage.scss'

const DocumentPage = () => {
  const step = useSelector(getLoanStatusStep)
  const applicationId = useSelector(getLoanStatusApplicationId)
  const error = useSelector(getScheduleError)
  const status = useSelector(getScheduleStatus)
  const isLoading = useSelector(getScheduleIsLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (applicationId && !status) {
      dispatch(getApplicationById(applicationId))
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage error={error} onClick={() => location.reload()} />
  }

  if (status === 'CC_DENIED') {
    return <Denied />
  }

  if (status === 'CC_APPROVED') {
    return (
      <main className="page">
        {step > 4 && (
          <InfoMessage
            title="Documents are formed"
            text="Documents for signing will be sent to your email"
          />
        )}
        {step === 4 && <PaymentSchedule />}
      </main>
    )
  }
}

export default DocumentPage
