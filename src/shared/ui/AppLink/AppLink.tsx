import { memo } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  TAppLinkTheme,
  TAppLinkWeight,
  appLinkThemeMapper,
  appLinkWeightMapper
} from './AppLink.types'
import './AppLink.scss'

export interface IAppLinkProps extends LinkProps {
  className?: string
  theme?: TAppLinkTheme
  weight?: TAppLinkWeight
}

export const AppLink = memo((props: IAppLinkProps) => {
  const { className, children, to, theme, weight } = props

  return (
    <Link
      className={classNames('link', {}, [
        className,
        theme && appLinkThemeMapper[theme],
        weight && appLinkWeightMapper[weight]
      ])}
      to={to}
    >
      {children}
    </Link>
  )
})
