import { useSelector } from 'react-redux'
import { SigningOfDocuments } from '@/widgets'
import { ErrorMessage, InfoMessage, Loader } from '@/shared/ui'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import {
  documentsActions,
  getDocumentsError,
  getDocumentsIsLoading,
  getLoanStatusStep
} from '@/entities/Loan'
import '@/app/styles/index.scss'
import './SignPage.scss'

const SignPage = () => {
  const step = useSelector(getLoanStatusStep)
  const error = useSelector(getDocumentsError)
  const isLoading = useSelector(getDocumentsIsLoading)
  const dispatch = useAppDispatch()

  const resetErrorHandler = () => {
    dispatch(documentsActions.resetError())
  }

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage error={error} onClick={resetErrorHandler} />
  }

  return (
    <div className="page">
      {step > 5 && (
        <InfoMessage
          className="sign-page__message"
          classNameInfo="sign-page__info"
          title="Documents have been successfully signed and sent for approval"
          text="Within 10 minutes you will be sent a PIN code to your email for confirmation"
        />
      )}
      {step === 5 && <SigningOfDocuments />}
    </div>
  )
}

export default SignPage
