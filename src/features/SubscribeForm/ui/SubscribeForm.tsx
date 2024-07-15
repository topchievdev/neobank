import { ChangeEvent, useState } from 'react'
import SubscribeIcon from '@/shared/assets/img/paperplane.svg'
import MailIcon from '@/shared/assets/img/mail.svg'
import { Mods, classNames } from '@classNames'
import './SubscribeForm.scss'
import { useSendEmail } from '../model/hooks/useSendEmail'
import { Loader } from '@/shared/ui'

export const SubscribeForm = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [email, setEmail] = useState('')
  const { sendData, data, error, isLoading } = useSendEmail()

  const onSubmit = () => {
    sendData(email)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const mods: Mods = {
    'subscribe-form--focus': isFocused
  }

  if (isLoading) {
    return <Loader />
  }

  if (data) {
    return <p className="subscribe-form__data">{data}</p>
  }

  return (
    <>
      {error && <p className="subscribe-form__error">{error}</p>}
      <form className={classNames('subscribe-form', mods)} onSubmit={onSubmit}>
        <label htmlFor="email">
          <MailIcon className="subscribe-form__icon" />
        </label>
        <input
          className="subscribe-form__input"
          placeholder="Your email"
          type="text"
          name="email"
          value={email}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button className="subscribe-button" type="submit">
          <SubscribeIcon className="subscribe-button__icon" />
          <span className="subscribe-button__content">Subscribe</span>
        </button>
      </form>
    </>
  )
}
