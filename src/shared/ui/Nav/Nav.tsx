import { classNames } from '@/shared/lib/classNames/classNames'
import { Children, ReactNode, memo } from 'react'
import './Nav.scss'

interface INavProps {
  className?: string
  children?: ReactNode
}

export const Nav = memo((props: INavProps) => {
  const { className, children } = props

  return (
    <nav className={classNames('nav', {}, [className])}>
      <ul className="nav__list">
        {Children.map(children, (child) => (
          <li className="nav__item">{child}</li>
        ))}
      </ul>
    </nav>
  )
})
