import UserList from 'components/UserList'

import * as S from './styles'

type MainProps = {
  background: string
}

const Main = ({ background }: MainProps) => {
  return (
    <S.Wrapper backgroundUrl={background}>
      <UserList users={[]} />
    </S.Wrapper>
  )
}

export default Main
