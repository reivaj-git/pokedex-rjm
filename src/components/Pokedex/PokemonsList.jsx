import React from 'react'
import PokemonCards from './PokemonCards'

const PokemonsList = ({ pokemons }) => {
  return (
    <section className="p-4 grid auto-rows-auto gap-6 grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1200px] mx-auto ">

      {
        pokemons.map(pokemon => <PokemonCards key={pokemon.url} pokemonUrl={pokemon.url} />)
      }
    </section>
  )
}

export default PokemonsList
