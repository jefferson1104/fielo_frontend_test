import { GetServerSideProps } from 'next'

import { api } from 'utils/api'
import { Auth } from 'services/auth'
import { Users } from 'services/user'

import HomePage from 'templates/Home'
import { UserType } from 'types/propsTypes'

type HomeProps = {
  background: string
  users: Array<UserType>
}

const Home = ({ background, users }: HomeProps) => {
  return <HomePage background={background} users={users} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // bing images
    const bingImage = await api.get('/api/bing')
    const background = JSON.stringify(bingImage.data.background)

    // get token
    const reqAuth = await Auth.getToken()
    const token = reqAuth.data.token

    // get users
    const response = await Users.getUsers(token)
    const data = response.data as Array<UserType>

    // verify users data and ordened by points
    const users = data
      ? data.sort((a, b) => {
          if (a.balance.points > b.balance.points) {
            return -1
          } else {
            return 0
          }
        })
      : []

    return {
      props: {
        background,
        users
      }
    }
  } catch (error) {
    console.log(error)
  }

  return {
    props: {}
  }
}

export default Home
