import { mainApi } from '@/shared/api/mainApi'

export const sendEmail = (email: string) => {
  return mainApi.post('email', email)
}
