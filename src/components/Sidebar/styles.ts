import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type SidebarContainerProps = {
  isMenuOpen: boolean
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  ${({ isMenuOpen }) => css`
    align-items: center;
    border-right: 1px solid var(--borders);
    background: var(--mediumBackground);
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    padding: 2rem;
    text-align: center;
    width: 20rem;
    transition: 0.2s ease;
    ${media.lessThan('large')`
      align-items: flex-start;
      border: 0;
      height: calc(100% - 50px);
      padding: 0;
      position: inherit;
      width: 100%;
      transform: ${() => (isMenuOpen ? 'translateX(0)' : 'translateX(-100vw)')};
    `}
  `}
`

export const SidebarLinksContainer = styled.section`
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
`
