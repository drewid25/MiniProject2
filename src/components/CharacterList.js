import React from 'react'
import Character from './Character'
import Loading from './Loading'
import {useGlobalContext} from '../context'

const CharacterList = () => {
  const { characters, setCharacters, loading } = useGlobalContext();

  if (loading) {
    return <Loading/>
  }
  if (characters.length < 1) {
    return (
     <h2>no character matched your search criteria</h2>
   ) 
  }
  return (
    <>
    <section className='section' >
      <h2 className='character-title'>Characters</h2>
  
      <div className="character-div">
          {characters.map((item) => {
         console.log(item.id)
          return <Character key={item.id} {...item}/>
        })}
      </div>
     
      
      </section>
      </>
  )
}

export default CharacterList