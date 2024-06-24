import { SubscribeForm } from '@/features'
import './Subscribe.scss'
import { AppLink } from '@/shared/ui'
import { getRouteSupport } from '@/shared/const/routes'

export const Subscribe = () => {
  return (
    <section className="subscribe">
      <AppLink className="subscribe__link" to={getRouteSupport()}>
        Support
      </AppLink>
      <h2 className="subscribe__title">Subscribe Newsletter & get</h2>
      <h3 className="subscribe__subtitle">Bank News</h3>
      <SubscribeForm />
    </section>
  )
}
