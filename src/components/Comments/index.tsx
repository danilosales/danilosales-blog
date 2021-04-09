import React from 'react'
import ReactDiscusComments from 'react-disqus-comments'

import * as S from './styles'

export type CommentsProps = {
  url: string
  title: string
}

const Comments = ({ url, title }: CommentsProps) => {
  const completeURL = `https://danilosales.dev${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDiscusComments
        shortname="danilosales"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

export default Comments
