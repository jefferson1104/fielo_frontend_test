import { Story, Meta } from '@storybook/react/types-6-0'
import UserProfile, { UserProfileProps } from '.'
import { userMock } from './userMock'

export default {
  title: 'UserProfile',
  component: UserProfile,
  args: {
    userProfile: userMock
  }
} as Meta

export const Basic: Story<UserProfileProps> = (args) => (
  <div
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <UserProfile {...args} />
  </div>
)
