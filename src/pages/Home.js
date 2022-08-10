import React from 'react'
import CharacterList from '../components/CharacterList'
import SearchForm from '../components/SeachForm'
import hero from '../images/star-wars-poster-hero.jpg'
const Home = () => { 
  return (
    <main className="bg-gray9">

      <div className="w-screen h-800 ">
        <img src={hero} alt="" />
    </div>
    </main>
)
}

export default Home