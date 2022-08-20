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
           <div className="container px-6 mt-5 grid p-6 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mx-auto">
 {
            sagamovies.map((sagamovie) => {
                const { title, image, characters } = sagamovie
                return (
                    <div className="h50 w-75">
                        <img src={image} alt={title} />
                        <h4 className="text-white font-sans">{title}</h4>
                    </div>
                )
      })}
            </div>
        </main>
 
          
        
   
  )
}

export default Movies