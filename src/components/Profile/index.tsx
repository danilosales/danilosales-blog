import React from 'react'

import Avatar from '../Avatar'
import * as S from './styles'
import getThemeColor from '../../utils/getThemeColor'

type ProfileProps = {
  title: string
  position: string
  description: string
  isMobileHeader: boolean
}

const Profile = ({
  title,
  position,
  description,
  isMobileHeader
}: ProfileProps) => {
  return (
    <S.ProfileContainer isMobileHeader={isMobileHeader}>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileContainer>
  )
}

export default Profile
