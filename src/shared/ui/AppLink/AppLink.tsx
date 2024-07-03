import { memo } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import { textWeightMapper } from '@/shared/const/style'
import { TTextWeight } from '@/shared/types/style'
import { TAppLinkTheme, appLinkThemeMapper } from './AppLink.types'
import './AppLink.scss'

export interface IAppLinkProps extends LinkProps {
  className?: string
  theme?: TAppLinkTheme
  weight?: TTextWeight
}

export const AppLink = memo((props: IAppLinkProps) => {
  const { className, children, to, theme, weight } = props

  return (
    <Link
      className={classNames('link', {}, [
        className,
        theme && appLinkThemeMapper[theme],
        weight && textWeightMapper[weight]
      ])}
      to={to}
    >
      {children}
    </Link>
  )
})
