import MenuLinks from '../MenuLinks'
import React from 'react'

import Profile from '../Profile'
import SocialLinks from '../SocialLinks'

import * as S from './styles'

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar
