import * as S from './styles'

type User = {
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
  users: Array<User>
}

const UserList = ({ users }: UsersProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <p>Pos.</p>
        <p>Member</p>
        <p>Points</p>
      </S.Header>

      <div className="users">
        {users.map((user, index) => {
          return (
            <S.List key={user.id}>
              <span>{index + 1}</span>
              <div className="user-info">
                <img
                  src={user.image ? user.image : 'img/avatar_default.png'}
                  alt={user.name}
                />
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
