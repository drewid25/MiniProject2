import React from 'react'
import { Link } from 'react-router-dom'
import {Outlet} from "react-router-dom"
import bgpic  from "../images/storm-trooper4.png"
import hero from '../images/starwars-galaxy.jpg'


import '../../src/index.css';
const NavBar = () => {
  return (
    <main className='bg-gradient-to-r from-white-500 bg-cover bg-center'
    style={{ 
    backgroundImage: `url(${hero})`,
    height: `100%`,
    backgroundAttachment: 'fixed'
  }}>
      <nav className="relative container mx-auto p-3">
        {/* Flex container */}
        <div className="flex justify-between items-center ">
          {/* logo */}
          <div className="pt-2 flex">
           <img src={bgpic} className="h-20 w-480 "alt="storm-trooper" />
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            <Link to="/Home" className="text-gray0 no-underline">HOME</Link>
            <Link to="/About"  className="text-gray0 no-underline">ABOUT US</Link>
            <Link to="/Characters"  className="text-gray0 no-underline">CHARACTERS</Link>
            <Link to="/Movies"  className="text-gray0 no-underline">MOVIES</Link>
          </div>
        </div>

      </nav>
      <div>
          <Outlet/>
      </div>
     </main>
      
          
  )
}

export default NavBar;
