import React from 'react'
import { useEffect, useState } from "react";
//import getAllCharacters from '../services/llamadaALaAPI';

// arreglo temporal
/*const character = [
  {
    id: 1,
    name: 'pepe',
  },
  {
    id: 2,
    name: 'grillo',
  }
];*/

export const CharactersList = () => {
  /* Implemente aquí abajo su useState */
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true)

  /* Implemente aquí abajo su useEffect */
  useEffect(
    () => {
      const request = async () => {
        try {
          const response = await fetch("https://rickandmortyapi.com/api/character").then(res=>res.json())

          console.log("Lo que devuelve el fetch: ", response.results)
          setCharacter(response.results)
          setLoading(false)
        } catch (e) {
          console.log(e)
        }

      }

      request()


    },
    []
  )

  if (loading) {
    return (
      <div>Cargando...</div>
    )
  } else {
    return (
      <ul>
        {
          //No entendí cómo caambiar CharacterCard por el li
          character.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt="imagen del personaje"/> <br/>
              <h2>{item.name}</h2>
            </li>
          ))
        }
      </ul>
    )
  }
}
