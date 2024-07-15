import { forwardRef, memo, SelectHTMLAttributes, useMemo } from 'react'
import { Label } from '../Label/Label'
import { classNames } from '@classNames'
import './Select.scss'

interface ISelectOption {
  value: string | number
  content: string
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  label?: string
  options?: ISelectOption[]
}

export const Select = memo(
  forwardRef<HTMLSelectElement, ISelectProps>((props, ref) => {
    const { className, label, name, options, required, ...otherProps } = props

    const optionsList = useMemo(
      () =>
        options?.map(({ value, content }) => (
          <option value={value} key={value}>
            {content}
          </option>
        )),
      [options]
    )

    if (label) {
      return (
        <div className="select-item">
          <Label required={required}>{label}</Label>
          <select
            className={classNames('select', {}, [className])}
            name={name}
            id={name}
            ref={ref}
            {...otherProps}
          >
            {optionsList}
          </select>
        </div>
      )
    }

    return (
      <select
        className={classNames('select', {}, [className])}
        name={name}
        id={name}
        ref={ref}
        {...otherProps}
      >
        {optionsList}
      </select>
    )
  })
)
