import featureImg from '@/shared/assets//img/FeatureIllustration.png'
import CheckMarkIcon from '@/shared/assets/img/CheckMark.svg'
import './Features.scss'

export const Features = () => {
  return (
    <section className="features">
      <img className="features__img" src={featureImg} alt="SOME IMG" />
      <div className="features__info">
        <h2 className="features__title">We Provide Many Features You Can Use</h2>
        <p className="features__description">
          You can explore the features that we provide with fun and have their own
          functions each feature
        </p>
        <ul className="features__list">
          <li className="features__item">
            <CheckMarkIcon className="features__icon" />
            <p>Powerfull online protection.</p>
          </li>
          <li className="features__item">
            <CheckMarkIcon className="features__icon" />
            <p>Cashback without borders.</p>
          </li>
          <li className="features__item">
            <CheckMarkIcon className="features__icon" />
            <p>Personal design</p>
          </li>
          <li className="features__item">
            <CheckMarkIcon className="features__icon" />
            <p>Work anywhere in the world</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
