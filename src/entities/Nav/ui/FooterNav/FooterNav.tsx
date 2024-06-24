import {
  getRouteAbout,
  getRouteCareer,
  getRouteInvestors,
  getRouteAnalytics,
  getRouteRequisites,
  getRoutePressCenter,
  getRouteAskAndQuestion,
  getRouteQualityOfService,
  getRouteBusinessAndProcesses,
  getRouteCopmlianceAndBusinessEthics
} from '@/shared/const/routes'
import { AppLink, Nav } from '@/shared/ui'
import { classNames } from '@classNames'
import './FooterNav.scss'

interface IFooterNavProps {
  className?: string
}

export const FooterNav = (props: IFooterNavProps) => {
  const { className } = props

  return (
    <Nav className={classNames('footer-nav', {}, [className])}>
      <AppLink theme="primary" to={getRouteAbout()}>
        About bank
      </AppLink>
      <AppLink theme="primary" to={getRouteAskAndQuestion()}>
        Ask a Question
      </AppLink>
      <AppLink theme="primary" to={getRouteQualityOfService()}>
        Quality of service
      </AppLink>
      <AppLink theme="primary" to={getRouteRequisites()}>
        Requisites
      </AppLink>
      <AppLink theme="primary" to={getRoutePressCenter()}>
        Press center
      </AppLink>
      <AppLink theme="primary" to={getRouteCareer()}>
        Bank career
      </AppLink>
      <AppLink theme="primary" to={getRouteInvestors()}>
        Investors
      </AppLink>
      <AppLink theme="primary" to={getRouteAnalytics()}>
        Analytics
      </AppLink>
      <AppLink theme="primary" to={getRouteBusinessAndProcesses()}>
        Business and processes
      </AppLink>
      <AppLink theme="primary" to={getRouteCopmlianceAndBusinessEthics()}>
        Compliance and business ethics
      </AppLink>
    </Nav>
  )
}
