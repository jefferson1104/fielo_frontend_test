import { render, screen } from '@testing-library/react'

import { usersMock } from './mock'

import UserList from '.'

describe('UserList component', () => {
  it('should render it correctly', () => {
    render(<UserList users={usersMock} />)

    expect(screen.getByText('Pos.')).toBeInTheDocument()
    expect(screen.getByText('Member')).toBeInTheDocument()
    expect(screen.getByText('Points')).toBeInTheDocument()
  })
})
