import React from 'react'
import Character from './Character'
import Loading from './Loading'
import {useGlobalContext} from '../context'
import SearchForm from "../components/SeachForm"
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
      <section className='mt-5 ' >
        <SearchForm/>>
      <h2 className='text-center text-white'>Characters</h2>
  
      <div className=" p-6 w-screen grid grid-cols-6 gap-y-5 md:grid-cols-3 lg:grid-cols-4 slg:grid-cols-3 mlg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 sm:grid-cols-1 xsm:grid-cols-1 text-center" >
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