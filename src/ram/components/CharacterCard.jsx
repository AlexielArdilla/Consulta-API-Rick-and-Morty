import React from 'react'

export const CharacterCard = ({ name, image }) => {
  return (
    <li>
      <img src={ image } alt="personaje de Rick y Morty" />
      <div>
        <span>{ name }</span>
      </div>
    </li>
  )
}

