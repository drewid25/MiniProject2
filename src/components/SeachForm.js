

import React, { useState } from 'react'
// import {useGlobalContext} from '../context'
//BOOTSTRAP 5
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';

const SearchForm = () => {
    const { setSearchTerm } = useState('')
    
   
  return (
    <Container className="container">
        <Form.Control className="me-auto" placeholder="Search your favorite character"/>
    </Container>
  )
}

export default SearchForm