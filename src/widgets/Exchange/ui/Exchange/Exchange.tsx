import BankIcon from '@/shared/assets/img/Bank.svg'
import { ExchangeList } from '../ExchangeList/ExchangeList'
import './Exchange.scss'

export const Exchange = () => {
  const currentDate = new Date().toLocaleDateString()

  return (
    <section className="exchange">
      <h2 className="exchange__title">Exchange rate in internet bank</h2>
      <h4 className="exchange__subtitle">Currency</h4>
      <ExchangeList />
      <a
        className="exchange__link"
        href="https://ru.investing.com/currencies/streaming-forex-rates-majors"
        target="_blank"
        rel="noopener noreferrer"
      >
        All courses
      </a>
      <p className="exchange__info">
        {`Update every 15 minutes, MSC ${currentDate}`}
      </p>
      <BankIcon className="exchange__img" />
    </section>
  )
}
