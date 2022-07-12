import { BiRadioCircleMarked } from 'react-icons/bi'
import { ImFlag } from 'react-icons/im'
import { AiFillLock } from 'react-icons/ai'
import { BsBookmarkFill } from 'react-icons/bs'

import * as S from './styles'

type Activity = {
  id: string
  date: string
  description: string
}

export type UserActivitiesProps = {
  userActivities: Array<Activity>
}

const UserActivities = ({ userActivities }: UserActivitiesProps) => {
  const activityQtd = userActivities.length

  function activityDateFormat(date: string) {
    const formattedDate = new Date(date.substr(-2)).toLocaleDateString(
      'en-us',
      { weekday: 'long' }
    )
    return formattedDate
  }

  function renderIcon(activity: string) {
    if (activity.indexOf('Received') !== -1) {
      return <BiRadioCircleMarked color={'#1C8EFF'} size={40} />
    } else if (activity.indexOf('Completed the Incetive') !== -1) {
      return <ImFlag color={'#4BCA8D'} size={25} />
    } else if (activity.indexOf('Redeemed') !== -1) {
      return <AiFillLock color={'#F7A452'} size={25} />
    } else if (activity.indexOf('Completed the module') !== -1) {
      return <BsBookmarkFill color={'#4BCA8D'} size={20} />
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <h2>Activity Feed</h2>
        <p>Show Filters</p>
      </S.Header>

      <S.ActivitiesContainer className={activityQtd > 3 ? 'activescroll' : ''}>
        {userActivities.map((activity, index) => {
          return (
            <div key={index}>
              <S.Activity>
                {renderIcon(activity.description)}
                <div>
                  <span>{activityDateFormat(activity.date)}</span>

                  <p>{activity.description}</p>
                </div>
              </S.Activity>
              <S.Divider />
            </div>
          )
        })}
      </S.ActivitiesContainer>
    </S.Wrapper>
  )
}

export default UserActivities
