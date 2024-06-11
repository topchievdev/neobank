import { getRouteHome } from '@/shared/const/routes'
import { AppLink, Logo } from '@/shared/ui'
import { HeaderNav } from '../HeaderNav/HeaderNav'
import './Header.scss'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'
import { useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Mods } from '@/shared/types/classNames'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleHandler = () => {
    setIsOpen((prev) => !prev)
  }

  const mods: Mods = {
    'header__button-menu--active': isOpen
  }

  return (
    <header className="header">
      <Logo />
      <HeaderNav className="header__nav" />
      <AppLink className="header__link-bank" to={getRouteHome()} theme="accent">
        Online Bank
      </AppLink>
      <button
        className={classNames('header__button-menu', mods, [])}
        onClick={toggleHandler}
        type="button"
      >
        <span className="header__button-span"></span>
      </button>
      <HeaderMenu isOpen={isOpen} />
    </header>
  )
}
