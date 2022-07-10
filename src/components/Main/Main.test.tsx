import { render, screen } from '@testing-library/react'

import Main from '.'

const mockProps = {
  background: 'https://image.com/example.png'
}

jest.mock('components/UserList', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock UserList"></div>
    }
  }
})

describe('Main component', () => {
  it('should render it correctly', () => {
    const { container } = render(<Main background={mockProps.background} />)

    const userList = screen.getByTestId(/Mock UserList/i)
    expect(userList).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the background color correctly', () => {
    const { container } = render(<Main background={mockProps.background} />)

    expect(container.firstChild).toHaveStyle({
      background: `url(${mockProps.background})`
    })
  })
})
