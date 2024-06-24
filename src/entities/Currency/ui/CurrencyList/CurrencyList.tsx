import { useGetCurrencyList } from '../../model/hooks/useGetCurrencyList'
import { ICurrencyPair } from '../../model/types/currency'
import { classNames } from '@classNames'
import { Skeleton } from '@/shared/ui'
import './CurrencyList.scss'

interface ICurrencyList {
  className?: string
  currency: ICurrencyPair[]
}

export const CurrencyList = (props: ICurrencyList) => {
  const { className, currency } = props
  const { getData, data, error, isLoading } = useGetCurrencyList(currency)

  if (isLoading) {
    return (
      <div className={classNames('currency-list', {}, [className])}>
        <Skeleton width={110} height={23} />
        <Skeleton width={110} height={23} />
        <Skeleton width={110} height={23} />
        <Skeleton width={110} height={23} />
        <Skeleton width={110} height={23} />
        <Skeleton width={110} height={23} />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames('currency-list__error', {}, [className])}>
        <p>{error}</p>
        <button onClick={() => getData(currency)} className="currency-list__button">
          Try again
        </button>
      </div>
    )
  }

  return (
    <ul className={classNames('currency-list', {}, [className])}>
      {data.map((item) => (
        <li className="currency-list__item" key={item?.currency}>
          <span className="currency-list__name">{item?.currency}:</span>
          <span className="currency-list__price">{item?.price}</span>
        </li>
      ))}
    </ul>
  )
}
