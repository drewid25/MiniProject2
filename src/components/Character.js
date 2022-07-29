import React from 'react'
import { Link } from 'react-router-dom'
//Bootstrap 5
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'



const Character = ({image,name,id}) => {
  return (
    <Container>
      <Row>
        <Col>
        <article className='character'>
          <div className='img-container'>
            <img src={image} alt={name} />
          </div>

          <div className='character-footer'>
            <h3>{name}</h3>
            <Button variant="warning">Details</Button>
          </div>
        </article>
        </Col>
      </Row>
    </Container>
        

  )
}

export default Character