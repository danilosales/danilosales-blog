import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import getThemeColor from '../../utils/getThemeColor'

import links from './content'

import * as S from './styles'

export type MenuLinksProps = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  isMenuOpen: boolean
}

const MenuLinks = ({ setIsMenuOpen, isMenuOpen }: MenuLinksProps) => {
  const menuLinkClickTrack = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => (
          <S.MenuLinksItem key={i}>
            <AniLink
              cover
              direction="left"
              bg={getThemeColor()}
              to={link.url}
              onClick={menuLinkClickTrack}
              activeClassName="active"
            >
              {link.label}
            </AniLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}

export default MenuLinks
