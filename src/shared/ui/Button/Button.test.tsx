import { render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
  test('To be in the document', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('Добавление класса, при выборе темы', () => {
    render(<Button theme="accent">TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('button--accent')
  })
})
