import BankIcon from '@/shared/assets/img/Bank.svg'
import { CurrencyList } from '@/entities'
import './Exchange.scss'
import { getLinkAllCourses } from '@/shared/const/links'

const currencyPairs = [
  { from: 'usd', to: 'rub' },
  { from: 'cny', to: 'rub' },
  { from: 'chf', to: 'rub' },
  { from: 'eur', to: 'rub' },
  { from: 'jpy', to: 'rub' },
  { from: 'try', to: 'rub' }
]

export const Exchange = () => {
  const currentDate = new Date().toLocaleDateString()

  return (
    <section className="exchange">
      <h2 className="exchange__title">Exchange rate in internet bank</h2>
      <h4 className="exchange__subtitle">Currency</h4>
      <CurrencyList className="exchange__currency-list" currency={currencyPairs} />
      <BankIcon className="exchange__img" />
      <p className="exchange__info">{`Update every 15 minutes, MSC ${currentDate}`}</p>
      <a
        className="exchange__link"
        href={getLinkAllCourses()}
        target="_blank"
        rel="noopener noreferrer"
      >
        All courses
      </a>
    </section>
  )
}
