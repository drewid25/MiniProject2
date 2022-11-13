import React from 'react'
import { useState } from 'react'
import movies from '../data'
import hero from '../images/starwars-galaxy.jpg'
import NavBar from '../components/NavBar'
function Movies() {
    const [sagamovies,setSagamovies]= useState(movies)
    return (

        <main className="w-fullh-screen lg:h-full bg-no-repeat bg-cover"
     style={{
        backgroundImage: `url(${hero})`,
      
      }}> <NavBar />
           <div className="container mt-5 md:gap-x-16 lg:gap-x-0  mx-auto  grid  grid-cols-1  md:grid-cols-3 lg:grid-cols-3  ">
 {
            sagamovies.map((sagamovie) => {
                const { title, image, characters } = sagamovie
                return (
                    <div className="h50 w-75 ">
                        <img src={image} alt={title} />
                        <h4 className="text-white font-sans mt-2">{title}</h4>
                    </div>
                )
      })}
            </div>
        </main>
 
          
        
   
  )
}

export default Movies