import styled from 'styled-components'
import media from 'styled-media-query'

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 6.4rem 3rem;

  ${media.lessThan('large')`
    padding: 3rem 1.4rem 0;
    max-width: 100%;
  `}

  iframe[src*='ads-iframe'] {
    display: none;
  }

  #discus_thread {
    a {
      color: var(--highlight) !important;
    }
  }

  .publisher-anchor-color a {
    color: rgb(31 153 211) !important;
  }

  .active .publisher-nav-color::after {
    background: rgb(31 153 211) !important; 
  }
`

export const CommentsTitle = styled.h2`
  color: var(--postColor);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;

  ${media.lessThan('large')`
    font-size: 1.375rem;
  `}
`
