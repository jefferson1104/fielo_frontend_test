import { GetStaticProps } from 'next'
import { api } from 'utils/api'
import { Auth } from 'services/auth'
import { User } from 'services/user'

import HomePage from 'templates/Home'
import { UserType } from 'utils/types'

type HomeProps = {
  image: string
  users: Array<UserType>
}

const Home = ({ image, users }: HomeProps) => {
  return <HomePage background={image} users={users} />
}

export const getStaticProps: GetStaticProps = async () => {
  // bing images
  const bingData = await api.get('/api/bing')
  const image = JSON.stringify(bingData.data.background)

  // get token
  const reqAuth = await Auth.getToken()
  const token = reqAuth.data.token

  // get users
  const response = await User.getUsers(token)
  const users = response.data ? response.data : []

  return {
    props: {
      image,
      users
    }
  }
}

export default Home
