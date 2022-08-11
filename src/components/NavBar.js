import React from 'react'
import { Link } from 'react-router-dom'
import {Outlet} from "react-router-dom"
import bgpic  from "../images/storm-trooper2.webp"

import '../../src/index.css';
const NavBar = () => {
  return (
    <main className='bg-gray9'>
      <nav className="relative container mx-auto p-6 " >
        {/* Flex container */}
        <div className="flex justify-between items-center ">
          {/* logo */}
          <div className="pt-2 flex">
           <img src={bgpic} className="h-20 w-20 "alt="storm-trooper" />
            <h4 className="text-gray0 ml-2">STAR <br></br>WARS <br></br> DB</h4>
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
