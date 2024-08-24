import { render } from '@testing-library/react'
import { useSendEmail } from '../model/hooks/useSendEmail'
import { SubscribeForm } from './SubscribeForm'

jest.mock('../model/hooks/useSendEmail')

const mockedUseSendEmail = jest.mocked(useSendEmail)

describe('SubscribeForm', () => {
  test('Должен отображаться лоадер при загрузке', () => {
    mockedUseSendEmail.mockReturnValue({
      isLoading: true,
      data: '',
      error: null,
      sendData: jest.fn()
    })

    const subscribeForm = render(<SubscribeForm />)
    const { getByTestId } = subscribeForm
    expect(getByTestId('loader')).toBeInTheDocument()
  })

  test('Должен отображаться лоадер при загрузке', () => {
    mockedUseSendEmail.mockReturnValue({
      isLoading: false,
      data: '',
      error: 'Something went wrong',
      sendData: jest.fn()
    })

    const subscribeForm = render(<SubscribeForm />)
    const { getByText } = subscribeForm
    expect(getByText('Something went wrong')).toBeInTheDocument()
  })

  test('Должно отображаться сообщение об успешной подписке', () => {
    mockedUseSendEmail.mockReturnValue({
      isLoading: false,
      data: 'You are subscribed!',
      error: null,
      sendData: jest.fn()
    })

    const subscribeForm = render(<SubscribeForm />)
    const { getByText } = subscribeForm
    expect(getByText('You are subscribed!')).toBeInTheDocument()
  })
})
