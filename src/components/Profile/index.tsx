import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import * as S from './styles'
import getThemeColor from '../../utils/getThemeColor'

const Profile = () => {
  const data = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <S.ProfileAuthor>
          {data.site.siteMetadata.title}
          <S.ProfilePosition>
            {data.site.siteMetadata.position}
          </S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>
        {data.site.siteMetadata.description}
      </S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
