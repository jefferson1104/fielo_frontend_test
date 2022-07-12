import { render, screen } from '@testing-library/react'
import { usersMock } from 'components/UserList/usersMock'
import { userMock } from 'components/UserProfile/userMock'
import { activitiesMock } from 'components/UserActivities/activitiesMock'

import UserPage from '.'

jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>
    }
  }
})

jest.mock('components/Main', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Main"></div>
    }
  }
})

describe('Home Template', () => {
  it('should render it correctly', () => {
    render(
      <UserPage
        background={'https://example-image.com/image.png'}
        users={usersMock}
        user={userMock}
        activities={activitiesMock}
      />
    )

    const HeaderComponent = screen.getByTestId(/Mock Header/i)
    expect(HeaderComponent).toBeInTheDocument()

    const MainComponent = screen.getByTestId(/Mock Main/i)
    expect(MainComponent).toBeInTheDocument()
  })
})
