import {
  getRouteLoan,
  getRouteAccount,
  getRouteProduct,
  getRouteResources
} from '@/shared/const/routes'
import { AppLink, Nav } from '@/shared/ui'
import { classNames } from '@classNames'
import './HeaderNav.scss'

interface IHeaderNav {
  className?: string
}

export const HeaderNav = (props: IHeaderNav) => {
  const { className } = props

  return (
    <Nav className={classNames('header-nav', {}, [className])}>
      <AppLink weight="700" theme="primary" to={getRouteLoan()}>
        Credit card
      </AppLink>
      <AppLink weight="700" theme="primary" to={getRouteProduct()}>
        Product
      </AppLink>
      <AppLink weight="700" theme="primary" to={getRouteAccount()}>
        Account
      </AppLink>
      <AppLink weight="700" theme="primary" to={getRouteResources()}>
        Resources
      </AppLink>
    </Nav>
  )
}
