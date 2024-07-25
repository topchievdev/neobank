import { InfoMessage } from '@/shared/ui'
import './OfferMessage.scss'

export const OfferMessage = () => {
  return (
    <InfoMessage
      className="offer-message"
      title="The preliminary decision has been sent to your email."
      text="In the letter you can get acquainted with the preliminary decision on the credit card."
    />
  )
}
