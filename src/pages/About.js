import React from 'react'
import NavBar from '../components/NavBar'
import '../../src/index.css';
import hero from '../images/starwars-galaxy.jpg'
const About = () => {
  return (
    <>
    
      <main        className="w-full h-screen lg:h-screen bg-no-repeat bg-cover"
     style={{
        backgroundImage: `url(${hero})`,
      
      }}
      >
        <NavBar />
        <article className="container flex flex-col   mx-auto mt-5 p-4 justify-center bg-yellow6  rounded-lg" >
      <h1 className="section-title text-center text-white font-sans">About us</h1>
    <p className="font-sans text-white ">Our site are specifically made for Starwars movie fans who would like to know their favorite characters from different Starwars Saga. Fans have their fair share of biases when it comes to character preferences. Fans will surely enjoy.   </p>
        </article>
    
      </main></>
    
  )
}

export default About