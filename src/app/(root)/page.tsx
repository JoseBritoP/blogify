import CardList from '@/components/cards/CardList'
import CategoryList from '@/components/cards/CategoryList'
import Featured from '@/components/Featured'
import Menu from '@/components/Menu'
import React from 'react'

export default function HomePage() {
  return (
    <main>
      <Featured/>
      <CategoryList/>
      <section>
        <CardList/>
        <Menu/>
      </section>
    </main>
  )
}
