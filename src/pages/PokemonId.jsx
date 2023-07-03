import React, { useEffect, useState } from 'react';
import Header from '../components/Pokedex/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PokemonId = () => {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonName } = useParams();

  const bgPokeGradient = {
    normal: 'bg-gradient-to-t from-orange-300 to-blue-400',
    fighting: 'bg-gradient-to-t from-amber-700 to-orange-300',
    flying: 'bg-gradient-to-t from-blue-300 to-slate-400',
    ground: 'bg-gradient-to-t from-amber-700 to-amber-950',
    rock: 'bg-gradient-to-t from-slate-400 to-indigo-300',
    bug: 'bg-gradient-to-t from-green-500 to-amber-200',
    ghost: 'bg-gradient-to-t from-purple-400 to-purple-950',
    steel: 'bg-gradient-to-t from-green-400 to-blue-300',
    fire: 'bg-gradient-to-t from-red-400 to-yellow-300',
    water: 'bg-gradient-to-t from-green-400 to-blue-300',
    electric: 'bg-gradient-to-t from-blue-400 to-yellow-300',
    grass: 'bg-gradient-to-t from-green-400 to-blue-300',
    poison: 'bg-gradient-to-t from-purple-800 to-violet-400',
    psychic: 'bg-gradient-to-t from-purple-400 to-blue-300',
    dark: 'bg-gradient-to-t from-purple-800 to-slate-600',
    ice: 'bg-gradient-to-b from-blue-400 to-indigo-500',
    fairy: 'bg-gradient-to-t from-yellow-400 to-green-400',
    dragon: 'bg-gradient-to-t from-yellow-400 to-red-600',
  };

  const borderPokeGradient = {
    normal: 'border-orange-300/70',
    fighting: 'border-amber-700/70',
    flying: 'border-blue-300/70',
    ground: 'border-amber-700/70',
    rock: 'border-slate-400/70',
    bug: 'border-green-500/70',
    ghost: 'border-purple-400/70',
    steel: 'border-green-400/70',
    fire: 'border-red-400/70',
    water: 'border-green-400/70',
    electric: 'border-blue-400/70',
    grass: 'border-green-400/70',
    poison: 'border-purple-800/70',
    dark: 'border-purple-800/70',
    ice: 'border-blue-400/70',
    fairy: 'border-yellow-400/70',
    dragon: 'border-yellow-400/70',
  };

  const textPokeGradient = {
    normal: 'text-orange-300',
    fighting: 'text-amber-700',
    flying: 'text-blue-300',
    ground: 'text-amber-700',
    rock: 'text-slate-400',
    bug: 'text-green-500',
    ghost: 'text-purple-400',
    steel: 'text-green-400',
    fire: 'text-red-400',
    water: 'text-green-400',
    electric: 'text-blue-400',
    grass: 'text-green-400',
    poison: 'text-purple-800',
    dark: 'text-purple-800',
    ice: 'text-blue-400',
    fairy: 'text-yellow-400',
    dragon: 'text-yellow-400',
  };

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    axios
      .get(URL)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);

  const getPercentStatBar = (stat_base) => {
    const percentBarProgress = (stat_base * 100) / 255;
    return `${percentBarProgress}%`;
  };

  return (
    <>
      <Header />
      <section className={`min-h-screen grid grid-rows-[1fr_auto]`}>
        <section className="text-black px-2 py-14">
          <article
            className={`max-w-[750px] rounded-[16px] ${borderPokeGradient[pokemon?.types[0].type.name]} mx-auto shadow-2xl`}
          >
            {/* Seccion Superior */}
            <section
              className={`relative h-[150px] rounded-t-[5px] ${bgPokeGradient[pokemon?.types[0].type.name]}`}
            >
              <div className="w-[180px]  mx-auto absolute left-1/2 -translate-x-1/2">
                <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
              </div>
            </section>

            {/* Informacion General */}
            <section >
              <div>
                <h3 className={`text-center mt-6 font-bold ${textPokeGradient[pokemon?.types[0].type.name]}`}>
                  {`#${pokemon?.id}`}
                </h3>
              </div>

              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <hr />
                <h2 className={`capitalize font-bold mt-3 ${textPokeGradient[pokemon?.types[0].type.name]}`}>
                  {pokemon?.name}
                </h2>
                <hr />
              </div>

              <div className="flex justify-center gap-6 text-center mt-2">
                <div>
                  <h5 className="font-bold text-sm">Weight</h5>
                  <span className="font-semibold">{pokemon?.weight}</span>
                </div>

                <div>
                  <h5 className="font-bold text-sm">Height</h5>
                  <span className="font-semibold">{pokemon?.height}</span>
                </div>
              </div>

              <section className="grid sm:grid-cols-2 gap-4">
                {/* Tipos */}
                <section className="text-center">
                  <h3 className={`font-bold ${textPokeGradient[pokemon?.types[0].type.name]}`}>Types</h3>
                
                  <section className="grid grid-cols-2 gap-4 px-2 mt-4">
                    {pokemon?.types.map((type) => (
                      <article
                        className={`p-1 font-bold px-8 border-[1px] border-gray-300 capitalize rounded-md ${bgPokeGradient[type.type.name]}`}
                        key={type.type.name}
                      >
                        {type.type.name}
                      </article>
                    ))}
                  </section>

                </section>

                {/* Habilidades */}
                <section className="text-center">
                  <h3 className={`font-bold ${textPokeGradient[pokemon?.types[0].type.name]}`}>Abilities</h3>

                  <section className="grid grid-cols-2 gap-4 px-2 mt-4 ">
                    
                    {pokemon?.abilities.map((ability) => (
                      <article
                        className={`p-1 px-6 font-bold border-[1px] border-gray-300 capitalize rounded-md truncate ${bgPokeGradient[pokemon?.types[0].type.name]}`}
                        key={ability.ability.name}
                      >
                        {ability.ability.name}
                      </article>
                    ))}
                  </section>
                </section>
              </section>

              {/* Estadísticas */}
              <section className="text-center mt-6  p-6">
                <h3 className={`font-bold ${textPokeGradient[pokemon?.types[0].type.name]}`}>Stats</h3>
                <section className="mt-4">
                  {pokemon?.stats.map((stat) => (
                    <article className="flex items-center gap-5" key={stat.stat.name}>
                      <div className={`w-12 font-bold ${textPokeGradient[pokemon?.types[0].type.name]}`}>
                        {stat.stat.name}
                      </div>
                      <div className="flex items-center justify-between w-full bg-gray-200 rounded-md h-4">
                        <div
                          className={`h-full rounded-md ${bgPokeGradient[pokemon?.types[0].type.name]}`}
                          style={{ width: getPercentStatBar(stat.base_stat) }}
                        />
                      </div>
                      <div className={`font-bold ${textPokeGradient[pokemon?.types[0].type.name]}`}>
                        {stat.base_stat}
                      </div>
                    </article>
                  ))}
                </section>
              </section>
            </section>
          </article>
        </section>
      </section>

    </>
  );

};

export default PokemonId;
