import { useSelector } from 'react-redux'
import { getLoanStatusStep } from '@/entities/Loan'
import { PaymentSchedule } from '@/widgets'
import { InfoMessage } from '@/shared/ui'
import '@/app/styles/index.scss'
import './DocumentPage.scss'

const DocumentPage = () => {
  const step = useSelector(getLoanStatusStep)

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

export default DocumentPage
