import MailIcon from '@/shared/assets/img/mail.svg'
import SubscribeIcon from '@/shared/assets/img/paperplane.svg'
import './Subscribe.scss'

export const Subscribe = () => {
  return (
    <section className="subscribe">
      <a className="subscribe__link" href="#">
        Support
      </a>
      <h2 className="subscribe__title">Subscribe Newsletter & get</h2>
      <h3 className="subscribe__subtitle">Bank News</h3>
      <form className="subscribe__form" action="">
        <label htmlFor="email">
          <MailIcon className="subscribe__icon" />
        </label>
        <input
          className="subscribe__input"
          placeholder="Your email"
          type="text"
          name="email"
        />

        <button className="subscribe__button subscribe-button" type="button">
          <SubscribeIcon className="subscribe-button__icon" />
          <span className="subscribe-button__content">Subscribe</span>
        </button>
      </form>
    </section>
  )
}
