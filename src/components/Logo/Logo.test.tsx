import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('Logo component', () => {
  it('should render the correctly', () => {
    render(<Logo />)

    expect(screen.getByTestId('newroots')).toBeInTheDocument()
  })
})
