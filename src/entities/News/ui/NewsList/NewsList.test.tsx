import { render } from '@testing-library/react'
import { useGetNews } from '../../model/hooks/useGetNews'
import { NewsList } from './NewsList'

jest.mock('../../model/hooks/useGetNews')

const mockedUseGetNews = jest.mocked(useGetNews)

describe('NewsList', () => {
  test('Должен отображаться скелетон при загрузке', () => {
    mockedUseGetNews.mockReturnValue({
      isLoading: true,
      data: [],
      error: null,
      getData: jest.fn()
    })

    const newsList = render(<NewsList />)
    const { getAllByTestId } = newsList
    expect(getAllByTestId('skeleton')[0]).toBeInTheDocument()
  })

  test('Должна отображаться ошибка', () => {
    mockedUseGetNews.mockReturnValue({
      isLoading: false,
      data: [],
      error: 'Something went wrong',
      getData: jest.fn()
    })

    const newsList = render(<NewsList />)
    const { getByText } = newsList
    expect(getByText('Something went wrong')).toBeInTheDocument()
  })

  test('Должны отображаться новости с коррекными данными', () => {
    mockedUseGetNews.mockReturnValue({
      isLoading: false,
      data: [
        {
          urlToImage: 'urlToImage',
          description: 'description1',
          title: 'title',
          url: 'url'
        },
        {
          urlToImage: 'urlToImage',
          description: 'description2',
          title: 'title',
          url: 'url'
        },
        {
          urlToImage: 'urlToImage',
          description: 'description3',
          title: 'title',
          url: 'url'
        }
      ],
      error: null,
      getData: jest.fn()
    })

    const newsList = render(<NewsList />)
    const { getAllByTestId } = newsList
    expect(getAllByTestId('news-item').length).toBe(3)
  })
})
