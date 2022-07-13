import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main component', () => {
  it('should render it correctly', () => {
    const { container } = render(
      <Main background={'http://image-bg.com/example.png'}>
        <h1>Main component</h1>
      </Main>
    )

    expect(
      screen.getByRole('heading', { name: /main component/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('main')).toHaveStyle(
      'background-image: url(http://image-bg.com/example.png)'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
