import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Checkbox } from '@/shared/ui'
import FileIcon from '@/shared/assets/img/File_dock_duotone.svg'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { getLoanStatusApplicationId, signDocuments } from '@/entities/Loan'
import './SigningOfDocuments.scss'

export const SigningOfDocuments = () => {
  const [isAgree, setIsAgree] = useState(false)
  const applicationId = useSelector(getLoanStatusApplicationId)
  const dispatch = useAppDispatch()

  const onSend = () => {
    if (applicationId) {
      dispatch(signDocuments(applicationId))
    }
  }

  const onToggleAgree = () => {
    setIsAgree((prev) => !prev)
  }

  return (
    <section className="signing-of-documents">
      <div className="signing-of-documents__header">
        <h3 className="signing-of-documents__title">Signing of documents</h3>
        <p className="signing-of-documents__step">Step 4 of 5</p>
      </div>
      <p className="signing-of-documents__info">
        Information on interest rates under bank deposit agreements with individuals.
        Center for Corporate Information Disclosure. Information of a professional
        participant in the securities market. Information about persons under whose
        control or significant influence the Partner Banks are. By leaving an
        application, you agree to the processing of personal data, obtaining
        information, obtaining access to a credit history, using an analogue of a
        handwritten signature, an offer, a policy regarding the processing of
        personal data, a form of consent to the processing of personal data.
      </p>
      <a
        className="signing-of-documents__link"
        href={'/credit-card-offer.pdf'}
        target="_blank"
        rel="noreferrer noopener"
        download
      >
        <FileIcon className="signing-of-documents__icon" />
        <span className="signing-of-documents__link-info">
          Information on your card
        </span>
      </a>
      <div className="signing-of-documents__actions">
        <Checkbox onClick={onToggleAgree} isChecked={isAgree} label="I agree" />
        <Button
          className="signing-of-documents__button"
          disabled={!isAgree}
          onClick={onSend}
        >
          Send
        </Button>
      </div>
    </section>
  )
}
