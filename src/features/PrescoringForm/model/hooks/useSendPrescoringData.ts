import { errorHandler } from '@/shared/lib/errorHandler/errorHandler'
import { sendPrescoringData } from '../api/sendPrescoringData'
import { IPrescoringData } from '../types/prescoring'
import { useState } from 'react'

export const useSendPrescoringData = () => {
  const [data, setData] = useState<string>('')
  const [error, setError] = useState<string | null>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const resetError = () => {
    setError(null)
  }

  const sendData = (prescoringData: IPrescoringData) => {
    setError(null)
    setIsLoading(true)

    sendPrescoringData(prescoringData)
      .then(() => setData('Data successfully sent!'))
      .catch((err) => setError(errorHandler(err)))
      .finally(() => setIsLoading(false))
  }

  return { sendData, resetError, data, error, isLoading }
}
