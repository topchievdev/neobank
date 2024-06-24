import { useState } from 'react'
import SubscribeIcon from '@/shared/assets/img/paperplane.svg'
import MailIcon from '@/shared/assets/img/mail.svg'
import { Mods, classNames } from '@classNames'
import './SubscribeForm.scss'

export const SubscribeForm = () => {
  const [isFocused, setIsFocused] = useState(false)

  const mods: Mods = {
    'subscribe-form--focus': isFocused
  }

  return (
    <form className={classNames('subscribe-form', mods)} action="">
      <label htmlFor="email">
        <MailIcon className="subscribe-form__icon" />
      </label>
      <input
        className="subscribe-form__input"
        placeholder="Your email"
        type="text"
        name="email"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button className="subscribe-button" type="button">
        <SubscribeIcon className="subscribe-button__icon" />
        <span className="subscribe-button__content">Subscribe</span>
      </button>
    </form>
  )
}
