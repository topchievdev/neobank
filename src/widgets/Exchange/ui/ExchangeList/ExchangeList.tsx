import './ExchangeList.scss'

export const ExchangeList = () => {
  return (
    <ul className="exchange__list">
      <li className="exchange__item">
        <span className="exchange__currency">USD:</span>
        <span className="exchange__price">60.78</span>
      </li>
      <li className="exchange__item">
        <span className="exchange__currency">CNY:</span>
        <span className="exchange__price">9.08</span>
      </li>
      <li className="exchange__item">
        <span className="exchange__currency">CHF:</span>
        <span className="exchange__price">64.78</span>
      </li>
      <li className="exchange__item">
        <span className="exchange__currency">USD:</span>
        <span className="exchange__price">60.78</span>
      </li>
      <li className="exchange__item">
        <span className="exchange__currency">JPY:</span>
        <span className="exchange__price">0.46</span>
      </li>
      <li className="exchange__item">
        <span className="exchange__currency">TRY:</span>
        <span className="exchange__price">3.39</span>
      </li>
    </ul>
  )
}
