import React from 'react'
import { Link } from 'react-router-dom'
import {Outlet} from "react-router-dom"
import bgpic  from "../images/storm-trooper4.png"
import hero from '../images/starwars-galaxy.jpg'


import '../../src/index.css';
const NavBar = () => {
  return (
    <main className='bg-blend-normal from-white-500 bg-cover bg-center'
>
      <nav className="relative container mx-auto p-6">
        {/* Flex container */}
        <div className="flex justify-between items-center ">
          {/* logo */}
          <div className="pt-2">
           <img src={bgpic} className="h-20 w-480 "alt="storm-trooper" />
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex space-x-6 text-bold">
            <Link to="/Home" className="text-gray0 no-underline hover:text-yellow6 font-sans">HOME</Link>
            <Link to="/About"  className="text-gray0 no-underline hover:text-yellow6  font-sans">ABOUT US</Link>
            <Link to="/Characters"  className="text-gray0 no-underline hover:text-yellow6 font-sans">CHARACTERS</Link>
            <Link to="/Movies"  className="text-gray0 no-underline hover:text-yellow6 font-sans">MOVIES</Link>
          </div>
          <Link to="/" className="hidden lg:block p-3 font-sans px-6  bg-yellow6 rounded-full baseline text-white no-underline hover:bg-yellow6 hover:text-white"> Get Started</Link>
        </div>
      
      </nav>
    
     </main>
      
          
  )
}

export default NavBar;
