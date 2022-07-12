import { render, screen } from '@testing-library/react'

import UserActivities from '.'

import { activitiesMock } from './activitiesMock'

describe('UserActivities component', () => {
  it('should render it correctly', () => {
    const { container } = render(
      <UserActivities userActivities={activitiesMock} />
    )

    expect(
      screen.getByRole('heading', { name: /activity feed/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/show filters/i)).toBeInTheDocument()
    expect(
      screen.getByText(`${activitiesMock[0].description}`)
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with activescroll true', () => {
    const { container } = render(
      <UserActivities
        userActivities={[
          {
            id: '620be362-27a8-4531-8694-f314b03c168f',
            date: '2022-7-12',
            description:
              'Received 100 points for completing the Incentive Imperdiet senecctus sit.'
          },
          {
            id: '620be362-27a8-4531-8694-f314b03c1669',
            date: '2022-7-11',
            description: 'Completed the Incetive Imperdiet senectus sit.'
          },
          {
            id: '620be362-27a8-4531-8694-f314b03c1659',
            date: '2022-7-5',
            description: 'Completed the module Nibh quis massa.'
          },
          {
            id: '620be362-27a8-4531-8694-f314b03c1649',
            date: '2022-7-11',
            description: 'Redeemed New Roots Backpack for 100 points'
          }
        ]}
      />
    )

    expect(container.getElementsByClassName('activescroll').length).toBe(1)
  })

  it('should render with activescroll false', () => {
    const { container } = render(
      <UserActivities
        userActivities={[
          {
            id: '620be362-27a8-4531-8694-f314b03c1659',
            date: '2022-7-5',
            description: 'Completed the module Nibh quis massa.'
          },
          {
            id: '620be362-27a8-4531-8694-f314b03c1649',
            date: '2022-7-11',
            description: 'Redeemed New Roots Backpack for 100 points'
          }
        ]}
      />
    )

    expect(container.getElementsByClassName('activescroll').length).not.toBe(1)
  })
})
