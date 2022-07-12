import Header from 'components/Header'
import Main from 'components/Main'

import UserList from 'components/UserList'
import UserProfile from 'components/UserProfile'
import UserActivities from 'components/UserActivities'

import { ActivityType, UserFormattedType, UserType } from 'types/propsTypes'

type UserPageTemplateProps = {
  background: string
  users: Array<UserType>
  user: UserFormattedType
  activities: Array<ActivityType>
}

const UserPage = ({
  background,
  users,
  user,
  activities
}: UserPageTemplateProps) => {
  console.log('ACTIVITIES =>', activities)
  return (
    <>
      <Header />
      <Main background={background}>
        <UserList users={users} />
        <UserProfile userProfile={user} />
        <UserActivities userActivities={activities} />
      </Main>
    </>
  )
}

export default UserPage
