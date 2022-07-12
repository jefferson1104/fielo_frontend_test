import { Story, Meta } from '@storybook/react/types-6-0'
import UserActivities, { UserActivitiesProps } from '.'
import { activitiesMock } from './activitiesMock'

export default {
  title: 'UserActivities',
  component: UserActivities,
  args: {
    userActivities: activitiesMock
  }
} as Meta

export const Basic: Story<UserActivitiesProps> = (args) => (
  <div
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <UserActivities {...args} />
  </div>
)
