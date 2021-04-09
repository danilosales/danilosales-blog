import React from 'react'

import getThemeColor from '../../utils/getThemeColor'
import * as S from './styles'

type PostItemProps = {
  slug: string
  background?: string
  category: string
  date: string
  timeToRead?: string
  title: string
  description: string
}

const PostItem = ({
  slug,
  background = 'var(--highlight)',
  category,
  date,
  timeToRead,
  title,
  description
}: PostItemProps) => (
  <S.PostItemLink
    to={slug}
    cover
    direction="right"
    bg={getThemeColor()}
    duration={0.6}
  >
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} {!!timeToRead && `• ${timeToRead} minuto(s) de leitura`}
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
