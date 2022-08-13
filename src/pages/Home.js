import React from 'react'
//Components
const Home = () => { 

  return ( 
    <div className='flex justify-center items-center text-center'
      style={{ 
      height: `86.9vh`,
    }}>
    <div>
      <h1 className='text-gray0 text-8xl font-extrabold'>WELCOME TO STARWARS CHARACTER DATABASE</h1>
      <button className='bg-gray9 text-gray0 border-none p-6 mt-6'>SEARCH CHARACTERS</button>
    </div>
    
    </div>
)
}

export default Home