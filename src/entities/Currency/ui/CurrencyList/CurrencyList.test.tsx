import { render } from '@testing-library/react'
import { CurrencyList } from './CurrencyList'
import { useGetCurrencyList } from '../../model/hooks/useGetCurrencyList'

jest.mock('../../model/hooks/useGetCurrencyList')

const mockedUseGetCurrencyList = jest.mocked(useGetCurrencyList)

describe('CurrencyList', () => {
  test('Должен отображаться скелетон при загрузке', () => {
    mockedUseGetCurrencyList.mockReturnValue({
      isLoading: true,
      data: [],
      error: null,
      getData: jest.fn()
    })

    const currencyList = render(<CurrencyList currency={[]} />)
    const { getAllByTestId } = currencyList
    expect(getAllByTestId('skeleton')[0]).toBeInTheDocument()
  })

  test('Должна отображаться ошибка', () => {
    mockedUseGetCurrencyList.mockReturnValue({
      isLoading: false,
      data: [],
      error: 'Something went wrong',
      getData: jest.fn()
    })

    const currencyList = render(<CurrencyList currency={[]} />)
    const { getByText } = currencyList
    expect(getByText('Something went wrong')).toBeInTheDocument()
  })

  test('Должна отображаться валюта с коррекными данными', () => {
    mockedUseGetCurrencyList.mockReturnValue({
      isLoading: false,
      data: [
        { currency: 'RUB', price: '1' },
        { currency: 'USD', price: '30' },
        { currency: 'EUR', price: '40' }
      ],
      error: null,
      getData: jest.fn()
    })

    const currencyList = render(<CurrencyList currency={[]} />)
    const { getByText } = currencyList

    expect(getByText(/RUB/)).toBeInTheDocument()
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText(/USD/)).toBeInTheDocument()
    expect(getByText('30')).toBeInTheDocument()
    expect(getByText(/EUR/)).toBeInTheDocument()
    expect(getByText('40')).toBeInTheDocument()
  })
})
