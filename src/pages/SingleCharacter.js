import React, { useEffect,useState } from 'react'
import {useLocation} from 'react-router-dom';
import Loading from '../components/Loading'
import hero from '../images/starwars-galaxy.jpg'
const Link = require("react-router-dom").Link;
const url ="https://akabab.github.io/starwars-api/api/id/"
const SingleCharacter = () => {
const [data,setData] = useState({})
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
    <main className="p-3 h-screen"
     style={{
        backgroundImage: `url(${hero})`,
        height: `100vh`,
        backgroundAttachment: 'fixed'
      }}>
     
      <article className="flex w-8/12 mx-auto mt-5 p-4 justify-center bg-yellow6 rounded-lg">
      <div className="flex flex-col align-bottom  items-center mr-5">
          <img className="h-28 w-28  rounded-full " src={data.image} alt="" />
          <h4 className="mt-2 text-white uppercase">{data.name}</h4>
        </div>
        <div className="bg-white p-6 w-full h-96">
          <h5 className="uppercase"><span className="text-yellow8">Affilation: </span> [{data.affiliations}]</h5>
          <h5 className="uppercase"><span className="text-yellow8 uppercase">Masters: </span> [{data.masters}]</h5>
          <h5 className="uppercase"><span className="text-yellow8 uppercase">Species: </span> {data.species}</h5>
          <h5 className="uppercase"><span className="text-yellow8 uppercase">Home World: </span> {data.homeworld}</h5>

          <h5 className="uppercase"><span className="text-yellow8">Born Location: </span>{data.bornLocation}</h5>
        </div>
        <Link to="/Characters"> <button className="h-10 w-28 bg-yellow8 text-white"> Back</button></Link>
        
      </article>
   
     
    </main>
   
  )
}

export default SingleCharacter