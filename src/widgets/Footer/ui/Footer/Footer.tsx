import { FooterNav } from '@/entities'
import { Logo } from '@/shared/ui'
import './Footer.scss'
import { getLinkMail, getLinkPhone } from '@/shared/const/links'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Logo className="footer__logo" variant="img" />
        <a className="footer__phone" href={getLinkPhone()}>
          +7 (495) 984 25 13
        </a>
        <a className="footer__email" href={getLinkMail()}>
          info@neoflex.ru
        </a>
        <FooterNav className="footer__nav" />
        <p className="footer__info">
          We use cookies to personalize our services and improve the user experience
          of our website. Cookies are small files containing information about
          previous visits to a website. If you do not want to use cookies, please
          change your browser settings
        </p>
      </div>
    </footer>
  )
}
