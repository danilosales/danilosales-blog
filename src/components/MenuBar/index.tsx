import React, { useState, useEffect } from 'react'
import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { Bulb as Light } from '@styled-icons/boxicons-regular/Bulb'

import * as S from './styles'
import getThemeColor from '../../utils/getThemeColor'

declare global {
  interface Window {
    __theme: string
    __onThemeChange: () => void
    __setPreferredTheme: (theme: string) => void
  }
}

const MenuBar = () => {
  const [theme, setTheme] = useState('')

  const isDarkMode = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)

    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          title="Voltar para Home"
          cover
          direction="right"
          bg="#16202c"
          duration={0.6}
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search/"
          title="Pesquisar"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Ir para o topo"
          onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
