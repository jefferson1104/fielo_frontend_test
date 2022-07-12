import { Story, Meta } from '@storybook/react/types-6-0'
import UserList, { UsersProps } from '.'
import { usersMock } from './usersMock'

export default {
  title: 'UserList',
  component: UserList,
  args: {
    users: usersMock
  }
} as Meta

export const Basic: Story<UsersProps> = (args) => (
  <div
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <UserList {...args} />
  </div>
)
