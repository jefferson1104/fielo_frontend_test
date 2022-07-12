import { useRouter } from 'next/router'
import { UserType } from 'types/propsTypes'

import { BiUserCircle } from 'react-icons/bi'

import * as S from './styles'

export type UsersProps = {
  users: Array<UserType>
}

const UserList = ({ users }: UsersProps) => {
  const router = useRouter()

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
            <S.List
              key={user.id}
              onClick={() => router.push(`/user/${user.id}`)}
            >
              <span>{index + 1}</span>
              <div className="user-info">
                {user.image ? (
                  <img src={user.image} alt={user.name} />
                ) : (
                  <BiUserCircle data-testid="default-avatar" />
                )}
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
