import React from 'react'
import { Link } from 'react-router-dom'
import {Outlet} from "react-router-dom"


import '../../src/index.css';
const NavBar = () => {
  return (
    <main className='bg-gray9'>
      <nav className="relative container mx-auto p-6 " >
        {/* Flex container */}
        <div className="flex justify-between items-center ">
          {/* logo */}
          <div className="pt-2">
            <Link to="/Home"><img  className=" h-5 w-24" src="https://www.mikeanddenises.com/wp-content/uploads/2018/04/star-wars-logo-981.png" alt="starwars-logo" /></Link>
            
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            <Link to="/Home" className="text-yellow7 no-underline">Home</Link>
            <Link to="/About"  className="text-yellow7 no-underline">About us</Link>
            <Link to="/Characters"  className="text-yellow7 no-underline">Characters</Link>
            <Link to="/Movies"  className="text-yellow7 no-underline">Movies</Link>
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
