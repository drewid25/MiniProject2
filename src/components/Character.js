import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Button } from 'antd';
import bgpic from "../images/storm-trooper2.webp"
import hero from '../images/starwars-galaxy.jpg'
//Bootstrap 5
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button'

const Character = ({ image, name, id }) => {
  

  return (
 
      
    <article 
       
      className=" grid grid-row-2 place-items-center bg-yellow8 p-6  align-center rounded-md sm:w-50 md:w-56 lg:w-60   hover:bg-yellow6 hover:drop-shadow-2xl "  >
          <div className=" grid justify-center w-28 align-center place-items-center">
           <Link 
                to={`/Character/:${id}`}
                state={{id:id}}> <img  className="rounded-full border-2 border-gray0 h-24 w-24 text-center" src={image} alt={name} />
         </Link>
      </div>

          <div className="mt-2">
      
   
           <Link 
                to={`/Character/:${id}`}
                state={{id:id}} className='text-gray0 no-underline '>
                <h4 className="text-gray0">{name}</h4></Link>
          </div>
        </article>
     
  
        

  )
}

export default Character