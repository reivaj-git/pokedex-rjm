import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

const PokemonCards = ({ pokemonUrl }) => {

  //* Estados
  const [pokemon, setPokemon] = useState(null)
  console.log(pokemon)

  //* Base de colores

  const bgPokeGradient = {
    normal: "bg-gradient-to-t from-orange-300 to-blue-400",
    fighting: "bg-gradient-to-t from-amber-700 to-orange-300",
    flying: "bg-gradient-to-t from-blue-300 to-slate-400",
    ground: "bg-gradient-to-t from-amber-700 to-amber-950",
    rock: "bg-gradient-to-t from-slate-400 to-indigo-300",
    bug: "bg-gradient-to-t from-green-500 to-amber-200",
    ghost: "bg-gradient-to-t from-purple-400 to-purple-950",
    steel: "bg-gradient-to-t from-green-400 to-blue-300",
    fire: "bg-gradient-to-t  from-red-400 to-yellow-300",
    water: "bg-gradient-to-t from-green-400 to-blue-300",
    electric: "bg-gradient-to-t from-blue-400 to-yellow-300",
    grass: "bg-gradient-to-t  from-green-400 to-blue-300",
    poison: "bg-gradient-to-t  from-purple-800 to-violet-400",
    psychic: "bg-gradient-to-t  from-purple-400 to-blue-300",
    dark: "bg-gradient-to-t  from-purple-800 to-slate-600",
    ice: "bg-gradient-to-b  from-blue-400 to-indigo-500",
    fairy: "bg-gradient-to-t  from-yellow-400 to-green-400",
    dragon: "bg-gradient-to-t  from-yellow-400 to-red-600"
  }

  const borderPokeGradient = {
    normal: "border-orange-300/70",
    fighting: "border-amber-700/70",    
    flying: "border-blue-300/70",    
    ground: "border-amber-700/70",    
    rock: "border-slate-400/70",    
    bug: "border-green-500/70",   
    ghost: "border-purple-400/70",    
    steel: "border-green-400/70",  
    fire: "border-red-400/70",    
    water: "border-green-400/70",   
    electric: "border-blue-400/70",   
    grass: "border-green-400/70",   
    poison: "border-purple-800/70",  
    dark: "border-purple-800/70",   
    ice: "border-blue-400/70",   
    fairy: "border-yellow-400/70",  
    dragon: "border-yellow-400/70"   
  }
  const textPokeGradient = {
    normal: "text-orange-300",
    fighting: "text-amber-700",
    flying: "text-blue-300",
    ground: "text-amber-700",
    rock: "text-slate-400",
    bug: "text-green-500",
    ghost: "text-purple-400",
    steel: "text-green-400",
    fire: "text-red-400",
    water: "text-green-400",
    electric: "text-blue-400",
    grass: "text-green-400",
    poison: "text-purple-800",
    dark: "text-purple-800",
    ice: "text-blue-400",
    fairy: "text-yellow-400",
    dragon: "text-yellow-400"
  };




  //* Funciones
  const formatTypesPokemon = ((types = []) => {
    const nameTypes = types.map((type) => type.type.name)
    const titleTypes = nameTypes.join(" / ")
    return titleTypes
  })

  // * Efectos
  useEffect(() => {

    axios.get(pokemonUrl)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err))

  }, [])

  return (
    <Link to={`/pokedex/${pokemon?.name}`}
      className={`text-center border-[5px] ${borderPokeGradient[pokemon?.types[0].type.name]} ` } >

      <section className={`text-center relative h-40 ${bgPokeGradient[pokemon?.types[0].type.name]}`} >

        <div className="absolute px-12 -bottom-14">
          <img src={pokemon?.sprites?.other?.["official-artwork"]?.front_default} alt="Imagen del pokemon" />
        </div>

      </section>

      <section  >
        <h3 className={`mt-12 ${textPokeGradient[pokemon?.types[0].type.name]} font-bold`}>{pokemon?.name}</h3>
        <h5 className="text-sm text-gray-500">Type</h5>
        <span className={`text-lg font-bold ${textPokeGradient[pokemon?.types[0].type.name]}`}>{formatTypesPokemon(pokemon?.types)}</span>
        <hr />

        <section className="grid grid-cols-3 grid-rows-2 gap-2 p-2">
          {pokemon?.stats.slice(0, 6).map(stat => (
            <div key={stat.stat.url}>
              <h6>{stat.stat.name}</h6>
              <span className={`text-lg font-bold ${textPokeGradient[pokemon?.types[0].type.name]}`}>{stat.base_stat}</span>
            </div>
          ))}
        </section>
      </section>
    </Link>
  )
}

export default PokemonCards