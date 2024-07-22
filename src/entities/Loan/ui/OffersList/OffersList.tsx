import { IOfferData } from '@/shared/types/loan'
import { OfferCard } from '@/entities'
import './OffersList.scss'

interface IOffersListProps {
  items: IOfferData[]
}

export const OffersList = (props: IOffersListProps) => {
  const { items } = props
  return (
    <div className="offers-list">
      {items.map((item, key) => (
        <OfferCard
          applicationId={item.applicationId}
          requestedAmount={item.requestedAmount}
          monthlyPayment={item.monthlyPayment}
          totalAmount={item.totalAmount}
          rate={item.rate}
          term={item.term}
          isInsuranceEnabled={item.isInsuranceEnabled}
          isSalaryClient={item.isSalaryClient}
          key={key}
        />
      ))}
    </div>
  )
}
