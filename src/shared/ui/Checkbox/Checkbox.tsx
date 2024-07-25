import { classNames } from '@classNames'
import { InputHTMLAttributes } from 'react'
import CheckMark from '@/shared/assets/img/CheckMarkDefault.svg'
import './Checkbox.scss'

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  onClick: () => void
  isChecked: boolean
}

export const Checkbox = (props: ICheckboxProps) => {
  const { className, name, label, isChecked, onClick } = props

  const handleClick = () => {
    onClick()
  }

  return (
    <label className={classNames('checkbox', {}, [className])} htmlFor={name}>
      <input className="checkbox__input" id={name} name={name} type="checkbox" />
      <span className="checkbox__span" onClick={handleClick}>
        <CheckMark
          className={classNames(
            'checkbox__icon',
            {
              'checkbox__icon--checked': isChecked
            },
            []
          )}
        />
      </span>
      {label}
    </label>
  )
}
