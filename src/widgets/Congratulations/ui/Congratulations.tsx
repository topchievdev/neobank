import SurpriceImage from '@/shared/assets/img/SurpriseImage1.png'
import { getRouteHome } from '@/shared/const/routes'
import { AppLink, InfoMessage } from '@/shared/ui'
import './Congratulations.scss'
import { useEffect } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { loanStatusActions } from '@/entities/Loan'
import { scheduleActions } from '@/features/ScheduleTable'

export const Congratulations = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(loanStatusActions.resetLoanStatus())
      dispatch(loanStatusActions.initLoanStatus())
      dispatch(scheduleActions.resetData())
    }
  }, [])

  return (
    <section className="congratulations">
      <img
        className="congratulations__img"
        src={SurpriceImage}
        alt="Surprice Image"
      />
      <InfoMessage
        className="congratulations__message"
        title="Congratulations! You have completed your new credit card."
        text="Your credit card will arrive soon. Thank you for choosing us!"
      />
      <AppLink theme="accent" to={getRouteHome()}>
        View other offers of our bank
      </AppLink>
    </section>
  )
}
