import { mainApi } from '@/shared/api/mainApi'
import { IEmail } from '../types/email'

export const sendEmail = (email: IEmail) => {
  return mainApi.post('email', email)
}
