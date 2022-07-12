import { useEffect, useState } from 'react'

import { GiLinkedRings } from 'react-icons/gi'
import { FaDollarSign } from 'react-icons/fa'
import { BiUserCircle } from 'react-icons/bi'

import { UserFormattedType } from 'types/propsTypes'

import * as S from './styles'

export type UserProfileProps = {
  userProfile: UserFormattedType
}

const levels = ['Bronze', 'Silver', 'Gold', 'Platinum']

const UserProfile = ({ userProfile }: UserProfileProps) => {
  const [nextLevel, setNextLevel] = useState('')
  const [userCurrentlevel, setUserCurrentLevel] = useState('')

  useEffect(() => {
    // verify and set next level
    levels.map((level, index, element) => {
      if (level === userProfile.currentLevel) {
        setNextLevel(element[index + 1])
      }
    })

    // set current level
    setUserCurrentLevel(userProfile.currentLevel)
  }, [userProfile.currentLevel])

  return (
    <S.Wrapper>
      <S.Avatar>
        {userProfile.image ? (
          <img src={userProfile.image} alt={userProfile.name} />
        ) : (
          <BiUserCircle data-testid="default-avatar" />
        )}
        <h2>{userProfile.name}</h2>
        <p>{userProfile.program}</p>
      </S.Avatar>

      <S.Divider />

      <S.Score>
        <div>
          <p>
            <GiLinkedRings size={14} color={'#1C8EFF'} />{' '}
            {userProfile.balance.points}
          </p>
          <span>Points</span>
        </div>

        <div>
          <p>{userProfile.balance.miles}</p>
          <span>Miles</span>
        </div>

        <div>
          <p>
            <FaDollarSign size={14} color={'#8A94A6'} />
            {Math.round(userProfile.balance.currency)}
          </p>
          <span>Currency</span>
        </div>
      </S.Score>

      <S.Divider />

      <S.Level>
        <div>
          <h3>{userCurrentlevel}</h3>

          {userCurrentlevel !== 'Platinum' && (
            <p>
              Next Tier <span>{nextLevel}</span>
            </p>
          )}
        </div>

        <S.InputLevels>
          {levels.map((level, index) => {
            return (
              <div key={index}>
                <input
                  readOnly={true}
                  checked={level === userCurrentlevel ? true : false}
                  type="radio"
                />
              </div>
            )
          })}
        </S.InputLevels>
      </S.Level>

      <S.Divider />
    </S.Wrapper>
  )
}

export default UserProfile
