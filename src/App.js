import React from 'react'
import { BrowserRouter, BrowserRouter as Router, Route,Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCharacter from './pages/SingleCharacter'
import Error from './pages/Error'
// import components
import NavBar from './components/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterList from './components/CharacterList'
function App() {
  return (
  
      <BrowserRouter>
       <Routes>
          

            <Route path='Home' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='Characters'element={<CharacterList/>}/>
            <Route path='Character/:id' element={<SingleCharacter/>} />
            <Route path='*' element={<Error/>} />
      
        </Routes>
     
 </BrowserRouter>

    
  )
}

export default App
