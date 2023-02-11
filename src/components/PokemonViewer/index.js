import {useEffect, useState} from 'react';


function PokemonViewer({ id }) {
  // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        
      console.log(data)
      });
      
  }
  , [id]);

  if (!pokemon) {
    return <p className="p">Click the button below to get a random pokemon</p>;
  }




  return (
    <div className="pokemon-viewer">
      <p className='pokemon-name'>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p className='pokemon-type'>Type: {pokemon.types[0].type.name}</p>
      <p className='pokemon-weight'>Weight: {pokemon.weight}</p>
      <p className='pokemon-height'>Height: {pokemon.height}</p>
      <p className='pokemon-ability'>Ability: {pokemon.abilities[0].ability.name}, {pokemon.abilities[1].ability.name}</p>
      <p className='pokemon-moves'>Moves: {pokemon.moves[0].move.name}, {pokemon.moves[1].move.name}, {pokemon.moves[2].move.name}, {pokemon.moves[3].move.name}</p>
    </div>
  );
}

export default PokemonViewer;
