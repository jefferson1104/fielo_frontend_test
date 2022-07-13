import { Fragment } from 'react'

import Header from 'components/Header'
import Main from 'components/Main'
import UserList from 'components/UserList'

import { UserType } from 'types/propsTypes'

type HomePageTemplateProps = {
  background: string
  users: Array<UserType>
}

const HomePage = ({ background, users }: HomePageTemplateProps) => {
  return (
    <Fragment>
      <Header />
      <Main background={background}>
        <UserList users={users} />
      </Main>
    </Fragment>
  )
}

export default HomePage
