import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const List = ({ data }) => {
  const dispatch = useDispatch();
  const pokemon = useSelector((a) => a.pokemon.list);
  if (!pokemon || pokemon.length === 0) {
    return <p>No Pokemon data available</p>
  }
  console.log(pokemon, 'pokemon')
  const handler = (url) => {
      if (url) {
        dispatch({ type: 'SET_POKEMON_LIST', payload: pokemon?.filter((a) => a?.url !== url) });
      }
    }
    
  return (
    <>
      <p>List</p>
      <div className={'list'}>
        {pokemon.map(item => (<div className={'list-item'} key={item.url}>{item.name} 
          <div>
          <button onClick={() => handler(item.url)}>
          remove
        </button>
        </div>
        </div>))}
      </div>
    </>
  )

}