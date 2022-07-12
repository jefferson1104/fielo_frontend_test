import UserList from 'components/UserList'
import UserProfile from 'components/UserProfile'

import * as S from './styles'

import { usersMock } from '../UserList/usersMock'
import { userMock } from '../UserProfile/userMock'

type MainProps = {
  background: string
}

const Main = ({ background }: MainProps) => {
  return (
    <S.Wrapper backgroundUrl={background}>
      <S.Container>
        <UserList users={usersMock} />
        <UserProfile userProfile={userMock} userLevel="Bronze" />
      </S.Container>
    </S.Wrapper>
  )
}

export default Main
