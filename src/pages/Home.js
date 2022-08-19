import React from 'react'
import NavBar from '../components/NavBar'
import hero from '../images/starwars-galaxy.jpg'
import rey from "../images/rey.webp"
import { Link } from 'react-router-dom'
//Components
const Home = () => { 

  return ( 
    <main
        className="w-fullh-screen lg:h-full bg-no-repeat bg-cover"
     style={{
        backgroundImage: `url(${hero})`,
      
      }}
  >
      <NavBar />
      <section id="hero">
        <div className="container mt-3 gap-20 flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-18 space-y-0  md:space-y-0">
          {/* Left-Item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md  text-5xl md:text-left xsm:text-center text-uppercase text-white  font-bold font-sans md:text-5xl lg:text-6xl ">
              Know your favorite StarWars characters
            </h1>
            
            <p className="font-sans text-justify md:text-left lg:text-left text-white text-xl">Welcome to Starwars database where you can search for your favorite character and know a lot of details about them. You can also check in which Starwars Movie they appeared.  </p>
            <Link to="/Characters" className=" font-sans py-2 text-center bg-yellow6 rounded-full  text-white no-underline hover:bg-yellow6 hover:text-white">Quick Search</Link>
          </div>
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <img src={rey} alt="" className=" hidden md:block
            "/>
           </div>
        </div>
      </section>

  
    </main>
  
)
}

export default Home