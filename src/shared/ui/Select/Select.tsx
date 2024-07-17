import { forwardRef, memo, SelectHTMLAttributes, useMemo, useState } from 'react'
import { Label } from '../Label/Label'
import { classNames } from '@classNames'
import ArrowIcon from '@/shared/assets/img/Select_arrow.svg'
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
          <div className="select__wrapper">
            <select
              className={classNames('select', {}, [className])}
              name={name}
              id={name}
              ref={ref}
              {...otherProps}
            >
              {optionsList}
            </select>
            <ArrowIcon className={classNames('select__arrow')} />
          </div>
        </div>
      )
    }

    return (
      <div>
        <select
          className={classNames('select', {}, [className])}
          name={name}
          id={name}
          ref={ref}
          {...otherProps}
        >
          {optionsList}
        </select>
        <ArrowIcon className={classNames('select__arrow')} />
      </div>
    )
  })
)
