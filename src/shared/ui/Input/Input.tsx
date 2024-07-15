import { forwardRef, InputHTMLAttributes, memo } from 'react'
import { classNames, Mods } from '@classNames'
import { Label } from '../Label/Label'
import './Input.scss'
import ValidIcon from '@/shared/assets/img/Success-icon.svg'
import InvalidIcon from '@/shared/assets/img/Error-icon.svg'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label: string
  error?: string
  isDirty?: boolean
  isSubmitted?: boolean
}

export const Input = memo(
  forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
    const {
      className,
      label,
      error,
      name,
      required,
      isDirty,
      isSubmitted,
      type = 'text',
      ...otherProps
    } = props

    const mods: Mods = {
      'input--error': isSubmitted && error
    }

    return (
      <div className="input-item">
        <Label className="input__label" htmlFor={name} required={required}>
          {label}
        </Label>
        <div className="input-wrapper">
          <input
            className={classNames('input', mods, [className])}
            id={name}
            type={type}
            name={name}
            ref={ref}
            {...otherProps}
          />
          {isDirty && !error && (
            <ValidIcon className="input__icon input__icon--valid" />
          )}
          {isSubmitted && error && (
            <InvalidIcon className="input__icon input__icon--invalid" />
          )}
        </div>
        {error && isSubmitted && <span className="input__error">{error}</span>}
      </div>
    )
  })
)
