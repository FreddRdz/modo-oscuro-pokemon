import React, { useEffect, useRef, useState } from "react";
import "../styles/pokemon-card.css";
import { PokemonSingleCard } from "./PokemonSingleCard";

const api = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126";

let listaPokemones = [];

export const PokeDex = () => {
  const [pokemones, setPokemones] = useState([]);

  const fetchApiPokemon = async (api) => {
    const response = await fetch(api);

    const data = await response.json();

    const { results } = await data;

    listaPokemones = results;

    setPokemones(results);
  };

  useEffect(() => {
    fetchApiPokemon(api);
  }, []);

  const input = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = input.current.value;
    value.trim();
    buscarPokemon(value);
  };

  const buscarPokemon = (value) => {
    const pokemonEncontrado = pokemones.filter(
      (pokemon) => pokemon.name === value
    );
    setPokemones(pokemonEncontrado);
  };

  const handleDetailPokemon = (pokemonEncontrado) => {
    console.log(pokemonEncontrado);
    buscarPokemon(pokemonEncontrado);
  };

  if (pokemones.length === 1) {
    return (
      <div className='main-pokemon-container'>
        <form onSubmit={handleSubmit}>
          <label for='pokemon'>Buscar pokemon</label>
          <input
            ref={input}
            type='text'
            name='pokemon'
            id='pokemon'
            className='inputValuePokemon'
          />
        </form>
        <div className='pokedex-container'>
          {pokemones.map((pokemon, i) => {
            return (
              <div className='pokemon-card'>
                <PokemonSingleCard key={i} {...pokemon} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className='main-pokemon-container'>
        <form onSubmit={handleSubmit}>
          <label for='pokemon'>Buscar pokemon</label>
          <input
            ref={input}
            type='text'
            name='pokemon'
            id='pokemon'
            className='inputValuePokemon'
          />
        </form>
        <div className='pokedex-container'>
          {pokemones.map((pokemon, i) => {
            return (
              <div
                className='pokemon-card'
                onClick={() => handleDetailPokemon(pokemon.name)}
              >
                <div className='pokemon-cards-container'>
                  <h2 className='pokemonName'>{pokemon.name}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
