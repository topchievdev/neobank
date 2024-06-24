import { useState } from 'react'
import { getRouteOnlineBank } from '@/shared/const/routes'
import { HeaderNav, MobileMenu } from '@/entities'
import { Mods, classNames } from '@classNames'
import { AppLink, Logo } from '@/shared/ui'
import { NavToggler } from '@/features'
import './Header.scss'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleHandler = () => {
    setIsOpen((prev) => !prev)
  }

  const mods: Mods = {
    'header__toggler--active': isOpen
  }

  return (
    <header className="header">
      <Logo />
      <HeaderNav className="header__nav" />
      <AppLink
        className="header__link-bank"
        to={getRouteOnlineBank()}
        theme="accent"
      >
        Online Bank
      </AppLink>
      <NavToggler
        className={classNames('header__toggler', mods)}
        isOpen={isOpen}
        onClick={toggleHandler}
      />
      <MobileMenu isOpen={isOpen} />
    </header>
  )
}
