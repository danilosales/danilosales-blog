import React from 'react'
import PostItem from '../PostItem'

type HitProps = {
  hit: {
    fields: {
      slug: string
    }
    background: string
    title: string
    date: string
    description: string
    category: string
  }
}

const Hit = ({ hit }: HitProps) => (
  <PostItem
    slug={hit.fields.slug}
    background={hit.background}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    category={hit.category}
  />
)

export default Hit
