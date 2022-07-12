import { render, screen } from '@testing-library/react'

import { usersMock } from './usersMock'

import UserList from '.'

describe('UserList component', () => {
  it('should render it correctly', () => {
    render(<UserList users={usersMock} />)

    expect(screen.getByText('Pos.')).toBeInTheDocument()
    expect(screen.getByText('Member')).toBeInTheDocument()
    expect(screen.getByText('Points')).toBeInTheDocument()
  })

  it('should render list with users', () => {
    render(<UserList users={usersMock} />)

    const userName = screen.getByText('Cameron Williamson')
    const userAvatar = screen.getByRole('img', {
      name: /cameron williamson/i
    })
    const userPoints = screen.getByText(/541/i)

    expect(userName).toBeInTheDocument()
    expect(userAvatar).toBeInTheDocument()
    expect(userPoints).toBeInTheDocument()
  })
})
