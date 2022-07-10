import { Story, Meta } from '@storybook/react/types-6-0'
import UserList, { UsersProps } from '.'
import { usersMock } from './mock'

export default {
  title: 'UserList',
  component: UserList,
  args: {
    users: usersMock
  }
} as Meta

export const Basic: Story<UsersProps> = (args) => <UserList {...args} />
