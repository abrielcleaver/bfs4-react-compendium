import React from 'react';

export default function Pokedex({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <div key={pokemon.id}>
          <p>{poke.pokemon}</p>
          <img src={poke.url_image} />
          <p>Type 1: {poke.type_1}</p>
          <p>Attack: {poke.attack}</p>
          <p>Height: {poke.height}</p>
          <p>Weight: {poke.weight}</p>
        </div>
      ))}
    </div>
  );
}
