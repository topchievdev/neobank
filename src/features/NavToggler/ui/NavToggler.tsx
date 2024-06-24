import { memo } from 'react'
import { Mods, classNames } from '@classNames'
import './NavToggler.scss'

interface INavToggler {
  className?: string
  isOpen: boolean
  onClick: () => void
}

export const NavToggler = memo((props: INavToggler) => {
  const { className, isOpen, onClick } = props

  const mods: Mods = {
    'nav-toggler--active': isOpen
  }

  return (
    <button
      className={classNames('nav-toggler', mods, [className])}
      onClick={onClick}
      type="button"
    >
      <span className="nav-toggler__span"></span>
    </button>
  )
})
