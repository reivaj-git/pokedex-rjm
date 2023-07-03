import React, { useEffect, useState } from 'react'
import Header from '../components/Pokedex/Header'
import { useSelector } from 'react-redux'
import axios from 'axios'
import PokemonsList from '../components/Pokedex/PokemonsList'

const Pokedex = () => {
  // * **** Estados ****
  const [pokemons, setPokemons] = useState([])

  const [namePokemon, setNamePokemon] = useState("")

  const [types, setTypes] = useState([])

  const [currentType, setCurrentType] = useState("")

  // * **** Funciones ****

  const nameTrainer = useSelector(store => store.nameTrainer)

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.includes(namePokemon.toLowerCase().trim()))

  const handleSubmit = ((e) => {
    e.preventDefault()
    setNamePokemon(e.target.namePokemonId.value)
  })

  const handleChangeType = (e) => {
    setCurrentType(e.target.value)
  }

  // * **** Efectos ****

  useEffect(() => {
    if (!currentType) {
      const URL = "https://pokeapi.co/api/v2/pokemon/?limit=40/"

      axios.get(URL)
        .then(({ data }) => setPokemons(data.results))
        .catch((err) => console.log(err))
    }
  }, [currentType])

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type"
    axios.get(URL)
      .then(({ data }) => setTypes(data.results))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {

    if (currentType) {
      const URL = `https://pokeapi.co/api/v2/type/${currentType}/`
      axios.get(URL)
        .then(({ data }) => {
          console.log(data.pokemon)
          const pokemonbyType = data.pokemon.map(pokemon => pokemon.pokemon)
          setPokemons(pokemonbyType)
        })
        .catch((err) => console.log(err))

    }
  }, [currentType])

  // * **** main ****

  return (
    <>
      <Header />
      <main className='mt-8' >

        <p className="text-center text-xl font-bold mb-4">
          <span className="text-red-500">Welcome {nameTrainer} </span>Here you can find your favorite pokemon
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row mb-4">
            <div className="flex flex-col sm:flex-row">
              <input
                id="namePokemonId"
                placeholder="Type a name pokemon..."
                type="text"
                className="px-4 py-2 mb-2 sm:mb-0 sm:mr-2 bg-white rounded-md border border-gray-300"
              />
              <button className="px-4 py-2 bg-red-400 hover:bg-red-500 text-white rounded-md">Search</button>
            </div>
            <select
              onChange={handleChangeType}
              className="px-4 py-2 mb-2 sm:mb-0 sm:ml-2 bg-white rounded-md border border-gray-300"
            >
              <option value="">All</option>
              {types.map((type) => (
                <option value={type.name} key={type.url}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </form>

        <PokemonsList pokemons={pokemonsByName} />
      </main>

    </>

  )
}

export default Pokedex