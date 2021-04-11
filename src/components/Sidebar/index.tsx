import MenuLinks from '../MenuLinks'
import React from 'react'

import Profile from '../Profile'
import SocialLinks from '../SocialLinks'

import * as S from './styles'

type SideBarProps = {
  site: {
    title: string
    position: string
    description: string
  }
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({
  site: { title, position, description },
  isMenuOpen,
  setIsMenuOpen
}: SideBarProps) => (
  <S.SidebarContainer isMenuOpen={isMenuOpen}>
    <Profile
      title={title}
      position={position}
      description={description}
      isMobileHeader={false}
    />
    <S.SidebarLinksContainer>
      <SocialLinks />
      <MenuLinks setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </S.SidebarLinksContainer>
  </S.SidebarContainer>
)

export default Sidebar
