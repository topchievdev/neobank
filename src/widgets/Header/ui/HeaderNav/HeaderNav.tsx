import { getRouteHome } from '@/shared/const/routes'
import { AppLink, Nav } from '@/shared/ui'
import './HeaderNav.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

interface IHeaderNav {
  className?: string
}

export const HeaderNav = (props: IHeaderNav) => {
  const { className } = props

  return (
    <Nav className={classNames('header-nav', {}, [className])}>
      <AppLink weight="700" theme="primary" to={getRouteHome()}>
        Credit card
      </AppLink>
      <AppLink weight="700" theme="primary" to={getRouteHome()}>
        Product
      </AppLink>
      <AppLink weight="700" theme="primary" to={getRouteHome()}>
        Account
      </AppLink>
      <AppLink weight="700" theme="primary" to={getRouteHome()}>
        Resources
      </AppLink>
    </Nav>
  )
}
