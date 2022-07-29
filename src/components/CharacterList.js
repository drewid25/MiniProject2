import React from 'react'
import Character from './Character'
import Loading from './Loading'
import {useGlobalContext} from '../context'
//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CharacterList = () => {
  const { characters, loading } = useGlobalContext();

  if (loading) {
    return <Loading/>
  }
  if (characters.length < 1) {
    return (
     <h2>no character matched your search criteria</h2>
   ) 
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Characters</h2>
      <div className="character-center">
        {characters.map((item) => {
          return <Character key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default CharacterList