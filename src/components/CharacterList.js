import React, {useState} from 'react'
import Character from './Character'
import Loading from './Loading'
import {useGlobalContext} from '../context'

import bgpic  from "../images/storm-trooper2.webp"
const CharacterList = () => {
  const { characters, setCharacters, loading } = useGlobalContext();
  const [search,setSearch] = useState('')
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
      <section className='mt-5'  >
        <div>
          <input
            className="ml-5 h-8 p-6 w-72"
            type="text"
            placeholder="Search"
            onChange={(e) => { setSearch(e.target.value) }} />
       </div>
      <h2 className='text-center text-white mt-5'>Characters</h2>
  
      <div className=" p-6 w-screen grid grid-cols-6 gap-y-5 md:grid-cols-3 lg:grid-cols-4 slg:grid-cols-3 mlg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 sm:grid-cols-1 xsm:grid-cols-1 text-center" >
          {characters.filter((item) => {
            if (search == "") {
              return item
            } else if (item.name.toLowerCase().includes(search.toLocaleLowerCase())) {
              return item
            }
          }).map((item) => {
         console.log(item.name)
          return <Character key={item.id} {...item}/>
        })}
      </div>
     
      
      </section>
      </>
  )
}

export default CharacterList