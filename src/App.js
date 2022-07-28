import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import Character from './components/Character'
import SingleCharacter from './pages/SingleCharacter'
import Error from './pages/Error'
// import components
import NavBar from './components/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Character/:id' element={<SingleCharacter/>} />
          <Route exact path='*' element={<Error/>} />
          
        
        </Routes>
      </Router>
 
    </>
    
  )
}

export default App
