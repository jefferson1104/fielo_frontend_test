import { GetServerSideProps } from 'next'

import UserPage from 'templates/User'

import { api } from 'utils/api'
import { Auth } from 'services/auth'
import { Users } from 'services/user'
import { ActivityType, UserFormattedType, UserType } from 'types/propsTypes'
import { sortByFieldPoints } from 'utils/sortByField'

type UserProps = {
  background: string
  users: Array<UserType>
  user: UserFormattedType
  activities: Array<ActivityType>
}

const User = (props: UserProps) => {
  return <UserPage {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
  params
}) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  try {
    // bing images
    const bingImage = await api.get('/api/bing')
    const background = JSON.stringify(bingImage.data.background)

    // get token
    const reqAuth = await Auth.getToken()
    const token = reqAuth.data.token

    // get users
    const responseUsers = await Users.getUsers(token)
    const usersData = responseUsers.data as Array<UserType>

    // check users data and ordened by points
    const users = usersData ? sortByFieldPoints(usersData) : []

    // selected user id in the list
    const userId = params?.id as string

    // get selected user
    const responseUser = await Users.getUser(token, userId)
    const userData = responseUser.data ? responseUser.data : {}

    // get selected user program
    const responseUserPrograms = await Users.getPrograms(
      token,
      userData.programId
    )
    const userProgram = responseUserPrograms.data
      ? responseUserPrograms.data
      : []

    // get selected user level
    const responseUserLevel = await Users.getUserLevel(token, userData.levelId)
    const userLevel = responseUserLevel.data ? responseUserLevel.data : []

    // get selected user activities
    const responseUserActivities = await Users.getActivities(token, userId)
    const userActivities = responseUserActivities.data
      ? responseUserActivities.data
      : []

    // create user formatted object
    const user = {
      id: userData.id,
      name: userData.name,
      balance: {
        points: userData.balance.points,
        miles: userData.balance.miles,
        currency: userData.balance.currency
      },
      image: userData.image,
      currentLevel: userLevel.name,
      program: userProgram.name
    }

    return {
      props: {
        background,
        users,
        user,
        activities: userActivities
      }
    }
  } catch (error) {
    console.log(error)
  }

  return {
    props: {}
  }
}

export default User
