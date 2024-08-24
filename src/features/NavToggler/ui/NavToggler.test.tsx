import { fireEvent, render } from '@testing-library/react'
import { NavToggler } from './NavToggler'

describe('NavToggler', () => {
  const mockClick = jest.fn()

  test('Должен отрендериться', () => {
    const toggler = render(<NavToggler onClick={mockClick} isOpen={false} />)
    const { getByTestId } = toggler
    expect(getByTestId('nav-toggler')).toBeInTheDocument()
  })

  test('Должен сработать клик', async () => {
    const toggler = render(<NavToggler onClick={mockClick} isOpen={false} />)
    const { getByTestId } = toggler
    await fireEvent.click(getByTestId('nav-toggler'))
    expect(mockClick).toHaveBeenCalledTimes(1)
  })

  test('Должен добавляться класс active при изменении isOpen', () => {
    const toggler = render(<NavToggler onClick={mockClick} isOpen={false} />)
    const { getByTestId, rerender } = toggler
    expect(getByTestId('nav-toggler')).not.toHaveClass('nav-toggler--active')
    rerender(<NavToggler onClick={mockClick} isOpen={true} />)
    expect(getByTestId('nav-toggler')).toHaveClass('nav-toggler--active')
  })
})
