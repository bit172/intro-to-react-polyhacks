import POKEMONS from '../constants/Pokemons.json'

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

export const getPokemons = () =>
  new Promise((resolve, reject) => {
    const timeout = getRandomInt(250, 1000)
    if (!POKEMONS)
      return setTimeout(() => reject(new Error('Pokemons not found')), timeout)

    setTimeout(() => resolve(POKEMONS), timeout)
  })
