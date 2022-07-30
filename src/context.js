import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = "https://akabab.github.io/starwars-api/api/all.json"
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [characters, setCharacters] = useState([])
  const fetchCharacters = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      const newChar = []
      for (const datos in data) {
        const char = data[datos]
        newChar.push(char)
             
      }

      if (newChar) {
        const newCharacters = newChar.map((item) => {
          const {
            id,
            name,
            height,
            mass,
            gender,
            homeworld,
            wiki,
            image,
            born,
            bornLocation,
            died,
            diedLocation,
            species,
            hairColor,
            eyeColor,
            skinColor,
            cybernetics,
            affiliations,
            masters,
            apprentices,
          } = item
          return {
            id,
            name,
            height,
            mass,
            gender,
            homeworld,
            wiki,
            image,
            born,
            bornLocation,
            died,
            diedLocation,
            species,
            hairColor,
            eyeColor,
            skinColor,
            cybernetics,
            affiliations,
            masters,
            apprentices,
          }
          
        })
      console.log(newCharacters)
const newlistCharacters = newCharacters.filter(character => {
    if (character.id !== 26
      && character.id !== 28
      && character.id !== 37
      && character.id !== 43
      && character.id !== 47
      && character.id !== 49
      && character.id !== 56
      && character.id !== 57
      && character.id !== 61
      && character.id !== 64
      && character.id !== 77
      && character.id !== 82
    ) {
      return character
    }
  })
setCharacters(newlistCharacters)
      } else {
        setCharacters([])
      }
   
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [searchTerm])


  

  console.log(characters)

  return <AppContext.Provider
    value={{
      loading,
      characters,
      setCharacters,
      setSearchTerm,
    }}
  >{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }