import React, { useEffect,useState } from 'react'
import {useLocation} from 'react-router-dom';
import Loading from '../components/Loading'
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
    <>
      <div className="details-container">
      <div className="image-container">
          <img src={data.image} alt="" />
          <h1>{data.name}</h1>
        </div>
        <div className="description-container">
          <h4>Affilations: [{data.affiliations}]</h4>
          <h4>BornLocation:{data.bornLocation.toUpperCase()}</h4>
       </div>
      </div>
   
     
    </>
   
  )
}

export default SingleCharacter