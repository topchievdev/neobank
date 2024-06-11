import { getRouteHome } from '@/shared/const/routes'
import { AppLink } from '../AppLink/AppLink'
import { classNames } from '@/shared/lib/classNames/classNames'
import neobankLogo from '@/shared/assets/img/Neobank-logo.png'
import './Logo.scss'

interface ILogo {
  className?: string
  variant?: 'link' | 'img'
}

export const Logo = (props: ILogo) => {
  const { className, variant = 'link' } = props

  if (variant === 'img') {
    return <img className={className} src={neobankLogo} alt="Neobank Logo" />
  }

  if (variant === 'link') {
    return (
      <AppLink
        weight="700"
        className={classNames('logo', {}, [className])}
        to={getRouteHome()}
      >
        NeoBank
      </AppLink>
    )
  }
}
