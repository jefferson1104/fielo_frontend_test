import UserList from 'components/UserList'
import UserProfile from 'components/UserProfile'
import UserActivities from 'components/UserActivities'

import * as S from './styles'

import { usersMock } from '../UserList/usersMock'
import { userMock } from '../UserProfile/userMock'
import { activitiesMock } from '../UserActivities/activitiesMock'

type MainProps = {
  background: string
}

const Main = ({ background }: MainProps) => {
  return (
    <S.Wrapper backgroundUrl={background}>
      <S.Container>
        <UserList users={usersMock} />
        <UserProfile userProfile={userMock} userLevel="Bronze" />
        <UserActivities userActivities={activitiesMock} />
      </S.Container>
    </S.Wrapper>
  )
}

export default Main
