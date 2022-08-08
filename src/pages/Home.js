import React from 'react'
import CharacterList from '../components/CharacterList'
import SearchForm from '../components/SeachForm'
const Home = () => {
  return (
    <main>
      <SearchForm/>
      <CharacterList/>
    </main>
  )
}

export default Home