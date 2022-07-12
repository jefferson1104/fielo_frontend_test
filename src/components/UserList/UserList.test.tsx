/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prefer-const */
import { render, screen, fireEvent } from '@testing-library/react'
import UserList from '.'

// mock user list
import { usersMock } from './usersMock'

// mock useRouter
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()
useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

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

  it('should render with default avatar image', () => {
    render(
      <UserList
        users={[
          {
            id: 'a3276e5b-d846-435c-8a86-feb6189374b3',
            name: 'Cameron Williamson',
            balance: {
              points: 541,
              miles: 623,
              currency: 1070.977381376953
            },
            image: ''
          }
        ]}
      />
    )

    const defaultAvatar = screen.getByTestId('default-avatar')

    expect(defaultAvatar).toBeInTheDocument()
  })

  it('should render with the user id in the url', async () => {
    render(
      <UserList
        users={[
          {
            id: 'a3276e5b-d846-435c-8a86-feb6189374b3',
            name: 'Cameron Williamson',
            balance: {
              points: 541,
              miles: 623,
              currency: 1070.977381376953
            },
            image:
              'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/2.jpg'
          }
        ]}
      />
    )

    const user = screen.getByRole('img', { name: /Cameron Williamson/i })

    fireEvent.click(user)

    expect(push).toHaveBeenCalledWith(
      '/user/a3276e5b-d846-435c-8a86-feb6189374b3'
    )
  })
})
