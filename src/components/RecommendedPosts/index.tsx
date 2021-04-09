import React from 'react'
import getThemeColor from '../../utils/getThemeColor'
import * as S from './styles'

export type LinksProps = {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
  }
}

export type RecommendedPostsProps = {
  next: LinksProps
  previous: LinksProps
}

const RecommendedPosts = ({ next, previous }: RecommendedPostsProps) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        to={previous.fields.slug}
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        className="previous"
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        to={next.fields.slug}
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
        className="next"
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

export default RecommendedPosts
