import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Outlet} from "react-router-dom"
import bgpic  from "../images/storm-trooper4.png"
import hero from '../images/starwars-galaxy.jpg'


import '../../src/index.css';
const NavBar = () => {
//   
  const [navbar, setNavbar] = useState(false);

  return (
        <main className='bg-blend-normal from-white-500 bg-cover bg-center'>
        <nav className="relative container mx-auto p-6">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <img src={bgpic} className="h-20 w-480 "alt="storm-trooper" />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 bg-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="flex flex-col md:flex-row md:item-center items-center justify-center space-y-8 md:flex md:space-x-4 md:space-y-0">
                             <Link to="/Home" className="text-gray0 no-underline hover:text-yellow6 font-sans">HOME</Link>
//             <Link to="/About"  className="text-gray0 no-underline hover:text-yellow6  font-sans">ABOUT US</Link>
//             <Link to="/Characters"  className="text-gray0 no-underline hover:text-yellow6 font-sans">CHARACTERS</Link>
//             <Link to="/Movies"  className="text-gray0 no-underline hover:text-yellow6 font-sans">MOVIES</Link>
                        </ul>
                    </div>
                </div>
            </div>
      </nav>
      </main>
    );
}

export default NavBar;
