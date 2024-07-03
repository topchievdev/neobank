import {
  getRouteLoan,
  getRouteProduct,
  getRouteAccount,
  getRouteResources,
  getRouteOnlineBank
} from '@/shared/const/routes'
import { AppLink } from '@/shared/ui'
import { Mods, classNames } from '@classNames'
import './MobileMenu.scss'

interface IMobileMenu {
  isOpen: boolean
}

export const MobileMenu = (props: IMobileMenu) => {
  const { isOpen } = props

  const mods: Mods = { 'mobile-menu--active': isOpen }

  return (
    <div className={classNames('mobile-menu', mods, [])}>
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
      <AppLink weight="700" theme="primary" to={getRouteOnlineBank()}>
        Online Bank
      </AppLink>
    </div>
  )
}
