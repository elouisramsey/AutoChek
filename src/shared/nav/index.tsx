import React from 'react'
import TopHeader from 'shared/top/TopHeader'
import Search from './Search'

type Props = {}

function Index({}: Props) {
  return (
    <header>
      <TopHeader />
      <Search />
    </header>
  )
}

export default Index
