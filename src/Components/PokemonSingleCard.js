import React, { useEffect, useState } from "react";

export const PokemonSingleCard = ({ name, url }) => {
  useEffect(() => {
    getAbilities(url);
  }, []);

  const [abilities, setAbilities] = useState([]);

  const getAbilities = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const { abilities } = await data;
    const listAbilities = [];
    abilities.map((ability) => {
      listAbilities.push(ability.ability.name);
    });
    setAbilities(listAbilities);
  };

  return (
    <div className='pokemon-single-container'>
      <h2 className='pokemonName'>{name}</h2>
      <h3>Habilidades</h3>
      <ul>
        {abilities.map((ability, i) => {
          return <li key={i}>{ability}</li>;
        })}
      </ul>
    </div>
  );
};
