import React, { useEffect,useState } from 'react'
import {useLocation} from 'react-router-dom';
import Loading from '../components/Loading'
import hero from '../images/starwars-galaxy.jpg'
import movies from "../data"
import NavBar from '../components/NavBar';
import SingleChar from '../pages/SingleChar'


const Link = require("react-router-dom").Link;
const url ="https://akabab.github.io/starwars-api/api/id/"
const SingleCharacter = () => {
  const [data, setData] = useState({})
  
  const location = useLocation()
const Id = location.state.id

  const fetchCharact = async () => {
    const response = await fetch(`${url}${Id}.json`)
    const datos = await response.json()
     setData(datos)
  }
  useEffect(() => {
    fetchCharact()
  }, [])
  console.log(data)
  return (
    
    <main className="w-full h-full lg:h-full bg-no-repeat bg-cover py-6"
     style={{
        backgroundImage: `url(${hero})`,
      
      }}
      >
     <NavBar />
      <article className="container flex flex-col   mx-auto mt-5 p-4 justify-center bg-yellow6  rounded-lg">
      <div className="container flex flex-col align-bottom  items-center mr-5 relative">
      <Link to="/Characters"> <button className="font-extrabold text-white text-2xl absolute right-0 hover:text-4xl"> X</button></Link>
          <img className="h-28 w-28  rounded-full " src={data.image} alt="" />
          <h4 className="mt-2 text-white uppercase">{data.name}</h4>
        </div>
        <div className="bg-white p-6 w-full h-full">
          <h5 className="uppercase"><span className="text-yellow6">Affilation: </span> [{data.affiliations}]</h5>
          <h5 className="uppercase"><span className="text-yellow6">Apprentices: </span> [{data.apprentices}]</h5>
          <h5 className="uppercase"><span className="text-yellow6 uppercase">Masters: </span> [{data.masters}]</h5>
          <h5 className="uppercase"><span className="text-yellow6 uppercase">Species: </span> {data.species}</h5>
          <h5 className="uppercase"><span className="text-yellow6 uppercase">Height: </span> {data.height}</h5>
          <h5 className="uppercase"><span className="text-yellow6 uppercase">Eye Color: </span> {data.eyeColor}</h5>
          <h5 className="uppercase"><span className="text-yellow6 uppercase">Skin Color: </span> {data.skinColor}</h5>
          <h5 className="uppercase"><span className="text-yellow6 uppercase">Home World: </span> {data.homeworld}</h5>

          <h5 className="uppercase"><span className="text-yellow6">Born Location: </span>{data.bornLocation}</h5>
          <h5 className="uppercase"><span className="text-yellow6">Died: </span>{data.died}</h5>
          <h5 className="uppercase"><span className="text-yellow6">Died Location: </span>{data.diedLocation}</h5>
          <h5 className="uppercase"><span className="text-yellow6">Wiki: </span><a href={data.wiki} className="no-underline text-black">{data.wiki}</a></h5>

        </div>
        
        
      </article>
     
                 <div className="mx-auto font-sans text-white mb-2 items-center grid place-items-center mt-7">
        <h1>Appeared In </h1>
      </div>
      <div className="container gap-x-80 md:gap-x-16 lg:gap-x-0  mx-auto px-10 p-6 grid  grid-cols-1  md:grid-cols-3 lg:grid-cols-3 text-center   ">
      {movies.map((movie) => {
        const { characters } = movie
        for (let char in characters) {
          if (data.name === characters[char]) {
            return (
          
             <SingleChar key={movie.id} {...movie} />
        
        )
          }
        }
     
       
        
      })}     
      </div>
      <div className="grid place-items-center mb-5">
    <Link to="/Characters"> <button className="h-10 w-28 bg-yellow8 text-white justify-center mt-4"> Back</button></Link>
      </div>
     
     
    </main>
   
  )
}

export default SingleCharacter