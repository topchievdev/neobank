import cardImage1 from '@/shared/assets/img/cardImage1.jpg'
import cardImage2 from '@/shared/assets/img/cardImage2.jpg'
import cardImage3 from '@/shared/assets/img/cardImage3.jpg'
import cardImage4 from '@/shared/assets/img/cardImage4.jpg'
import './Intro.scss'
import { AppLink } from '@/shared/ui'
import { getRouteHome } from '@/shared/const/routes'

export const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__offer">
        <h1 className="intro__title">
          Choose the design you like and apply for card right now
        </h1>
        <AppLink className="intro__link" theme="accent" to={getRouteHome()}>
          Choose the card
        </AppLink>
      </div>
      <div className="intro__cards">
        <img className="intro__card" src={cardImage1} alt="Card Sample" />
        <img className="intro__card" src={cardImage2} alt="Card Sample" />
        <img className="intro__card" src={cardImage3} alt="Card Sample" />
        <img className="intro__card" src={cardImage4} alt="Card Sample" />
      </div>
    </section>
  )
}
