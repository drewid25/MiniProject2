import React from 'react'
import { Link } from 'react-router-dom'

const Character = ({image,name,id}) => {
  return (
    <article className='character'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='character-footer'>
        <h3>{name}</h3>
      </div>
     
   </article>
  )
}

export default Character