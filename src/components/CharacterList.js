import React, {useState} from 'react'
import Character from './Character'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import NavBar from '../components/NavBar'
import hero from '../images/starwars-galaxy.jpg'
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

    <section className=' overflow-y-auto p-6'
      style={{
        backgroundImage: `url(${hero})`,
        height: `100vh`,
        backgroundAttachment: 'fixed'
      }}
    >
      <NavBar/>
        <div className="mt-5 grid items-place-center p-3">
          <input
            className="ml-5 h-8 p-6 w-full rounded-full hover:outline-yellow6"
            type="text"
            placeholder="Search Character"
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
    
  )
}

export default CharacterList