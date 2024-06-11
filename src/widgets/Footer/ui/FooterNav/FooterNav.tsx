import { getRouteHome } from '@/shared/const/routes'
import { AppLink, Nav } from '@/shared/ui'

interface IFooterNavProps {
  className?: string
}

export const FooterNav = (props: IFooterNavProps) => {
  const { className } = props

  return (
    <Nav className={className}>
      <AppLink theme="primary" to={getRouteHome()}>
        About bank
      </AppLink>
      <AppLink theme="primary" to={getRouteHome()}>
        Ask a Question
      </AppLink>
      <AppLink theme="primary" to={getRouteHome()}>
        Quality of service
      </AppLink>
      <AppLink theme="primary" to={getRouteHome()}>
        Requisites
      </AppLink>
      <AppLink theme="primary" to={getRouteHome()}>
        Press center
      </AppLink>
      <AppLink theme="primary" to={getRouteHome()}>
        Bank career
      </AppLink>
      <AppLink theme="primary" to={getRouteHome()}>
        Investors
      </AppLink>
      <AppLink theme="primary" to={getRouteHome()}>
        Analytics
      </AppLink>
      <AppLink theme="primary" to={getRouteHome()}>
        Business and processes
      </AppLink>
      <AppLink theme="primary" to={getRouteHome()}>
        Compliance and business ethics
      </AppLink>
    </Nav>
  )
}
