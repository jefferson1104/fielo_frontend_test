import { render, screen } from '@testing-library/react'

import UserProfile from '.'

import { userMock } from './userMock'

describe('UserProfile component', () => {
  it('should render it correctly', () => {
    const { container } = render(<UserProfile userProfile={userMock} />)

    // avatar section
    const imageUser = screen.getByAltText(/Savannah Nguyen/i)
    const nameUser = screen.getByRole('heading', { name: /Savannah Nguyen/i })
    const programUser = screen.getByText(/Sales Incentive/i)
    expect(imageUser).toBeInTheDocument()
    expect(nameUser).toBeInTheDocument()
    expect(programUser).toBeInTheDocument()

    // score section
    const pointsUser = screen.getByText(/295/i)
    const pointsLabel = screen.getByText(/points/i)
    const milesUser = screen.getByText(/168/i)
    const milesLabel = screen.getByText(/miles/i)
    const currencyUser = screen.getByText(/1094/i)
    const currencyLabel = screen.getByText(/currency/i)
    expect(pointsUser).toBeInTheDocument()
    expect(pointsLabel).toBeInTheDocument()
    expect(milesUser).toBeInTheDocument()
    expect(milesLabel).toBeInTheDocument()
    expect(currencyUser).toBeInTheDocument()
    expect(currencyLabel).toBeInTheDocument()

    // level section
    const currentLevel = screen.getByRole('heading', {
      name: /silver/i
    })
    const nextLevel = screen.getByText(/gold/i)
    const nextLevelLabel = screen.getByText(/next tier/i)
    const inputs = screen.getAllByRole('radio')
    expect(currentLevel).toBeInTheDocument()
    expect(nextLevel).toBeInTheDocument()
    expect(nextLevelLabel).toBeInTheDocument()
    expect(inputs).toHaveLength(4)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with default avatar image', () => {
    render(
      <UserProfile
        userProfile={{
          id: 'a3276e5b-d846-435c-8a86-feb6189374b2',
          name: 'Savannah Nguyen',
          balance: {
            points: 295,
            miles: 168,
            currency: 1094.2422842619271
          },
          image: '',
          currentLevel: 'Silver',
          program: 'Sales Incentive Program Contributor'
        }}
      />
    )

    const defaultAvatar = screen.getByTestId('default-avatar')

    expect(defaultAvatar).toBeInTheDocument()
  })
})
