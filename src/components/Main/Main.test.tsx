import { render, screen } from '@testing-library/react'

import Main from '.'

const mockProps = {
  background: 'https://image.com/example.png'
}

describe('Main component', () => {
  it('should render the heading', () => {
    const { container } = render(<Main background={mockProps.background} />)

    expect(
      screen.getByRole('heading', { name: /Fielo test/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the background color correctly', () => {
    const { container } = render(<Main background={mockProps.background} />)

    expect(container.firstChild).toHaveStyle({
      background: `url(${mockProps.background})`
    })
  })
})
