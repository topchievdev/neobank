import { ButtonHTMLAttributes, memo } from 'react'
import { TButtonTheme, buttonThemeMapper } from './Button.types'
import { textWeightMapper } from '@/shared/const/style'
import { TTextWeight } from '@/shared/types/style'
import { classNames } from '@classNames'
import './Button.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: TButtonTheme
  weight?: TTextWeight
  disabled?: boolean
  onClick?: () => void
}

export const Button = memo((props: IButtonProps) => {
  const {
    className,
    children,
    weight,
    disabled,
    onClick,
    type = 'button',
    theme = 'accent'
  } = props

  return (
    <button
      className={classNames('button', { 'button--disabled': disabled }, [
        className,
        theme && buttonThemeMapper[theme],
        weight && textWeightMapper[weight]
      ])}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
})
