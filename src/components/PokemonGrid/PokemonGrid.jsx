import Card from '../Card/Card'

import './PokemonGrid.css'

const PokemonGrid = ({ pokemons }) => {
  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon, idx) => (
        <Card key={idx} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonGrid
