import Header from 'components/Header'
import Main from 'components/Main'
import UserList from 'components/UserList'
import { UserType } from 'utils/types'

type HomePageTemplateProps = {
  background: string
  users: Array<UserType>
}

const HomePage = ({ background, users }: HomePageTemplateProps) => {
  return (
    <>
      <Header />
      <Main background={background}>
        <UserList users={users} />
      </Main>
    </>
  )
}

export default HomePage
