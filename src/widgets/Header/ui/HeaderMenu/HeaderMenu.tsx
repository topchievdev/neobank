import { AppLink } from '@/shared/ui'
import { HeaderNav } from '../HeaderNav/HeaderNav'
import { getRouteHome } from '@/shared/const/routes'
import './HeaderMenu.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Mods } from '@/shared/types/classNames'

interface IHeaderMenu {
  isOpen: boolean
}

export const HeaderMenu = (props: IHeaderMenu) => {
  const { isOpen } = props

  const mods: Mods = { 'header-menu--active': isOpen }

  return (
    <div className={classNames('header-menu', mods, [])}>
      <HeaderNav className="header-menu__nav" />
      <AppLink weight="700" theme="primary" to={getRouteHome()}>
        Online Bank
      </AppLink>
    </div>
  )
}
