import { render, screen } from '@testing-library/react'

import Main from '.'

const mockProps = {
  background: 'https://image.com/example.png'
}

describe('Main component', () => {
  it('should render it correctly', () => {
    const { container } = render(
      <Main background={mockProps.background}>
        <h1>Main component</h1>
      </Main>
    )

    expect(
      screen.getByRole('heading', { name: /main component/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toHaveStyle({
      background: `url(${mockProps.background})`
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
