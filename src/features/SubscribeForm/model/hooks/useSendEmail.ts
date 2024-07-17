import { useEffect, useState } from 'react'
import { sendEmail } from '../api/sendEmail'
import { errorHandler } from '@/shared/lib/errorHandler/errorHandler'
import { LOCAL_STORAGE_IS_SUBSCRIBED_KEY } from '@/shared/const/localstorage'
import { IEmail } from '../types/email'

export const useSendEmail = () => {
  const [data, setData] = useState<string>('')
  const [error, setError] = useState<string | null>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const sendData = (email: IEmail) => {
    setError(null)
    setIsLoading(true)

    sendEmail(email)
      .then(() => {
        setData('You are already subscribed to the bank\'s newsletter!') // prettier-ignore
        localStorage.setItem(LOCAL_STORAGE_IS_SUBSCRIBED_KEY, 'subscribed')
      })
      .catch((err) => setError(errorHandler(err)))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    const isSubscribed = localStorage.getItem(LOCAL_STORAGE_IS_SUBSCRIBED_KEY)
    if (isSubscribed) {
      setData('You are already subscribed to the bank\'s newsletter!') // prettier-ignore
    }
  }, [])

  return { sendData, data, error, isLoading }
}
