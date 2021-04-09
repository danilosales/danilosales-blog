import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import * as S from './styles'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage
        src="../../images/profile-photo.png"
        alt="Danilo Sales Avatar"
        placeholder="blurred"
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
