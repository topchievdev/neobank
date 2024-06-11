import worldMap from '@/shared/assets/img/Global.png'
import './World.scss'

export const World = () => {
  return (
    <section className="world">
      <h2 className="world__title">
        You can use our services anywhere in the world
      </h2>
      <p className="world__info">
        Withdraw and transfer money online through our application
      </p>
      <img className="world__img" src={worldMap} alt="World Map" />
    </section>
  )
}
