import { useState, useEffect } from 'react'

import { getPokemons } from './api/PokemonAPI'

import PokemonGrid from './components/PokemonGrid/PokemonGrid'
import Searchbar from './components/Searchbar/Searchbar'
import Loader from './components/Loader/Loader'

import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchString, setSearchString] = useState('')

  const onSearchStringChange = (e) => {
    setSearchString(e.target.value)
  }

  const fetchPokemons = () => {
    setIsLoading(true)
    setPokemons([])

    getPokemons()
      .then((pokemons) => setPokemons(pokemons))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchString.toLowerCase())
  )

  return (
    <main>
      <section>
        <h1 className="title">Pokedex</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="pokedex">
            <Searchbar
              searchInput={searchString}
              handleChange={onSearchStringChange}
            />
            <PokemonGrid pokemons={filteredPokemons} />
          </div>
        )}
      </section>
    </main>
  )
}

export default App
