import * as S from './styles'

import { usersMock } from './mock'

type UserType = {
  id: string
  name: string
  balance: {
    points: number
    miles: number
    currency: number
  }
  image: string
}

export type UsersProps = {
  users: Array<UserType>
}

const UserList = ({ users }: UsersProps) => {
  console.log(users)
  return (
    <S.Wrapper>
      <S.Header>
        <p>Pos.</p>
        <p>Member</p>
        <p>Points</p>
      </S.Header>

      <div className="users">
        {usersMock.map((user, index) => {
          return (
            <S.List key={user.id}>
              <span>{index + 1}</span>
              <div className="user-info">
                <img src={user.image} alt={user.name} />
                <p>{user.name}</p>
              </div>
              <span>{user.balance.points}</span>
            </S.List>
          )
        })}
      </div>
    </S.Wrapper>
  )
}

export default UserList
