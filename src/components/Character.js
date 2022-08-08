import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Button } from 'antd';
//Bootstrap 5
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button'


const Character = ({image,name,id}) => {
  return (
    <>
      <Row>
        <Col  >
        <article className='character'  >
          <div className='img-container'>
            <img src={image} alt={name} />
          </div>

          <div className='character-footer'>
            <h3>{name}</h3>
              <Button type="primary">More Info</Button>
              <Link 
                to={`/Character/:${id}`}
                state={{id:id}}>
              details </Link>
          </div>
        </article>
        </Col>
      </Row>
    </>
        

  )
}

export default Character