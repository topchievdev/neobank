import { mainApi } from '@/shared/api/mainApi'
import { IPrescoringData } from '../types/prescoring'

export const sendPrescoringData = (data: IPrescoringData) => {
  return mainApi.post('application', data)
}
