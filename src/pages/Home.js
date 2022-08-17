import React from 'react'
import NavBar from '../components/NavBar'
import hero from '../images/starwars-galaxy.jpg'
import rey from "../images/rey.png"
import { Link } from 'react-router-dom'
//Components
const Home = () => { 

  return ( 
    <main
     style={{
        backgroundImage: `url(${hero})`,
       opacity:1,
        height: `110vh`,
        backgroundAttachment: 'fixed'
      }}>
      <NavBar />
      <section id="hero">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-18 space-y-0  md:space-y-0">
          {/* Left-Item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-5xl text-uppercase text-white  font-bold font-sans sm:text-center md:text-5xl md:text-left">
              Know your favorite StarWars characters
            </h1>
            
            <p className="font-sans text-white">Welcome to Starwars database where you can search for your favorite character and know a lot of details about them. You can also check in which Starwars Movie they appeared.  </p>
            <Link to="/Characters" className=" font-sans py-2 text-center bg-yellow6 rounded-full  text-white no-underline hover:bg-yellow6 hover:text-white">Quick Search</Link>
          </div>
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <img src={rey} alt="" className=" hidden h-1/2 md:block
            "/>
           </div>
        </div>
      </section>

  
    </main>
  
)
}

export default Home