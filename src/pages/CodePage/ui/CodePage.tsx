import '@/app/styles/index.scss'
import { useSelector } from 'react-redux'
import { Confirmation, Congratulations } from '@/widgets'
import { getCodeIsLoading, getLoanStatusStep } from '@/entities/Loan'
import { Loader } from '@/shared/ui'

const CodePage = () => {
  const isLoading = useSelector(getCodeIsLoading)
  const step = useSelector(getLoanStatusStep)

  if (isLoading) return <Loader />

  return (
    <main className="page">
      {step > 6 && <Congratulations />}
      {step === 6 && <Confirmation />}
    </main>
  )
}

export default CodePage
