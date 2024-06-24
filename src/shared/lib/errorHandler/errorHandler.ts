import { isAxiosError } from 'axios'

export const errorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    console.error('Axios error details:')
    console.error('Message:', error.message)
    if (error.response) {
      console.error('Status:', error.response.status)
      console.error('Data:', error.response.data)
      console.error('Headers:', error.response.headers)
    } else if (error.request) {
      console.error('No response received:', error.request)
    }
    console.error('Config:', error.config)

    return error.message
  } else if (error instanceof Error) {
    console.error('General error:')
    console.error('Message:', error.message)
    console.error('Stack:', error.stack)

    return error.message
  } else {
    console.error('Unknown error type:', error)

    return 'Something went wrong'
  }
}
