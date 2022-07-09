import { render, screen } from '@testing-library/react'

import Header from '.'

jest.mock('components/Logo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Logo"></div>
    }
  }
})

describe('Header component', () => {
  it('should render it correctly ', () => {
    render(<Header />)

    const logo = screen.getByTestId(/Mock Logo/i)
    expect(logo).toBeInTheDocument()
  })

  it('should render the background color correctly', () => {
    const { container } = render(<Header />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#ffffff'
    })
  })
})
